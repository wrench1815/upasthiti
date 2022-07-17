<template>
  <div>
    <Lazy-NavBar />
    <Lazy-NavBarProfile />

    <nuxt />

    <Lazy-Footer />
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
