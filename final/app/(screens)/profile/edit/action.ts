"use server";

import PRISMA_DB from "@/lib/db/prisma-db";
import getSession from "@/lib/session/get-session";
import { redirect } from "next/navigation";

export async function UpdateProfile(prevState: any, formData: FormData) {
    const data = {
        photo: formData.get("photo"),
        username: formData.get("username"),
        description: formData.get("description"),
    };
    const session = await getSession();

    if (data.username) {
        await PRISMA_DB.user.update({
            where: {
                id: session.id,
            },
            data: {
                username: data.username.toString(),
            },
        });
    }

    if (data.description) {
        await PRISMA_DB.user.update({
            where: {
                id: session.id,
            },
            data: {
                description: data.description.toString(),
            },
        });
    }

    // @ts-ignore
    if (data.photo["size"]) {
        console.log("photo should be change!");

        let photoURL = "";
        let uploadURL = "";
        const response = await getImageUploadURL2CF();

        if (response.success) {
            uploadURL = response.result.uploadURL;
            photoURL = `https://imagedelivery.net/YgDzKoC5M4EUjo9dkUT0aQ/${response.result.id}`;

            const uploadForm = new FormData();
            uploadForm.append("file", data.photo!);

            const uploadResponse = await fetch(uploadURL, {
                method: "POST",
                body: uploadForm,
            });

            if (uploadResponse.status === 200) {
                await PRISMA_DB.user.update({
                    where: {
                        id: session.id,
                    },
                    data: {
                        profile_image: photoURL,
                    },
                });
            }
        }
    }

    redirect("/profile");
}

export async function getImageUploadURL2CF() {
    const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v2/direct_upload`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.CF_TOKEN}`,
            },
        }
    );

    const data = await response.json();
    return data;
}
