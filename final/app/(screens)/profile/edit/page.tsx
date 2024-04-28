import PRISMA_DB from "@/lib/db/prisma-db";
import getSession from "@/lib/session/get-session";
import WriteProfile from "./write-profile";

async function getUser(sid: number) {
    return await PRISMA_DB.user.findUnique({
        where: {
            id: sid,
        },
        select: {
            username: true,
            description: true,
        },
    });
}

export default async function EditProfile() {
    const session = await getSession();
    const user = await getUser(session.id!);

    return (
        <WriteProfile name={user?.username!} description={user?.description!} />
    );
}
