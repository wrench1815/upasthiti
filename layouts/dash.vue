<template>
  <div class="bg-nav">
    <Lazy-DashNavBar />
    <Lazy-DashToolBar />
    <Lazy-DashSideBar />

    <nuxt />
    <Lazy-UtilsToTop />
    <Lazy-DashFooter />
  </div>
</template>

<script>
export default {
  name: 'DashLayout',
  middleware: ['auth'],
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
