import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  // Nuxt 4 resolves serverDir and public from the root by default; keep them under src/.
  serverDir: "src/server",
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  dir: {
    public: "src/public",
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "nuxt-csurf",
    "nuxt-maplibre",
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["maplibre-gl"],
    },
  },
  colorMode: {
    dataValue: "theme",
  },
});
