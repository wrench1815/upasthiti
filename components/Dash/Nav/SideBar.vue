<template>
  <div
    class="offcanvas offcanvas-start m-2 rounded-5 border-0 shadow-6-strong offcanvas-width"
    tabindex="-1"
    id="navOffCanvas"
    data-mdb-backdrop="true"
  >
    <!-- start:sidebar close -->
    <div class="position-absolute end-0 m-1 me-0 mt-0 d-sm-none">
      <button
        type="button"
        class="btn-close"
        @click="closeNavOffCanvas"
        aria-label="Close"
      ></button>
    </div>
    <!-- end:sidebar close -->

    <div class="offcanvas-body">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="(items, index) in menuItems" :key="index">
          <NuxtLink
            class="nav-link my-1 border-start border-2 text-dark border-primary"
            exact-active-class="fw-bol bg-primary text-white rounded-5"
            :to="items.url"
            ><i class="me-2" :class="items.icon"></i>{{ items.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>

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
            class="avatar rounded-circle obj-fit-cover shadow"
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
            <br class="p-0 m-0" />
            <span class="small text-muted text-clip">
              {{ isAuthenticated ? loggedInUser.email : '' }}
            </span>
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashNavSideBar',

  data() {
    return {
      menuItems: [
        {
          name: 'Dash',
          url: '/dash',
          icon: 'ri-dashboard-fill',
        },
        {
          name: 'Forge',
          url: '/dash/forge',
          icon: 'ri-lightbulb-flash-fill',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-government-fill',
        },
        {
          name: 'Course',
          url: '/dash/course',
          icon: 'ri-book-mark-fill',
        },
        {
          name: 'Department Type',
          url: '/dash/department/type',
          icon: 'ri-hotel-fill',
        },
        {
          name: 'Department',
          url: '/dash/department',
          icon: 'ri-building-4-fill',
        },
        {
          name: 'University',
          url: '/dash/university',
          icon: 'ri-bank-fill',
        },
        {
          name: 'User',
          url: '/dash/user',
          icon: 'ri-user-3-fill',
        },
      ],
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),

    defaultProfileImage() {
      return this.$config.defaultUserImage
    },
  },

  methods: {
    // mainNavbarLeftAlignToggler
    closeNavOffCanvas() {
      document.querySelector('#mainNavbarLeftAlignToggler').click()
    },
  },
}
</script>

<style scoped>
.offcanvas-width {
  width: 15.625rem;
}

@media (max-width: 280px) {
  .offcanvas-width {
    width: calc(100vw - 1rem) !important;
  }
}

.offcanvas-footer {
  max-height: 66px;
  min-height: 66px;
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
</style>
