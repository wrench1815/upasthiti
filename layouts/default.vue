<template>
  <div>
    <Lazy-NavBar />
    <nuxt />
    <Lazy-utilsToTop />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
  },
}
</script>

<style scoped></style>
