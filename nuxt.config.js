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
      class: 'bg-light g-sidebar-show',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Router: https://go.nuxtjs.dev/config-router
  router: {
    middleware: 'isDash',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mdb.js',
    '~/plugins/remixIcons.js',
    '~/plugins/vueSelect.js',
    '~/plugins/veeValidate.js',
    '~/plugins/api.js',
    '~/plugins/utils.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // @nuxtjs/google-fonts: https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',

    // @nuxtjs/moment: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',

    // @nuxtjs/web-vitals: https://github.com/nuxt-community/web-vitals-module
    '@nuxtjs/web-vitals',

    // nuxt-webpack-optimisations: https://github.com/harlan-zw/nuxt-webpack-optimisations
    'nuxt-webpack-optimisations',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',

    // https://github.com/avil13/vue-sweetalert2
    'vue-sweetalert2/nuxt/no-css',

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

        // Default image must be in the static folder
        defaultImage: '/cover.png',
      },
    ],

    // nuxt-precompress: https://github.com/frenchrabbit/nuxt-precompress
    'nuxt-precompress',

    // '@nuxtjs/sitemap': https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
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
    redirect: {
      home: '/dash',
    },
  },

  sweetalert: {
    allowOutsideClick: false,
    allowEscapeKey: false,
    buttonsStyling: false,
    scrollbarPadding: false,
    customClass: {
      confirmButton: 'btn btn-success btn-rounded fw-bolder mx-2',
      cancelButton: 'btn btn-danger btn-rounded fw-bolder mx-2',
      denyButton: 'btn btn-warning btn-rounded fw-bolder mx-2',
    },
  },

  // @nuxtjs/moment: https://github.com/nuxt-community/moment-module
  moment: {
    defaultLocale: 'en',
    defaultTimezone: 'Asia/Kolkata',
  },

  webVitals: {
    // provider: '', // auto detectd
    debug: false,
    disabled: false,
  },

  webpackOptimisations: {
    features: {
      // enable risky optimisations in dev only
      hardSourcePlugin: process.env.NODE_ENV === 'development',
      parallelPlugin: process.env.NODE_ENV === 'development',
    },
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    exclude: ['/dash/**', '/login'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL,
    },

    // default User Image
    defaultUserImage: process.env.DEFAULT_USER_IMAGE,
    // default University Image
    defaultUniversityImage: process.env.DEFAULT_UNIVERSITY_IMAGE,
    // default College Image
    defaultCollegeImage: process.env.DEFAULT_COLLEGE_IMAGE,
    // default Student Image
    defaultStudentImage: process.env.DEFAULT_STUDENT_IMAGE,
  },

  // custom loading indicator
  loadingIndicator: '~/components/Loaders/loading-indicator.html',

  // loading bar
  loading: {
    color: '#5e72e4',
  },
}
