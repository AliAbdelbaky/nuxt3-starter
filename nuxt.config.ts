// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['nuxtjs-naive-ui', '@nuxtjs/tailwindcss'],
    css:['~~/assets/css/main.css'],
    tailwindcss: {
        cssPath: false,
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    }
})