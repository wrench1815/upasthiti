<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white shadow-0 position-sticky top-0 z-index-5 px-0 px-sm-3"
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
      <nuxt-link
        class="nav-link text-dark fs-5 px-2 px-sm-3"
        aria-current="page"
        to="/"
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
            <div v-if="isAuthenticated">
              <!-- <li class="nav-item "> -->
              <button
                class="btn btn-white btn-floating shadow-none"
                type="button"
                data-mdb-toggle="modal"
                data-mdb-target="#smalldeviceprofileModal"
              >
                <i class="ri-user-line fs-5 text-primary"></i>
              </button>
              <!-- <ul
                  class="dropdown-menu ms-n5 dropdown-width dropdown-menu-postion"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li class="mt-3 mx-3">
                    <h5 class="text-dark text-break text-center">
                      Isha Guptadfghjkllkjhg
                    </h5>
                  </li>
                  <li class="mx-3">
                    <p class="pb-0 mb-0 text-break text-muted text-center">
                      ishasdfghjkllkj@mail.com
                    </p>
                  </li>
                  <li>
                    <div
                      class="d-flex justify-content-center align-items-center mt-2 mb-3"
                    >
                      <span
                        class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill flex-wrap text-capitalize"
                      >
                        Admin
                      </span>
                    </div>
                  </li>
                  <li>
                    <nuxt-link
                      to="/"
                      class="dropdown-item text-dark d-flex align-items-center gap-1"
                    >
                      <i class="ri-profile-line"></i>Edit Profile</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/"
                      class="dropdown-item text-dark d-flex align-items-center gap-1"
                    >
                      <i class="ri-dashboard-line"></i>Dash Board</nuxt-link
                    >
                  </li>
                  <li>
                    <div
                      class="text-danger mb-2 d-flex mx-3 align-items-center gap-1"
                    >
                      <i class="ri-logout-circle-line text-danger"></i>Logout
                    </div>
                  </li>
                </ul> -->
              <!-- </li> -->
            </div>
          </li>
        </ul>
      </div>
      <!-- end:Action Button for small devices -->

      <!-- Toggle button -->
      <button
        id="mainNavbarLeftoffcanvas"
        class="navbar-toggler px-1"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-mdb-toggle="offcanvas"
        data-mdb-target="#leftoffcanvas"
        aria-controls="leftoffcanvas"
      >
        <i class="ri-menu-fill"></i>
      </button>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="leftoffcanvas"
        aria-labelledby="lelfoffcanvas"
      >
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
      </div>

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
                alt="user-profile"
                data-mdb-toggle="modal"
                data-mdb-target="#largedeviceprofileModal"
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
.dropdown-width {
  width: 13rem !important;
}
.badge-fs {
  font-size: 0.9rem !important;
}
</style>
