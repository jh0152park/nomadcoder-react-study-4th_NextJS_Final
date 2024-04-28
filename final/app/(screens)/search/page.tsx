"use client";

import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";

export default function Messages() {
    const router = useRouter();

    const { handleSubmit, register } = useForm();

    function onSubmit(data: FieldValues) {
        router.push(`/search/${data.search}`);
    }

    return (
        <div className="w-full max-w-[430x] h-screen overflow-y-scroll flex flex-col items-center justify-start p-5 pt-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex justify-start items-center gap-1"
            >
                <input
                    type="text"
                    className="w-[80%] px-3 py-2 rounded-lg bg-black border text-[ghostwhite] placeholder:text-neutral-500 active:outline-none focus:outline-none font-semibold placeholder:font-semibold "
                    placeholder="Searhch 🔍"
                    {...register("search", { required: true })}
                />
                <button
                    type="submit"
                    className=" py-2 w-[20%] border-[1.5px] border-neutral-300 rounded-lg bg-black hover:bg-neutral-700 transition-all"
                >
                    Search
                </button>
            </form>
            <div className="flex justify-center w-full mt-5">
                <Image
                    src="/image/pepe_search.png"
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
