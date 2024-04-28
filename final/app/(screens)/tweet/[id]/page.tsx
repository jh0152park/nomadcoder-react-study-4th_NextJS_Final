import { notFound } from "next/navigation";
import { IsExistPost, getPost } from "./action";
import BackButton from "@/components/profile/back-button";
import getSession from "@/lib/session/get-session";
import PostSummary from "@/components/post/post-summary";
import Comment from "@/components/post/comment/comment";

export default async function TweetDetail({
    params,
}: {
    params: { id: number };
}) {
    const id = params.id;
    const session = await getSession();

    if (isNaN(id)) {
        notFound();
    }

    if (!(await IsExistPost(id))) {
        notFound();
    }

    const post = await getPost(id);

    return (
        <div className="w-full max-w-[430px] h-screen flex flex-col items-start justify-start pb-16">
            <div className="pt-5 pl-5 mb-4">
                <BackButton />
            </div>
            <PostSummary {...post!} sessionId={session.id!} />
            <div className="w-full h-full overflow-y-scroll p-5">
                <Comment id={id} comment={post?.comment!} />
            </div>
        </div>
    );
}
