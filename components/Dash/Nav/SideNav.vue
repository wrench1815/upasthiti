<template>
  <div class="position-fixed">
    <div class="bg-white rounded-5 navbar-height shadow-6-strong">
      <div class="m-2 rounded-5 border-0" style="width: 15rem">
        <div class="">
          <ul class="nav flex-column">
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
            <hr class="text-dark mt-0" />
            <li class="nav-item" v-for="items in menuItems">
              <NuxtLink
                class="nav-link my-1 border-start border-2 text-dark border-primary"
                exact-active-class="fw-bol bg-primary text-white rounded-5 shadow-3-strong"
                :to="items.url"
                ><i class="me-2" :class="items.icon"></i
                >{{ items.name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashNavSideNav',

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
}
</script>

<style scoped>
.navbar-height {
  height: 98vh;
}
</style>
