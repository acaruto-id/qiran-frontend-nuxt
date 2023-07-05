// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
    css: ['@/assets/css/app.css', '@fortawesome/fontawesome-svg-core/styles.css'],
    build: {
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/vue-fontawesome',
        ],
    },
})
