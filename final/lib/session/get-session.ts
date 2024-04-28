import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface ICookie {
    id?: number;
}

export default function getSession() {
    return getIronSession<ICookie>(cookies(), {
        cookieName: "hyeon-threads",
        password: process.env.COOKIE_PASSWORD!,
    });
}
