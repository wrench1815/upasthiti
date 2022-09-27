<template>
  <div>
    <Lazy-PanelNavAsideNav class="d-none d-lg-block" />

    <main class="main-content position-relative h-100 border-radius-lg">
      <Lazy-PanelNav />
      <Lazy-PanelNavToolBar class="mt-lg-3" />
      <Lazy-PanelNavSideBar />
      <Lazy-PanelNavProfile />

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
export default {
  name: 'PanelLayout',
  middleware: ['auth'],

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
