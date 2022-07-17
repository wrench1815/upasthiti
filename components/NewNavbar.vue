<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white shadow-0 position-sticky top-0 z-index-5"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <nuxt-link to="/">
        <img
          class="avatar rounded-circle obj-fit-cover"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt=""
        />
      </nuxt-link>
      <nuxt-link class="nav-link text-dark" aria-current="page" to="/"
        >Upasthiti</nuxt-link
      >

      <!-- start:Action Button for small devices -->
      <div class="d-flex align-items-center ms-auto me-0 d-lg-none">
        <ul class="navbar-nav d-flex flex-row me-1 mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink
              v-if="!isAuthenticated"
              class="btn btn-primary fw-bold btn-rounded"
              to="/login"
            >
              Log in
            </NuxtLink>
            <div
              v-if="isAuthenticated"
              class="btn btn-primary fw-bold btn-rounded"
              @click="logout()"
            >
              Log out
            </div>
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
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"></li>
        </ul> -->
        <!-- Left links -->
        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              aria-current="page"
              exact-active-class="text-primary fw-bold "
              to="/"
            >
              Home</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/about"
              exact-active-class="text-primary fw-bold "
              >About</nuxt-link
            >
          </li>
          <!-- Navbar dropdown
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
            Dropdown menu
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
          </li> -->
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/attendance">Attendance</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/privacypolicy"
              >Privacy Policy</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contactus">Contact Us</nuxt-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- start:Action Button for large devices -->
      <div class="d-flex align-items-center ms-1 me-0 d-none d-lg-block">
        <ul class="navbar-nav d-flex flex-row me-1 mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <NuxtLink
              v-if="!isAuthenticated"
              class="btn btn-primary btn-rounded fw-bold"
              to="/login"
            >
              Log in
            </NuxtLink>
            <div v-if="isAuthenticated">
              <img
                class="avatar rounded-circle obj-fit-cover shadow"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt=""
                data-mdb-toggle="modal"
                data-mdb-target="#profileModal"
              />
            </div>
            <!-- Modal -->

          </li>
        </ul>
      </div>
      <!-- end:Action Button for large devices -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewNavBar',

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

  computed: {
    ...mapGetters(['isAuthenticated']),
  },

  methods: {
    logout() {
      this.$swal({
        title: 'Logging Out...',
        icon: 'info',
        text: 'Please wait...',
        didOpen: () => {
          this.$swal.showLoading()

          this.$auth
            .logout()
            .then(() => {
              this.$swal.hideLoading()
              this.$swal.close()

              this.$swal({
                title: 'Logged Out!',
                type: 'success',
                icon: 'success',
                text: 'You have been logged Out.',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
              })
            })
            .catch((err) => {
              this.$swal.hideLoading()
              this.$swal.close()
              this.$swal({
                title: 'Error!',
                type: 'error',
                icon: 'error',
                html: `Failed to Log out.<br/>Try Again.`,
              })
            })
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
