import { z } from "zod";

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(8).max(32),
  rememberMe: z.boolean().default(false),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
