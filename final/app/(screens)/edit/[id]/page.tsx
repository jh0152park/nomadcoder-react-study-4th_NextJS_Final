import PRISMA_DB from "@/lib/db/prisma-db";
import { notFound, redirect } from "next/navigation";
import { IsExistPost } from "../../tweet/[id]/action";
import UpdatePost from "./update-post";

interface IProps {
    params: {
        id: number;
    };
}

async function getPost(id: number) {
    return await PRISMA_DB.post.findUnique({
        where: {
            id: id,
        },
        select: {
            payload: true,
        },
    });
}

export default async function Edit({ params }: IProps) {
    if (isNaN(+params.id)) {
        notFound();
    }

    if (!(await IsExistPost(+params.id))) {
        notFound();
    }

    const post = await getPost(+params.id);

    return <UpdatePost id={+params.id} payload={post?.payload!} />;
}
