<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 rounded-5 my-3 fixed-start ms-3 bg-white shadow-6-strong"
    id="sidenav-main"
  >
    <!-- start:Sidenav Header -->
    <div class="sidenav-header">
      <div
        class="d-flex justify-content-center align-items-center mx-auto my-3 gap-2"
      >
        <img
          class="avatar obj-fit-cover rounded-circle shadow-3-strong"
          data-src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt=""
          v-lazy-load
        />
        <h4 class="align-self-end">Upasthiti</h4>
      </div>
    </div>
    <!-- end:Sidenav Header -->

    <hr class="text-dark mt-0" />

    <!-- start:Menu Links -->
    <div
      class="collapse navbar-collapse w-auto menu-list-height sidenav-body"
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

    <div class="sidenav-footer position-absolute w-100 bottom-0">
      <div class="mx-3 mt-3 mb-2">
        <div class="d-flex align-items-center">
          <span class="ms-0 me-auto"
            >{{ this.loggedInUser.first_name }}
            {{ this.loggedInUser.last_name }}</span
          >
          <span class="btn btn-white btn-floating" @click="showSettingsSwal"
            ><i class="ri-settings-line ri-2x text-primary"></i
          ></span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashAsideNav',

  data() {
    return {
      menuItems: [
        {
          name: 'Dash',
          url: '/dash',
          icon: 'ri-dashboard-fill',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-fill',
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
    ...mapGetters(['loggedInUser']),
  },

  methods: {
    showSettingsSwal() {
      let loggedInUser = this.loggedInUser
      this.$swal({
        showConfirmButton: false,
        allowOutsideClick: true,
        backdrop: 'rgba(0,0,0,0.1)',
        width: '20rem',
        position: 'bottom-start',
        allowEscKey: true,
        padding: '0px',
        customClass: { container: '' },
        html: `
        <div class="">
          <div class="card">
            <div class="card-header">
              <div class="d-flex flex-column align-items-center justify-content-center align-items-start gap-2">
                <img
                  class="avatar avatar-lg rounded-circle obj-fit-cover shadow"
                  src="${'https://images.unsplash.com/photo-1494790108377-be9c29b29330'}"
                  alt=""
                />
                <div class="">
                  <h5 class="text-dark">${
                    loggedInUser.first_name + ' ' + loggedInUser.last_name
                  }</h5>
                  <p class="pb-0 text-muted">${loggedInUser.email}</p>
                </div>
              </div>
            </div>
            <div class="card-body">
              <ul class="nav flex-column gap-2">
                <li class="nav-item">
                  <span class="nav-link rounded-5 shadow-1-soft bg-ligh pointer-pointer text-dark d-flex"
                    >Profile</span
                  >
                </li>
                <li class="nav-item">
                  <span class="nav-link rounded-5 shadow-1-soft bg-ligh pointer-pointer text-dark d-flex"
                    >Main Site</span
                  >
                </li>
                <li class="nav-item">
                  <span
                    class="nav-link rounded-5 shadow-1-soft bg-ligh pointer-pointer text-danger d-flex align-items-center gap-1"
                    ><i class="ri-logout-circle-line"></i> Logout</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
      })
    },
  },
}
</script>

<style scoped>
#sidenav-main {
  height: calc(100vh - 32px);
}

.menu-list-height {
  height: calc(100vh - 52px - 78px - 2rem - 2.5rem) !important;
  max-height: calc(100vh - 52px - 78px - 2rem - 2.5rem);
}
</style>
