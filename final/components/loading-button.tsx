"use client";

import { useFormStatus } from "react-dom";

export default function LoadingButton({ name }: { name: string }) {
    const { pending } = useFormStatus();

    return (
        <button
            className="text-black font-semibold text-lg py-1.5 w-[390px] bg-[ghostwhite] rounded-lg hover:bg-neutral-300 transition-all text-center"
            disabled={pending}
        >
            {pending ? "Loading" : name}
        </button>
    );
}
