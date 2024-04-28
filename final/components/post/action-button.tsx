"use client";

import { useState } from "react";
import {
    ChatBubbleOvalLeftIcon as OutlineChatIcon,
    HeartIcon as OutlineHeartIcon,
    ArrowPathIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { DecreaseLike, IncreaseLike } from "@/app/(screens)/tweet/action";
import { useRouter } from "next/navigation";

export default function ActionButton({
    id,
    userId,
    likeCount,
    alreadyLike,
}: {
    id: number;
    userId: number;
    likeCount: number;
    alreadyLike: boolean;
}) {
    const router = useRouter();

    const [share, setShare] = useState(false);
    const [message, setMessage] = useState(false);

    const [like, setLike] = useState(alreadyLike);
    const [count, setCount] = useState(likeCount);

    async function toggleHeart() {
        if (like) {
            // to be dislike
            await DecreaseLike(id, likeCount, userId);
            setCount(count - 1 > 0 ? count - 1 : 0);
        } else {
            // to be like
            await IncreaseLike(id, likeCount, userId);
            setCount(count + 1);
        }

        setLike((prev) => !prev);
        router.refresh();
    }

    // const { data, mutate } = useSWR(
    //     `like_${id}`,
    //     () => getPostLike(id, userId),
    //     {
    //         revalidateIfStale: true,
    //         revalidateOnFocus: false,
    //     }
    // );

    // async function toggleHeart() {
    //     if (data?.like) {
    //         // currently already like
    //         await DecreaseLike(id, likeCount, userId);
    //         mutate(
    //             {
    //                 like: !data?.like,
    //                 count: data?.count! - 1 > 0 ? data?.count! - 1 : 0,
    //             },
    //             true
    //         );
    //     } else {
    //         // currently not like
    //         await IncreaseLike(id, likeCount, userId);
    //         mutate(
    //             {
    //                 like: !data?.like,
    //                 count: data?.count! + 1,
    //             },
    //             true
    //         );
    //     }
    //     router.refresh();
    // }

    return (
        <div className="flex flex-col" id="action-button">
            <div className="flex items-center justify-start gap-2 mt-3">
                {like ? (
                    <SolidHeartIcon
                        className="w-[22px] text-red-500"
                        onClick={toggleHeart}
                    />
                ) : (
                    <OutlineHeartIcon
                        className="w-[22px] "
                        onClick={toggleHeart}
                    />
                )}
                <OutlineChatIcon className="w-[22px]" />
                <ArrowPathIcon
                    className={`${["w-[22px]", share ? "text-green-500" : ""].join(" ")}`}
                    onClick={() => setShare((prev) => !prev)}
                />
                <PaperAirplaneIcon
                    className={`${["w-[22px]", message ? "text-blue-500" : ""].join(" ")}`}
                    onClick={() => setMessage((prev) => !prev)}
                />
            </div>
            <span className="mt-2 text-sm text-neutral-400">{count} likes</span>
        </div>
    );
}
