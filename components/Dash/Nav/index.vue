<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-light z-index-5 px-lg-2 d-lg-none"
    :class="[scrollClasses, navClass]"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <nuxt-link
        id="brand"
        class="nav-link fs-5 d-lg-none"
        :class="linkClass"
        aria-current="page"
        to="/dash"
        >Upasthiti Dash</nuxt-link
      >
      <!-- start:responsive mid links -->
      <Lazy-DashNavRightLinks class="d-lg-none" />
      <!-- end:responsive mid links -->

      <!-- Toggle button -->
      <button
        id="mainNavbarLeftAlignToggler"
        class="navbar-toggler"
        :class="linkClass"
        type="button"
        data-mdb-toggle="offcanvas"
        data-mdb-target="#navOffCanvas"
        aria-controls="mainNavbarLeftAlign"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i :class="navButton"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="mainNavbarLeftAlign">
        <!-- start:mid links -->
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 d-none">
          <li class="nav-item" v-for="item in menuItems">
            <nuxt-link
              class="nav-link"
              :class="linkClass"
              aria-current="page"
              :exact-active-class="activeClass"
              :to="item.url"
              >{{ item.name }}</nuxt-link
            >
          </li>
        </ul>
        <!-- end:mid links -->

        <!-- start:right links -->
        <!-- <Lazy-DashNavRightLinks /> -->
        <!-- start:right links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
export default {
  name: 'DashNav',

  data() {
    return {
      navButton: 'ri-menu-fill',
      scrollClasses: 'shadow-0',
      navClass: '',
      linkClass: 'text-white',
      activeClass: 'bg-active rounded-5',
      menuItems: [
        {
          name: 'Home',
          url: '/dash',
        },
        {
          name: 'College',
          url: '/dash/college',
        },
        {
          name: 'User',
          url: '/dash/user',
        },
      ],
    }
  },

  watch: {
    $route() {
      if (document.querySelector('#navOffCanvas').classList.contains('show')) {
        document.querySelector('#mainNavbarLeftAlignToggler').click()
      }
    },
  },

  methods: {
    toggleNav() {
      this.navButton = document.querySelector('.show')
        ? 'ri-close-line'
        : 'ri-menu-fill'
    },

    getBootstrapBreakpoint() {
      var w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      return w < 768 ? 'xs' : w < 992 ? 'sm' : w < 1200 ? 'md' : 'lg'
    },

    setNavClasses() {
      let currentBreakPoint = this.getBootstrapBreakpoint()

      if (currentBreakPoint === 'lg') {
        this.navClass = 'rounded-5 nav-rounded m-lg-nav'
      } else {
        this.navClass = ''
      }
    },
  },

  mounted() {
    this.setNavClasses()

    window.addEventListener('scroll', () => {
      this.scrollClasses =
        window.scrollY > 300
          ? 'bg-white position-sticky top-0 end-0 start-0 shadow-3 slide-bottom'
          : 'shadow-0'

      this.linkClass = window.scrollY > 300 ? 'link-dark' : 'text-white'

      this.activeClass =
        window.scrollY > 300
          ? 'text-primary border-bottom border-primary '
          : 'bg-active rounded'
    })

    window.addEventListener('resize', () => {
      let currentBreakPoint = this.getBootstrapBreakpoint()

      if (currentBreakPoint === 'lg') {
        this.navClass =
          window.scrollY > 300 ? 'rounded-5 nav-rounded m-lg-nav' : ''
      } else {
        this.navClass = window.scrollY > 300 ? '' : ''
      }
    })
  },
}
</script>

<style scoped>
.bg-active {
  background-color: rgba(249, 249, 249, 0.23) !important;
}

.slide-bottom {
  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.nav-rounded {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.m-lg-nav {
  margin-left: 0.75rem !important;
  margin-right: 0.75rem !important;
}

/**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
@keyframes slide-bottom {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
