<template>
  <div>
    <!-- navbar -->
    <Lazy-NavBar />

    <!-- sidebar -->
    <Lazy-NavBarSideBar />

    <!-- profile modals -->
    <Lazy-NavBarProfile :key="isAuthenticated" />

    <nuxt />

    <!-- footer -->
    <Lazy-Footer />

    <!-- to top util button -->
    <Lazy-UtilsToTop />

    <!-- Privacy Policy Util -->
    <Lazy-UtilsPrivacyPolicy />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',

  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
    }),
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

<style scoped></style>
