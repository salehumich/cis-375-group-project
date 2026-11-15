
import { z } from "zod";

export const EMAIL_CATEGORIES = ["product_issue", "billing", "feature_request", "other"] as const; 

export const triageResultSchema = z.object ({
    category: z.enum(EMAIL_CATEGORIES),
    urgent: z.boolean(),
    summary: z.string().min(1).max(200),
});

