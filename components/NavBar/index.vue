<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white shadow-0 position-sticky top-0 z-index-5 py-2"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <nuxt-link to="/">
        <img
          class="avatar rounded-circle obj-fit-cover shadow-2-strong"
          data-src="/favicon.png"
          alt="Site Logo"
          v-lazy-load
        />
      </nuxt-link>
      <nuxt-link
        class="nav-link text-dark fs-5 px-2 me-auto"
        aria-current="page"
        to="/"
        >Upasthiti</nuxt-link
      >

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse">
        <!-- start:mid links -->
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            <nuxt-link
              class="nav-link hover-underline-animation"
              aria-current="page"
              :exact-active-class="'text-primary hover-underline-active'"
              :to="item.url"
              >{{ item.name }}</nuxt-link
            >
          </li>
        </ul>
        <!-- end:mid links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- start:OffCanvas Toggle button -->
      <button
        id="mainSiteNavOffCanvasToggler"
        class="navbar-toggler px-1"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-mdb-toggle="offcanvas"
        data-mdb-target="#mainSiteNavOffCanvas"
        aria-controls="mainSiteNavOffCanvas"
      >
        <i class="ri-menu-fill link-primary ri-lg"></i>
      </button>
      <!-- end:OffCanvas Toggle button -->

      <!-- start:Options for large devices -->
      <div class="d-flex align-items-center ms-1 me-0 d-none d-lg-block">
        <ul class="navbar-nav d-flex flex-row me-1 mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <!-- if not Authenticated -->
            <NuxtLink
              v-if="!isAuthenticated"
              class="btn btn-primary btn-rounded fw-bold"
              to="/login"
            >
              Log in
            </NuxtLink>

            <!-- if Authenticated-->
            <div v-if="isAuthenticated">
              <!-- User Profile Image -->
              <img
                class="avatar avatar-size rounded-circle obj-fit-cover shadow"
                :data-src="
                  loggedInUser.profile_image
                    ? loggedInUser.profile_image
                    : defaultProfileImage
                "
                alt="user-profile"
                id="profileOffCanvasToggle"
                type="button"
                aria-label="Toggle Profile"
                data-mdb-toggle="offcanvas"
                data-mdb-target="#profileOffCanvas"
                aria-controls="profileOffCanvas"
                v-lazy-load
              />
            </div>
            <!-- Modal -->
          </li>
        </ul>
      </div>
      <!-- end:Options for large devices -->
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
      defaultProfileImage: '',
      menuItems: [
        {
          name: 'Home',
          url: '/',
        },
        {
          name: 'About',
          url: '/about',
        },
        {
          name: 'Privacy Policy',
          url: '/privacy-policy',
        },
        {
          name: 'Contact Us',
          url: '/contact-us',
        },
      ],
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },

  methods: {
    async setDefaults() {
      return new Promise((resolve, reject) => {
        this.defaultProfileImage = this.$config.defaultUserImage

        resolve()
      })
    },

    async logout() {
      await this.$swal({
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

  mounted() {
    this.setDefaults()
  },
}
</script>

<style scoped>
.avatar-size {
  height: 40px !important;
  width: 40px !important;
}

.dropdown-width {
  width: 13rem !important;
}

.badge-fs {
  font-size: 0.9rem !important;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 0 !important;
  padding-left: 0 !important;
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.hover-underline-active {
  display: inline-block;
  position: relative;
}

.hover-underline-active:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--mdb-primary);
  transition: transform 0.25s ease-out;
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
