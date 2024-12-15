// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@hypernym/nuxt-anime",
    "nuxt-aos",
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData:
            '@use "~/assets/scss/_variables.scss" as *; @use "~/assets/scss/_placeholders.scss" as *; @use "~/assets/scss/_mixins.scss" as *; @use "~/assets/scss/_animations.scss" as *; @use "sass:color";',
        },
      },
    },
  },
  css: ["~/assets/scss/style.scss"],
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
  },
});
