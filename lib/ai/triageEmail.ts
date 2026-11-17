
import "server-only";
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { triageResultSchema, type TriageResult} from "./triageSchema";
import { TRIAGE_INSTRUCTIONS } from "./triagePrompt";

const openai = new OpenAI();
const TRIAGE_MODEL = "gpt-5.5";
const MAX_BODY_CHARACTERS = 4000;

export async function triageEmail(subject: string, body: string): Promise<TriageResult> {
    const response = await openai.responses.parse({
        model: TRIAGE_MODEL,
        instructions: TRIAGE_INSTRUCTIONS,
        input: `Subject: ${subject}\n\nBody:\n${body.slice(0, MAX_BODY_CHARACTERS)}`,
        text: { format: zodTextFormat(triageResultSchema, "triage_result")},
    });
        const result = response.output_parsed;

    if (!result) {
        throw new Error("OpenAI did not return a triage result");
    }

    return result;
}

