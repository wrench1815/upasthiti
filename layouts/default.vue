<template>
  <div>
    <!-- navbar -->
    <Lazy-NavBar />

    <!-- sidebar -->
    <Lazy-NavBarSideBar />

    <!-- profile modals -->
    <Lazy-NavBarProfile />

    <nuxt />

    <!-- footer -->
    <Lazy-Footer />

    <!-- to top util button -->
    <Lazy-UtilsToTop />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

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
