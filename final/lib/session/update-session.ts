import getSession from "./get-session";

export default async function UpdateSession(id: number) {
    const session = await getSession();
    session.id = id;
    await session.save();
}
