import potdProblems from './data/potd.json'

export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: '404.html',
    // Every problem gets a real HTML file, so /potd/<slug> loads directly and
    // is crawlable rather than relying on the SPA fallback.
    routes: potdProblems.map((problem) => `/potd/${problem.slug}`)
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Youth International Math Olympiad',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Join YIMO - an international youth math competition for middle and high school students.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/yimo-logo.png', sizes: '256x256' },
      // Loaded here (discovered early by the preload scanner) instead of via
      // CSS @import, which blocks CSSOM completion behind an extra round
      // trip and made the hero's serif headline visibly swap fonts late.
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    'katex/dist/katex.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8'
    //'@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    workbox: {
      enabled: process.env.NODE_ENV === 'production'
    },
    manifest: {
      lang: 'en'
    },
    meta:{
      name:'Youth International Math Olympiad',
      description:'YIMO: International youth math competition for middle and high school students.',
      theme_color:'#3B82F6',
      ogHost:'https://compete.gunnmathcircle.org',
      twitterCard:'summary_large_image',
      ogImage:{
        path:'/embed-photo-large.png?dec11',
        width:'1200',
        height:'675',
        type:'image/png'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
