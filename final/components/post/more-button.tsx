"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { DeletePost } from "@/app/(screens)/tweet/action";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function MoreButton({ id }: { id: number }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative" id="more-button">
            <EllipsisHorizontalIcon
                className="w-5 hover:cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            />
            <div
                className="absolute top-0 *:text-[11px] transition-all  cursor-pointer -left-24 *:font-semibold"
                style={{
                    display: open ? "block" : "none",
                }}
            >
                <div className="flex items-start justify-center gap-2  *:transition-all *:duration-200">
                    <Link
                        href={`/edit/${id}`}
                        className="px-1.5 py-1 border rounded-md border-neutral-500 hover:bg-neutral-700"
                    >
                        Edit
                    </Link>

                    <form
                        action={() => {
                            setOpen(false);
                            DeletePost(id);
                        }}
                    >
                        <button
                            type="submit"
                            className="px-1.5 py-1 border rounded-md border-neutral-500 hover:bg-neutral-700"
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
