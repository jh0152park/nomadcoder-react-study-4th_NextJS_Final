"use server";

import PRISMA_DB from "@/lib/db/prisma-db";

export async function SearchPost(keyword: string) {
    if (!keyword) {
        return [];
    }

    let posts = await PRISMA_DB.post.findMany({
        orderBy: {
            created_at: "desc",
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
                },
            },
        },
    });

    return posts.filter((post) => post.payload.includes(keyword! + ""));
}
