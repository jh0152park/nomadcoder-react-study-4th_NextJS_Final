"use server";

import PRISMA_DB from "@/lib/db/prisma-db";
import getSession from "@/lib/session/get-session";
import { redirect } from "next/navigation";

export async function EditPost(prevState: any, formData: FormData) {
    const id = prevState;
    const data = {
        post: formData.get("edit"),
    };

    const session = await getSession();
    const post = await PRISMA_DB.post.findUnique({
        where: {
            id: id,
        },
        select: {
            userId: true,
        },
    });

    if (post?.userId !== session.id) {
        redirect("/tweet");
    }

    await PRISMA_DB.post.update({
        where: {
            id: id,
        },
        data: {
            payload: data.post + "",
        },
    });

    redirect("/tweet");

    return 0;
}
