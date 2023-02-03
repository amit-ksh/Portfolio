// https://nuxt.com/v3

export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
      title: 'Amit Kumar Sharma',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Young self-motivated full-stack developer and a ML enthusiast from India. Have expertise in modern tech stacks like React, Next, Vue, Node.js and PostgreSQL.',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    layoutTransition: false,
    pageTransition: false,
  },

  // Global CSS
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

  postcss: require('./postcss.config'),

  googleFonts: {
    families: {
      'Exo+2': {
        ital: [700],
      },
      'Space+Mono': true,
    },
  },

  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV || 'development',
    },
  },
})
