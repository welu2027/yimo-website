export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: '404.html'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Youth International Math Olympiad',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Join YIMO — an international youth math competition for middle and high school students.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/yimo-logo.png', sizes: '256x256' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
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
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
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

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false
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
