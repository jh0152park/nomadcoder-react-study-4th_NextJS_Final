import BackButton from "@/components/profile/back-button";
import { SearchPost } from "../action";
import PostSummary from "@/components/post/post-summary";
import MBBuffer from "@/components/post/mb-buffer";
import getSession from "@/lib/session/get-session";

export default async function SearchDetail({
    params,
}: {
    params: { keyword: string };
}) {
    const decodeKeyword = decodeURI(params.keyword);
    const posts = await SearchPost(decodeKeyword);
    const session = await getSession();

    return (
        <div className="w-full max-w-[430px] h-full flex flex-col items-start justify-start pt-20 ">
            <div className="fixed top-0 flex items-center max-w-[430px] justify-center w-full bg-black -translate-x-1/2 left-1/2 border border-neutral-400 border-t-0 border-b-0 h-[70px]">
                <div className="absolute left-5 top-5">
                    <BackButton />
                </div>
                <span className="absolute text-xl font-bold -translate-x-1/2 left-1/2 top-5">
                    Search for {decodeKeyword}
                </span>
            </div>

            {posts.map((post) => (
                <PostSummary key={post.id} {...post} sessionId={session.id!} />
            ))}
            <MBBuffer mb="32" />
        </div>
    );
}
