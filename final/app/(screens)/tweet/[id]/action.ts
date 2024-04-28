"use server";

import PRISMA_DB from "@/lib/db/prisma-db";

export async function IsExistPost(id: number) {
    const post = await PRISMA_DB.post.findUnique({
        where: {
            id: +id,
        },
        select: {
            id: true,
        },
    });

    return Boolean(post);
}

export async function getPost(id: number) {
    return await PRISMA_DB.post.findUnique({
        where: {
            id: +id,
        },
        select: {
            id: true,
            like: true,
            userId: true,
            payload: true,
            comment: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    profile_image: true,
                    likePost: true,
                },
            },
        },
    });
}

export async function AddComment(
    id: number,
    prevComment: string[],
    newComment: string
) {
    return await PRISMA_DB.post.update({
        where: {
            id: +id,
        },
        data: {
            comment: [...prevComment, newComment],
        },
        select: {
            comment: true,
        },
    });
}
