import tailwindcss from "@tailwindcss/vite";

import { env } from "./src/lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    dataValue: "theme",
  },
  runtimeConfig: {
    public: {
      betterAuthUrl: env.BETTER_AUTH_URL,
    },
  },
});
