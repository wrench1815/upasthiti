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
            class="nav-link text-primary my-1 rounded-5"
            exact-active-class="fw-bold bg-primary text-white"
            :to="items.url"
            ><i class="me-1" :class="items.icon"></i>{{ items.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: 'Dash',
          url: '/dash',
          icon: 'ri-dashboard-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'Dash',
          url: '/dash',
          icon: 'ri-dashboard-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'Dash',
          url: '/dash',
          icon: 'ri-dashboard-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
        {
          name: 'College',
          url: '/dash/college',
          icon: 'ri-home-line',
        },
      ],
    }
  },
}
</script>

<style></style>
