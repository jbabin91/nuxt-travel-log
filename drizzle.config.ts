import { defineConfig } from "drizzle-kit";

import { env } from "./src/lib/env";

export default defineConfig({
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema/index.ts",
  dialect: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  casing: "snake_case",
});
