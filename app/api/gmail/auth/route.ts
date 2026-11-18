import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { getGmailAuthUrl } from "@/lib/gmail/oauth";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
    const supabase = await createClient();

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error || !user) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    const state = randomBytes(32).toString("hex");
    const authUrl = getGmailAuthUrl(state);
    const response = NextResponse.redirect(authUrl);

    response.cookies.set("gmail_oauth_state", state, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 600,
        path: "/",
    });
    return response;
}