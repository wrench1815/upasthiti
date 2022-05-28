<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <nuxt-link class="nav-link text-dark" aria-current="page" to="/"
        >Upasthiti</nuxt-link
      >
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarLeftAlignExample"
        aria-controls="navbarLeftAlignExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="ri-menu-fill"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
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
              >Link</nuxt-link
            >
          </li>
          <!-- Navbar dropdown -->
          <li class="nav-item dropdown">
            <div
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </div>
            <!-- Dropdown menu -->
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <nuxt-link class="dropdown-item" to="/">Action</nuxt-link>
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
  name: 'NavBar',
}
</script>

<style></style>
