"use client";

import Image from "next/image";
import MoreButton from "./more-button";
import ActionButton from "./action-button";
import { DEFAULT_PROFILE_PHOTO } from "@/lib/project-common";
import { useRouter } from "next/navigation";

interface IPost {
    id: number;
    user: {
        username: string;
        id: number;
        profile_image: string | null;
    };
    payload: string;
    like: number;
    comment: string[];
    userId: number;
    sessionId: number;
}

export default function PostSummary({
    id,
    user,
    like,
    userId,
    payload,
    sessionId,
}: IPost) {
    const router = useRouter();

    function onPostClick(event: any) {
        if (
            event.target.textContent === "Edit" ||
            event.target.textContent === "Delete"
        ) {
            //
        } else if (!event.target.className.toString().includes("SVG"))
            router.push(`/tweet/${id}`);
        else return;
        // if (
        //     event.target.textContent === "Edit" ||
        //     event.target.textContent === "Delete"
        // ) {
        //     return;
        // }
    }

    return (
        <div
            className="flex items-start justify-start w-full p-4 max-w-[430px] hover:bg-neutral-900 transition-all duration-200 hover:cursor-pointer rounded-md relative"
            onClick={onPostClick}
        >
            <div className="overflow-hidden rounded-full size-[50px] mr-5">
                <Image
                    src={
                        user.profile_image === DEFAULT_PROFILE_PHOTO
                            ? user.profile_image
                            : `${user.profile_image}/public`
                    }
                    alt={user.username}
                    width="50"
                    height="50"
                    style={{
                        width: "50px",
                        height: "50px",
                    }}
                    priority={true}
                />
            </div>
            <div className="flex flex-col items-start w-[320px]">
                <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-[12px] font-semibold">
                        {user.username}
                    </span>
                    {userId === sessionId && <MoreButton id={id} />}
                </div>
                <span className="text-sm font-extralight">{payload}</span>

                <ActionButton likeCount={like} id={id} userId={sessionId} />
            </div>
        </div>
    );
}
