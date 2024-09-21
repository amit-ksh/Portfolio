// https://nuxt.com/v3

// <meta property="og:title" content="Colby Fayock - A UX Designer &amp; Front-end Developer Blog" />
// <meta property="og:type" content="website" />
// <meta property="og:image" content="/static/website-social-card-44070c4a901df708aa1563ac4bbe595a.jpg" />
// <meta property="og:url" content="https://www.colbyfayock.com" />
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
            'Young self-motivated software developer and a ML enthusiast from India. Have expertise in modern tech stacks like React, Next, Vue, Node.js and PostgreSQL.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Amit Sharma - Software Developer',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://amit-ksh.netlify.app',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Young self-motivated software developer and a ML enthusiast from India.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://ffb3-2405-201-a405-3095-608f-2794-a00f-6d35.ngrok-free.app/share.png',
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

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      'Exo+2': {
        ital: [700],
      },
      'Space+Mono': true,
    },
  },

  compatibilityDate: '2024-09-21',
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV || 'development',
    },
  },
})
