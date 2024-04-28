"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import PRISMA_DB from "@/lib/db/prisma-db";
import UpdateSession from "@/lib/session/update-session";

const formSchema = z.object({
    email: z
        .string({
            invalid_type_error: "Email have to be a string",
        })
        .email()
        .refine(isExistEmail, "Please check your email"),
    password: z
        .string()
        .min(5, "Password must be at least 5 characters")
        .max(20, "Password must be less than 20 characters"),
});

export async function Login(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const result = await formSchema.safeParseAsync(data);

    if (!result.success) {
        return result.error.flatten();
    } else {
        const user = await PRISMA_DB.user.findUnique({
            where: {
                email: result.data.email,
            },
            select: {
                id: true,
                password: true,
            },
        });

        if (user!.password === result.data.password) {
            await UpdateSession(user!.id);
            redirect("/tweet");
        } else {
            return {
                fieldErrors: {
                    password: ["Please check your password"],
                    email: [],
                },
            };
        }
    }
}

async function isExistEmail(email: string) {
    const user = await PRISMA_DB.user.findUnique({
        where: {
            email: email,
        },
        select: {
            id: true,
        },
    });

    return Boolean(user);
}
