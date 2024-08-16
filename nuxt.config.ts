// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/icon"],
  content: {
    highlight: {
      theme: "nord",
      preload: ["ts", "js", "css", "java", "json", "bash", "vue"],
    },
  },
});
