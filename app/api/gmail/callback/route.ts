import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { oauth2Client } from "@/lib/gmail/oauth";

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code");
    const state = request.nextUrl.searchParams.get("state");

    const savedState = request.cookies.get("gmail_oauth_state")?.value;
    if (!state || !savedState || state !== savedState) {
        return NextResponse.json(
            { error: "Invalid OAuth state" },
            { status: 400 }
        );
    }

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

    if (!code) {
        return NextResponse.json(
            { error: "Missing authorization code" },
            { status: 400 }
        );
    }
}