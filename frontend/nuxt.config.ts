// nuxt.config.ts
export default defineNuxtConfig({
  // Habilitar Nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-01-01",

  // Módulos
  modules: ["@pinia/nuxt"],

  // CSS global
  css: ["~/assets/styles/reset.scss"],

  // Tailwind vía Vite plugin
  vite: {
    plugins: [
      // Si usas @tailwindcss/vite
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // Importar variables en todos los componentes automáticamente
          additionalData: `@use "~/assets/styles/variables.scss" as *;`,
        },
      },
    },
  },

  // TypeScript estricto
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
