"use server";

import { z } from "zod";
import PRISMA_DB from "@/lib/db/prisma-db";
import { redirect } from "next/navigation";

const INVALID_KEYWORD = [
    "fuck",
    "master",
    "admin",
    "시발",
    "개새끼",
    "좆",
    "운영자",
];

const formSchema = z
    .object({
        username: z
            .string({
                invalid_type_error: "Username have to be a string",
                required_error: "Username is required",
            })
            .trim()
            .refine(isValidUserame, "Invalid username!"),

        email: z
            .string({
                invalid_type_error: "Email have to be a string",
                required_error: "Email is required",
            })
            .email(),

        password: z
            .string()
            .min(5, "Password must be at least 5 characters")
            .max(20, "Password must be less than 20 characters"),
    })
    .superRefine(async (data, ctx) => {
        const user = await PRISMA_DB.user.findUnique({
            where: {
                username: data.username,
            },
            select: {
                id: true,
            },
        });

        if (user) {
            ctx.addIssue({
                code: "custom",
                message: "Username already exist",
                path: ["username"],
                fatal: true,
            });
            return z.NEVER;
        }
    })
    .superRefine(async (data, ctx) => {
        const user = await PRISMA_DB.user.findUnique({
            where: {
                email: data.email,
            },
            select: {
                id: true,
            },
        });

        if (user) {
            ctx.addIssue({
                code: "custom",
                message: "Email already exist",
                path: ["email"],
                fatal: true,
            });
            return z.NEVER;
        }
    });

export async function CreateAccount(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        username: formData.get("username"),
        password: formData.get("password"),
    };

    const result = await formSchema.safeParseAsync(data);

    if (!result.success) {
        return result.error.flatten();
    } else {
        const user = await PRISMA_DB.user.create({
            data: {
                email: result.data.email,
                username: result.data.username,
                password: result.data.password,
            },
            select: {
                id: true,
            },
        });

        if (user) {
            redirect("/login");
        }
    }

    // 계정을 생성했다고 세션을 만들어주면 안됨, 아직 엄밀히 말하면 로그인하기 이전임
    // await UpdateSession(user.id);
}

function isValidUserame(username: string) {
    for (let keyword of INVALID_KEYWORD) {
        if (
            username.includes(keyword) ||
            username.includes(keyword.toUpperCase())
        )
            return false;
    }
    return true;
}
