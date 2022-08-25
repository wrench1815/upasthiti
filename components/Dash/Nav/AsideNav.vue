<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 rounded-5 my-3 fixed-start ms-3 bg-white shadow-6-strong"
    id="sidenav-main"
  >
    <!-- start:Sidenav Header -->
    <div class="sidenav-header">
      <div
        class="d-flex justify-content-center align-items-center mx-auto mt-3 gap-2"
      >
        <img
          class="avatar obj-fit-cover rounded-circle shadow-3-strong"
          data-src="/favicon.png"
          alt="Site Logo"
          v-lazy-load
        />
        <h4 class="align-self-end">Upasthiti</h4>
      </div>
    </div>
    <!-- end:Sidenav Header -->

    <hr class="text-dark mt-0" />

    <!-- start:Menu Links -->
    <div
      class="collapse navbar-collapse w-auto menu-list-height sidenav-body border-bottom"
      id="sidenav-collapse-main"
    >
      <ul class="nav flex-column mx-2">
        <!-- Start:Dynamic Nav List -->
        <li class="nav-item" v-for="item in menuItems" :key="item.name">
          <NuxtLink
            class="nav-link my-1 border-start border-2 text-dark border-primary hover-shad"
            :to="item.url"
            exact-active-class="fw-bol bg-primary text-white rounded-5 shadow-3-strong active-hover-fix"
          >
            <i class="me-2" :class="item.icon"></i>{{ item.name }}
          </NuxtLink>
        </li>
        <!-- End:Dynamic Nav List -->
      </ul>
    </div>
    <!-- end:Menu Links -->

    <!-- start:Footer -->
    <div class="sidenav-footer position-absolute w-100 bottom-0">
      <div class="mx-3 mt-3 mb-2">
        <LoadersAsideNavProfile v-if="loading" />
        <div
          class="d-flex align-items-center justify-content-between gap-2"
          v-else
        >
          <div>
            <img
              class="avatar rounded-circle obj-fit-cover shadow"
              :data-src="
                isAuthenticated ? loggedInUser.profile_image : userDefaultImage
              "
              height="2rem"
              width="2rem"
              :alt="`${
                isAuthenticated ? loggedInUser.short_name : ''
              }'s profile image`"
              v-lazy-load
            />
          </div>
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
          <!-- start:Profile Modal Toggle -->
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
          <!-- end:Profile Modal Toggle -->
        </div>
      </div>
    </div>
    <!-- end:Footer -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashAsideNav',

  data() {
    return {
      loading: true,
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
    userDefaultImage() {
      return this.$config.defaultUserImage
    },
  },

  mounted() {
    this.loading = false
  },
}
</script>

<style scoped>
#sidenav-main {
  height: calc(100vh - 32px);
}

.menu-list-height {
  height: calc(100vh - 52px - 78px - 2rem - 3rem) !important;
  max-height: calc(100vh - 52px - 78px - 2rem - 3rem);
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
