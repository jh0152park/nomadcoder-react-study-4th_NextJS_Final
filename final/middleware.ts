import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session/get-session";

const PublicURL: { [key: string]: boolean } = {
    "/": true,
    "/login": true,
    "/create-account": true,
};

export async function middleware(request: NextRequest) {
    const session = await getSession();
    const isPublicPath = PublicURL[request.nextUrl.pathname];

    if (!session.id) {
        if (!isPublicPath) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    } else {
        if (isPublicPath) {
            return NextResponse.redirect(new URL("/tweet", request.url));
        }
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|image|favicon.ico).*)"],
};
