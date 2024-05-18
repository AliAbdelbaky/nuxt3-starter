// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['nuxtjs-naive-ui', '@nuxtjs/tailwindcss', "@nuxtjs/i18n", "@vueuse/nuxt"],
    css: ['~~/assets/css/main.css'],
    tailwindcss: {
        cssPath: false,
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: './i18n/en.json'
            },
            {
                code: 'ar',
                name: 'Arabic',
                iso: 'ar-EG',
                file: './i18n/ar.json'
            }
        ],
        defaultLocale: 'en',
        // vueI18n: {
        //     fallbackLocale: 'en',
        //     messages: {
        //         en: require('./i18n/en.json'),
        //         es: require('./i18n/ar.json')
        //     }
        // }
    },
})