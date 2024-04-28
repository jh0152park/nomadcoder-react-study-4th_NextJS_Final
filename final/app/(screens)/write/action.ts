"use server";

import PRISMA_DB from "@/lib/db/prisma-db";
import getSession from "@/lib/session/get-session";
import { redirect } from "next/navigation";

export async function UploadPost(_: any, formData: FormData) {
    const post = formData.get("post");
    const session = await getSession();

    await PRISMA_DB.post.create({
        data: {
            payload: post + "",
            user: {
                connect: {
                    id: session.id,
                },
            },
        },
    });

    // const user = await PRISMA_DB.user.findUnique({
    //     where: {
    //         id: session.id,
    //     },
    //     select: {
    //         Post: true,
    //         LikePost: true,
    //     },
    // });

    // console.log(user);

    redirect("/tweet");
}
