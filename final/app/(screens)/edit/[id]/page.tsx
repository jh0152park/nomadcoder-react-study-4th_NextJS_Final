"use client";

import LoadingButton from "@/components/loading-button";
import BackButton from "@/components/profile/back-button";
import TextArea from "@/components/text-area";

import { notFound } from "next/navigation";
import { useFormState } from "react-dom";
import { EditPost } from "../action";

export default function Edit({ params }: { params: { id: number } }) {
    if (isNaN(+params.id)) {
        notFound();
    }

    const [_, trigger] = useFormState(EditPost, +params.id);

    return (
        <div className="w-full max-w-[430px] h-full flex flex-col items-start justify-start p-5 ">
            <BackButton />
            <span className="absolute text-xl font-bold -translate-x-1/2 left-1/2 top-5">
                Edit threads
            </span>

            <form action={trigger} className="flex flex-col w-full gap-3 mt-14">
                <TextArea
                    name="edit"
                    h="200"
                    placeholder="Edit your post here 😎 🔥 💪🏻 👻"
                    required
                />
                <LoadingButton name="Edit" />
            </form>
        </div>
    );
}
