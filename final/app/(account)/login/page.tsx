/* eslint-disable */

"use client";

import Link from "next/link";
import Image from "next/image";
import Input from "@/components/input";
import LoadingButton from "@/components/loading-button";
import { useFormState } from "react-dom";
import { Login } from "./action";

export default function LoginPage() {
    const [state, trigger] = useFormState(Login, null);

    return (
        <div className="flex flex-col items-center justify-start w-full h-full px-10">
            <Image
                src="/image/logo.png"
                alt="logo"
                width="100"
                height="100"
                priority={true}
                style={{
                    width: "auto",
                    height: "auto",
                }}
            />
            <span className="mb-16 text-2xl font-bold">Log In</span>

            <form action={trigger} className="flex flex-col gap-3 ">
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    errors={state?.fieldErrors.email}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    errors={state?.fieldErrors.password}
                />
                <LoadingButton name="Login" />
            </form>
            <span className="w-full mt-2 text-sm text-center">
                Don't have an accont yet?
                <Link
                    href="/create-account"
                    className="transition-all  hover:text-neutral-300"
                >
                    {" "}
                    Let's create new one 👻
                </Link>
            </span>
        </div>
    );
}
