export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Starters Africa | Dare to Start' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'IgQbV8Myd44n69-_WPMxZtU-eKXEN64Qt9PRaXiyPr0' }
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content: process.env.npm_package_description || ''
      // }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#F8AD00' },
  /*
   ** Global CSS
   */
  css: ['@/sass/app.scss', 'swiper/css/swiper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/nuxt-swiper.plugin', mode: 'client' },
    { src: '@/plugins/localStorage.js', ssr: false },
    {
      src: '@/plugins/iconify.js'
    },
    { src: '@/plugins/chatbot.plugin', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/google-analytics'],

  // Analytics Object
  googleAnalytics: {
    id: 'UA-166797375-1'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { baseURL: 'http://wp.starters.africa/wp-json/wp/v2', https: true },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/vue-awesome/]
    // extend(config, ctx) {}
  },
  // Set up server
  server: {
    port: 3000 // default: 3000
    // host: '0.0.0.0' // default: localhost
  },
  // Using custom Bootstrap SCSS
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'ImagePlugin',
      'NavbarPlugin',
      'ButtonPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormGroupPlugin',
      'LinkPlugin',
      'CardPlugin',
      'TooltipPlugin',
      'FormRatingPlugin',
      'ListGroupPlugin',
      'AvatarPlugin',
      'ModalPlugin',
      'EmbedPlugin'
    ],

    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin', 'VBScrollspyPlugin'],
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  }
}
