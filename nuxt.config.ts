// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  app: {
    head: {
      title: "super nuxt tuto",
      meta: [
        {
          name: "descript",
          content: "super webside omg amazing wowowow",
        }
      ]
    }
  },
  hooks: {
    ready: (ctx) => console.log(ctx),
  },
  alias : {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
