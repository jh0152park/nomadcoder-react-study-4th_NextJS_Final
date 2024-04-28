"use client";
import {
    ChatBubbleOvalLeftIcon as SolidMessageIcon,
    HeartIcon as SolidHeartIcon,
    PencilSquareIcon as SolidPostIcon,
    HomeIcon as SolidHomeIcon,
    UserIcon as SolidUserIcon,
    MagnifyingGlassIcon as SolidSearchIcon,
} from "@heroicons/react/24/solid";
import {
    ChatBubbleOvalLeftIcon as OutlineMessageIcon,
    HeartIcon as OutlineHeartIcon,
    PencilSquareIcon as OutlinePostIcon,
    HomeIcon as OutlineHomeIcon,
    UserIcon as OutlineUserIcon,
    MagnifyingGlassIcon as OutlineSearchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
    const pathname = usePathname();

    return (
        <div
            className="max-w-[430px] w-full h-14 px-7 pb-6 pt-2  fixed bottom-0 flex items-center justify-between *:text-neutral-600 bg-black
        border border-neutral-400 border-t-0 border-b-0"
        >
            <Link href="/tweet">
                {pathname === "/tweet" ? (
                    <SolidHomeIcon className="size-7 text-neutral-300" />
                ) : (
                    <OutlineHomeIcon className="size-7" />
                )}
            </Link>
            <Link href="/search">
                {pathname === "/search" ? (
                    <SolidSearchIcon className="size-7 text-neutral-300" />
                ) : (
                    <OutlineSearchIcon className="size-7" />
                )}
            </Link>
            <Link href="/write">
                {pathname === "/write" ? (
                    <SolidPostIcon className="size-7 text-neutral-300" />
                ) : (
                    <OutlinePostIcon className="size-7" />
                )}
            </Link>
            <Link href="/likes">
                {pathname === "/likes" ? (
                    <SolidHeartIcon className="size-7 text-neutral-300" />
                ) : (
                    <OutlineHeartIcon className="size-7" />
                )}
            </Link>
            <Link href="/profile">
                {pathname === "/profile" ? (
                    <SolidUserIcon className="size-7 text-neutral-300" />
                ) : (
                    <OutlineUserIcon className="size-7" />
                )}
            </Link>
        </div>
    );
}
