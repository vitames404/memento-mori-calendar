// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/fonts', '@nuxt/icon'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css', // Path to your custom Tailwind CSS file
    configPath: 'tailwind.config', // Path to your Tailwind config file
    exposeConfig: false, // Expose Tailwind config in runtime
    viewer: true, // Enable the Tailwind viewer
  },

  colorMode: {
    classSuffix: '', // Optional: Add a suffix to the dark mode class
  },

  compatibilityDate: '2025-01-27',
});