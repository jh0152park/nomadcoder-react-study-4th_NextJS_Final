import { InputHTMLAttributes } from "react";

interface IInput {
    name: string;
    h?: string;
    errors?: string[];
}

export default function TextArea({
    name,
    h = "80",
    errors = [],
    ...extraProps
}: IInput & InputHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className="flex flex-col gap-2">
            <textarea
                name={name}
                {...extraProps}
                className="w-[390px] px-3 py-2 rounded-lg bg-black border text-[ghostwhite] placeholder:text-neutral-500 active:outline-none focus:outline-none font-semibold placeholder:font-semibold resize-none"
                style={{
                    height: `${h}px`,
                }}
            />
            {/* {errors.map((error, index) => (
                <span key={index} className="font-medium text-red-500">
                    {error}
                </span>
            ))} */}
        </div>
    );
}
