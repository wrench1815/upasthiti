export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'upasthiti',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-light',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mdb.js',
    '~/plugins/remixIcons.js',
    '~/plugins/vueSelect.js',
    '~/plugins/veeValidate.js',
    '~/plugins/api.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // @nuxtjs/google-fonts: https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',

    // @nuxtjs/moment: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',

    // https://github.com/avil13/vue-sweetalert2
    'vue-sweetalert2/nuxt',

    // https://gitlab.com/broj42/nuxt-lazy-load#readme
    [
      'nuxt-lazy-load',
      {
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: false,
        directiveOnly: true,

        // To remove class set value to false
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // @nuxtjs/google-fonts: https://google-fonts.nuxtjs.org/setup
  googleFonts: {
    display: 'swap',
    download: true,
    overwriting: false,
    inject: true,
    families: {
      Poppins: true,
    },
  },

  // https://auth.nuxtjs.org/guide/scheme
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access',
          maxAge: 300, // 5 minutes
        },
        refreshToken: {
          property: 'refresh',
          data: 'refresh',
          maxAge: 86400, // 1 day
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: 'auth/token/',
            method: 'post',
          },
          refresh: {
            url: 'auth/token/refresh/',
            method: 'post',
          },
          user: {
            url: '/auth/me/',
            method: 'get',
          },
          logout: false,
        },
      },
    },
  },

  sweetalert: {
    allowOutsideClick: false,
    allowEscapeKey: false,
    buttonsStyling: false,
    customClass: {
      confirmButton: 'btn btn-success fw-bold mx-2',
      cancelButton: 'btn btn-danger fw-bold mx-2',
      denyButton: 'btn btn-warning fw-bold mx-2',
    },
  },

  // @nuxtjs/moment: https://github.com/nuxt-community/moment-module
  moment: {
    defaultLocale: 'en',
    defaultTimezone: 'Asia/Kolkata',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: true,
    hardSource: true,
    cache: true,
    transpile: ['vee-validate/dist/rules'],
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL,
    },
  },
}
