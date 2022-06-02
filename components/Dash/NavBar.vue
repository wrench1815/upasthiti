<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white shadow-0 position-sticky top-0 z-index-5"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <nuxt-link class="nav-link text-dark" aria-current="page" to="/dash"
        >Upasthiti Dash</nuxt-link
      >

      <!-- Toggle button -->
      <button
        id="mainNavbarLeftAlignToggler"
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="offcanvas"
        data-mdb-target="#navOffCanvas"
        aria-controls="mainNavbarLeftAlign"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNav"
      >
        <i :class="navButton"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="mainNavbarLeftAlign">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              aria-current="page"
              exact-active-class="text-primary fw-bold"
              to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/about"
              exact-active-class="text-primary fw-bold"
              >About</nuxt-link
            >
          </li>
          <!-- Navbar dropdown -->
          <li class="nav-item dropdown">
            <div
              class="nav-link dropdown-toggle"
              id="mainNavbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </div>
            <!-- Dropdown menu -->
            <ul class="dropdown-menu" aria-labelledby="mainNavbarDropdown">
              <li>
                <nuxt-link class="dropdown-item" to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link class="dropdown-item" to="/"
                  >Another action</nuxt-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <nuxt-link class="dropdown-item" to="/"
                  >Something else here</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/page1">Page 1</nuxt-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
export default {
  name: 'DashNavBar',

  data() {
    return {
      navButton: 'ri-menu-fill',
    }
  },

  watch: {
    $route() {
      if (document.querySelector('.show')) {
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
  },
}
</script>

<style scoped></style>
