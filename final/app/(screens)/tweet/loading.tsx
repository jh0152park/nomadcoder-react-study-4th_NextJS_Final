export default function Loading() {
    return (
        <div className="flex flex-col gap-2 p-5 animate-pulse w-full max-w-[430px] ">
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="w-full rounded-md h-36 bg-neutral-400 "
                />
            ))}
        </div>
    );
}
