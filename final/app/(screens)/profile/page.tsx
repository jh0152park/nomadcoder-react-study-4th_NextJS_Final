import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import PRISMA_DB from "@/lib/db/prisma-db";
import getSession from "@/lib/session/get-session";
import BackButton from "@/components/profile/back-button";
import { DEFAULT_PROFILE_PHOTO } from "@/lib/project-common";
import PostSummary from "@/components/post/post-summary";

async function getAllMyPosts(uid: number) {
    const posts = await PRISMA_DB.post.findMany({
        orderBy: {
            created_at: "desc",
        },
        select: {
            id: true,
            like: true,
            userId: true,
            payload: true,
            comment: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    profile_image: true,
                    likePost: true,
                },
            },
        },
    });

    return posts.filter((post) => post.userId === uid);
}

async function getCurrentUser(sid: number) {
    return await PRISMA_DB.user.findUnique({
        where: {
            id: sid,
        },
        select: {
            likePost: true,
        },
    });
}

export default async function Profile() {
    const session = await getSession();
    const myPosts = await getAllMyPosts(session.id!);
    const currentUser = await getCurrentUser(session.id!);

    const user = await PRISMA_DB.user.findUnique({
        where: {
            id: session.id,
        },
        select: {
            email: true,
            username: true,
            description: true,
            profile_image: true,
        },
    });

    async function logOut() {
        "use server";
        const session = await getSession();
        session.destroy();
        redirect("/");
    }

    return (
        <div className="w-full max-w-[430px] h-screen py-5 flex flex-col items-start">
            <div className="flex flex-col items-start w-full px-5">
                <BackButton />
                <div className="flex items-center justify-between w-full mt-10">
                    <div className="flex flex-col items-start justify-center">
                        <span className="text-3xl font-bold">
                            🌈 {user?.username} ✨
                        </span>
                        <span className="mb-5 text-lg font-semibold">
                            {user?.email}
                        </span>
                    </div>
                    <Image
                        src={
                            user?.profile_image! === DEFAULT_PROFILE_PHOTO
                                ? user?.profile_image!
                                : `${user?.profile_image}/public`
                        }
                        alt={user?.username!}
                        width="90"
                        height="90"
                        className="rounded-full size-[90px]"
                        style={{
                            width: "90px",
                            height: "90px",
                        }}
                    />
                </div>

                <span className="w-[90%] h-14 font-extralight text-md ">
                    {user?.description.slice(0, 80)}
                </span>

                <form
                    action={logOut}
                    className="flex items-center justify-center w-full gap-3"
                >
                    <Link
                        href="/profile/edit"
                        className="w-full py-2 mt-5 text-center transition-all border rounded-lg border-neutral-500 hover:bg-neutral-950"
                    >
                        Edit profile
                    </Link>
                    <button
                        type="submit"
                        className="w-full py-2 mt-5 text-center transition-all border rounded-lg border-neutral-500 hover:bg-neutral-950"
                    >
                        Log out
                    </button>
                </form>
            </div>

            <div className="w-full pb-2 mt-12 text-center border-b-2 border-neutral-500">
                Threads
            </div>
            <div className="w-full h-[60%] overflow-y-scroll   pb-10">
                {myPosts.map((post) => (
                    <PostSummary
                        {...post}
                        key={post.id}
                        sessionId={session.id!}
                        currentUser={currentUser!}
                    />
                ))}
            </div>
        </div>
    );
}
