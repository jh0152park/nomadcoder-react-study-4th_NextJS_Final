import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen p-5 ">
            <Image
                src="/image/logo.png"
                alt="logo"
                width="100"
                height="100"
                priority={true}
                style={{
                    width: "auto",
                    height: "auto",
                }}
            />
            <div className="absolute flex flex-col items-center justify-center gap-2 bottom-7">
                <Link
                    href="/create-account"
                    className="text-black font-semibold text-lg py-2 w-[390px] bg-[ghostwhite] rounded-lg hover:bg-neutral-300 transition-all text-center"
                >
                    Start
                </Link>
                <span className="text-sm ">
                    You already have an account?
                    <Link
                        href="/login"
                        className="transition-all hover:text-neutral-300"
                    >
                        {" "}
                        Login
                    </Link>
                </span>
            </div>
        </div>
    );
}
