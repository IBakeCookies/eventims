import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/test-utils/module', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
    devtools: { enabled: true },
    alias: {
        '@data': fileURLToPath(new URL('./custom/data', import.meta.url)),
    },
    compatibilityDate: '2024-11-01',
    nitro: {
        compressPublicAssets: true,
    },
    typescript: {
        typeCheck: true,
        tsConfig: {
            compilerOptions: {
                baseUrl: '.',
                noUncheckedIndexedAccess: true,
                paths: {
                    '@data/*': ['./custom/data/*'],
                },
            },
        },
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
            },
        },
    },
});
