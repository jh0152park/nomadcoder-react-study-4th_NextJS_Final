"use server";

import PRISMA_DB from "@/lib/db/prisma-db";
import { redirect } from "next/navigation";

export async function EditPost(prevState: any, formData: FormData) {
    const id = prevState;
    const data = {
        post: formData.get("edit"),
    };

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
