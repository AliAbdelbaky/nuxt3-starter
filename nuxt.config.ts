// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: ['nuxtjs-naive-ui', '@nuxtjs/tailwindcss', "@nuxtjs/i18n", "@vueuse/nuxt", "nuxt-icon", '@sidebase/nuxt-auth', '@pinia/nuxt'],
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
        defaultLocale: 'en'
    },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.PROD_BASE_URL,
            API_SECRET: process.env.API_SECRET || 'no secret',
        },
    },
    postcss: {
        plugins: {
            'postcss-nested': {}
        }
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            titleTemplate: '%s - Nuxt 3 Starter Kit', title: '[TITLE PLACEHOLDER]',
        }
    }
})