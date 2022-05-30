<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light shadow-0 position-sticky top-0"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <nuxt-link class="nav-link text-dark" aria-current="page" to="/"
        >Upasthiti</nuxt-link
      >

      <!-- start:Action Button for small devices -->
      <div class="d-flex align-items-center ms-auto me-0 d-lg-none">
        <ul class="navbar-nav d-flex flex-row me-1 mb-2 mb-lg-0">
          <li class="nav-item">
            <button
              v-if="showLogin"
              class="btn btn-primary fw-bold btn-rounded"
            >
              Login
            </button>
            <button
              v-if="!showLogin"
              class="btn btn-primary fw-bold btn-rounded"
            >
              Dash
            </button>
          </li>
        </ul>
      </div>
      <!-- end:Action Button for small devices -->

      <!-- Toggle button -->
      <button
        id="mainNavbarLeftAlignToggler"
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#mainNavbarLeftAlign"
        aria-controls="mainNavbarLeftAlign"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="ri-menu-fill"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="mainNavbarLeftAlign">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"></li>
        </ul>
        <!-- Left links -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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

      <!-- start:Action Button for large devices -->
      <div class="d-flex align-items-center ms-1 me-0 d-none d-lg-block">
        <ul class="navbar-nav d-flex flex-row me-1 mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <button
              v-if="showLogin"
              class="btn btn-primary btn-rounded fw-bold"
            >
              Login
            </button>
            <button
              v-if="!showLogin"
              class="btn btn-primary btn-rounded fw-bold"
            >
              Dash
            </button>
          </li>
        </ul>
      </div>
      <!-- end:Action Button for large devices -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      showLogin: true,
    }
  },

  // Watch for route changes and toggle responsie navbar visibility
  watch: {
    $route() {
      document.querySelector('#mainNavbarLeftAlign').classList.remove('show')
      document
        .querySelector('#mainNavbarLeftAlignToggler')
        .classList.add('collapsed')
      document
        .querySelector('#mainNavbarLeftAlignToggler')
        .setAttribute('aria-expanded', false)
    },
  },
}
</script>

<style></style>
