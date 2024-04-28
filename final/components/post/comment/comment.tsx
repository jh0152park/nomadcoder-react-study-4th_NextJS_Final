"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AddComment } from "@/app/(screens)/tweet/[id]/action";

interface IProps {
    id: number;
    comment: string[];
}

export default function Comment({ id, comment }: IProps) {
    const [comments, setComments] = useState<string[]>(comment);
    const { reset, handleSubmit, register } = useForm();

    async function updateComment(data: FieldValues) {
        const newComment = data.comment;
        reset();
        const post = await AddComment(id, comments, newComment);
        setComments(post.comment);
    }

    return (
        <div className="w-full h-full relative">
            <span className="text-sm">{comments.length} comments</span>

            {comments.map((comment, i) => (
                <p key={i} className="w-full py-3">
                    ﹒ {comment}
                </p>
            ))}

            <div className="w-full h-14" />

            <form
                onSubmit={handleSubmit(updateComment)}
                className="w-full h-10 fixed bottom-16 max-w-[430px] -translate-x-1/2 left-1/2 flex gap-1 px-1 "
            >
                <input
                    type="type"
                    className="w-[85%] px-3 py-2 rounded-lg bg-black border text-[ghostwhite] placeholder:text-neutral-500 active:outline-none focus:outline-none font-semibold placeholder:font-semibold "
                    placeholder="Comment ✍🏻"
                    {...register("comment", { required: true })}
                />
                <button
                    type="submit"
                    className=" py-2 w-[15%] border-[1.5px] border-neutral-300 rounded-lg bg-black hover:bg-neutral-700 transition-all"
                >
                    Add
                </button>
            </form>
        </div>
    );
}
