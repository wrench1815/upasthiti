<template>
  <div
    class="offcanvas offcanvas-start m-2 rounded-5 border-0 shadow-6-strong"
    style="width: 15.625rem"
    tabindex="-1"
    id="navOffCanvas"
    data-mdb-backdrop="false"
  >
    <div class="offcanvas-body">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="items in menuItems">
          <NuxtLink
            class="nav-link my-1 border-start border-2 text-dark border-primary"
            exact-active-class="fw-bol bg-primary text-white rounded-5"
            :to="items.url"
            ><i class="me-2" :class="items.icon"></i>{{ items.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashSideBar',

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

<style scoped></style>
