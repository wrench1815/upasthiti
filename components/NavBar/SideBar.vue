<template>
  <!-- start:offcanvas sidebar for md and small screen -->
  <div
    class="offcanvas offcanvas-start m-2 rounded-5 border-0 shadow-6-strong offcanvas-width"
    tabindex="-1"
    id="mainSiteNavOffCanvas"
    data-mdb-backdrop="true"
  >
    <!-- start:sidebar close -->
    <div class="position-absolute end-0 m-2 d-sm-none">
      <button
        type="button"
        class="btn-close"
        @click="closeMainSiteNavOffCanvas"
        aria-label="Close"
      ></button>
    </div>
    <!-- end:sidebar close -->

    <!-- start:sidebar body -->
    <div class="offcanvas-body">
      <ul class="nav flex-column">
        <!-- start:menu items list -->
        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
          <NuxtLink
            class="nav-link my-1 pb-0 link-dark hover-underline-animation"
            exact-active-class="text-primary underline-active"
            :to="item.url"
            >{{ item.name }}</NuxtLink
          >
        </li>
        <!-- end:menu items list -->
      </ul>
    </div>
    <!-- end:sidebar body -->

    <!-- start:sidebar footer for sm -->
    <div class="offcanvas-footer w-100 px-3 py-2 d-lg-none">
      <!-- start:if Authenticated -->
      <div
        class="d-flex justify-content-start align-items-center gap-2"
        v-if="isAuthenticated"
      >
        <!-- start:logged in user profile image -->
        <div>
          <img
            class="avatar avatar rounded-circle obj-fit-cover shadow"
            :data-src="
              isAuthenticated && loggedInUser.profile_image
                ? loggedInUser.profile_image
                : defaultProfileImage
            "
            alt="user-profile"
            v-lazy-load
          />
        </div>
        <!-- end:logged in user profile image -->

        <!-- start:logged in user name -->
        <div
          class="d-flex justify-content-center align-items-center text-clip ms-0 me-auto"
        >
          <p class="ms-0 me-auto mb-0 pb-0 text-clip fw-bold fs-6">
            {{ isAuthenticated ? loggedInUser.full_name : '' }}
          </p>
        </div>
        <!-- end:logged in user name -->

        <!-- start:profile modal toggler -->
        <div
          class="ms-auto me-0 mb-n2"
          id="profileOffCanvasToggle"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-mdb-toggle="offcanvas"
          data-mdb-target="#profileOffCanvas"
          aria-controls="profileOffCanvas"
        >
          <i class="ri-settings-2-line ri-xl rotate-center cog"></i>
        </div>
        <!-- end:profile modal toggler -->
      </div>
      <!-- end:if Authenticated -->

      <!-- start:if not Authenticated -->
      <div class="d-flex justify-content-center align-items-center" v-else>
        <!-- show login button -->
        <NuxtLink to="/login" class="btn btn-primary btn-rounded"
          >Login</NuxtLink
        >
      </div>
      <!-- end:if not Authenticated -->
    </div>
    <!-- end:sidebar footer -->
  </div>
  <!-- end:offcanvas sidebar for md and small screen -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBarSideBar',

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
          url: '/contact',
        },
      ],
    }
  },

  watch: {
    $route() {
      if (
        document
          .querySelector('#mainSiteNavOffCanvas')
          .classList.contains('show')
      ) {
        document.querySelector('#mainSiteNavOffCanvasToggler').click()
      }

      // close sidebar on modal open
    },
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },

  methods: {
    closeMainSiteNavOffCanvas() {
      document.querySelector('#mainSiteNavOffCanvasToggler').click()
    },

    async setDefaults() {
      return new Promise((resolve, reject) => {
        this.defaultProfileImage = this.$config.defaultUserImage

        resolve()
      })
    },
  },

  mounted() {
    this.setDefaults()
  },
}
</script>

<style scoped>
.offcanvas-width {
  /* width: calc(100vw - 1rem) !important; */
  width: 15.625rem;
}

.offcanvas-footer {
  max-height: 66px;
  min-height: 66px;
}

@media (max-width: 280px) {
  .offcanvas-width {
    width: calc(100vw - 1rem) !important;
  }
}

.text-clip {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rotate-center:hover {
  display: inline-block;
  animation: rotate-center 0.6s ease-in-out both;
}

.cog:hover {
  cursor: pointer;
  color: var(--mdb-primary);
  transition: color 0.3s ease-in-out;
}

/**
 * ----------------------------------------
 * animation rotate-center
 * ----------------------------------------
 */
@keyframes rotate-center {
  0% {
    transform-origin: center;
    transform: rotate(0);
  }
  100% {
    transform-origin: center;
    transform: rotate(360deg);
  }
}

.nav-link {
  padding-right: 0 !important;
  padding-left: 0 !important;
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.underline-active {
  display: inline-block;
  position: relative;
}

.underline-active:after {
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
