import { z } from "zod";

import { tryParseEnv } from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  TURSO_DATABASE_URL: z.string().url(),
  TURSO_AUTH_TOKEN: z.string().optional(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string().url().optional(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export const env = tryParseEnv(EnvSchema);
