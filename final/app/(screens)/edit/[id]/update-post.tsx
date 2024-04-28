"use client";

import TextArea from "@/components/text-area";
import LoadingButton from "@/components/loading-button";
import BackButton from "@/components/profile/back-button";

import { EditPost } from "../action";
import { useFormState } from "react-dom";

interface IProps {
    id: number;
    payload: string;
}

export default function UpdatePost({ id, payload }: IProps) {
    const [_, trigger] = useFormState(EditPost, id);

    return (
        <div className="w-full max-w-[430px] h-full flex flex-col items-start justify-start p-5 ">
            <BackButton />
            <span className="absolute text-xl font-bold -translate-x-1/2 left-1/2 top-5">
                Edit threads
            </span>

            <form action={trigger} className="flex flex-col w-full gap-3 mt-14">
                <TextArea name="edit" h="200" placeholder={payload} required />
                <LoadingButton name="Edit" />
            </form>
        </div>
    );
}
