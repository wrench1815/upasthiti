<template>
  <div>
    <Lazy-DashNavAsideNav class="d-none d-lg-block" />

    <main class="main-content position-relative h-100 border-radius-lg">
      <Lazy-DashNav />
      <Lazy-DashNavToolBar class="mt-lg-3" />
      <Lazy-DashNavSideBar />
      <Lazy-DashNavProfile :key="isAuthenticated" />

      <nuxt />
      <Lazy-DashFooter />

      <!-- to top button -->
      <Lazy-UtilsToTop />

      <!-- Privacy Policy Util -->
      <Lazy-UtilsPrivacyPolicy />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashLayout',
  middleware: ['auth', 'isAdmin'],

  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
    }),
  },

  methods: {
    // check if changes in local storage, if so, logout
    logoutAll() {
      window.addEventListener('storage', (event) => {
        if (event.storageArea != localStorage) return
        if (event.key === 'auth._token.local') {
          location.reload()
        }
      })
    },
  },

  mounted() {
    window.addEventListener('storage', (event) => {
      if (event.storageArea != localStorage) return
      if (event.key === 'auth._token.local') {
        location.reload()
      }
    })
  },
}
</script>

<style scoped>
.bg-nav {
  background-image: url(~assets/images/curved.jpg);
  background-size: 100% 50vh;
  background-color: #f5f8fa;
  background-repeat: no-repeat;
  background-position: center top;
}
</style>
