import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { getGmailAuthUrl } from "@/lib/gmail/oauth";

export async function GET() {
    const state = randomBytes(32).toString("hex");
    const authUrl = getGmailAuthUrl(state);
    const response = NextResponse.json({ message: "OAuth initialized" });

    response.cookies.set("gmail_oauth_state", state, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 600,
        path: "/",
    });
    return response;
}