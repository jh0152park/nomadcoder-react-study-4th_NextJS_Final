"use client";

import Image from "next/image";
import { UploadPost } from "./action";
import { useFormState } from "react-dom";
import TextArea from "@/components/text-area";
import LoadingButton from "@/components/loading-button";
import BackButton from "@/components/profile/back-button";

export default function Write() {
    const [_, trigger] = useFormState(UploadPost, null);

    return (
        <div className="w-full max-w-[430px] h-full flex flex-col items-start justify-start p-5 ">
            <BackButton />

            <span className="absolute text-xl font-bold -translate-x-1/2 left-1/2 top-5">
                Write threads
            </span>

            <form action={trigger} className="flex flex-col w-full gap-3 mt-14">
                <TextArea
                    name="post"
                    h="150"
                    placeholder="What is going on!? 😎 🌈 ✨ 👻 🍩"
                    required
                />
                <LoadingButton name="Post" />
            </form>
            <div className="flex justify-center w-full mt-5">
                <Image
                    src="/image/pepe_write.png"
                    alt="pepe"
                    width="150"
                    height="150"
                    priority={true}
                    style={{
                        width: "auto",
                        height: "auto",
                    }}
                />
            </div>
        </div>
    );
}
