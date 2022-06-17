<template>
  <div class="bg-nav">
    <Lazy-DashNavAsideNav class="d-none d-lg-block" />

    <main class="main-content position-relative h-100 border-radius-lg">
      <Lazy-DashNav />
      <Lazy-DashNavToolBar />
      <Lazy-DashNavSideBar />

      <nuxt />
      <Lazy-UtilsToTop />
      <Lazy-DashFooter />
    </main>
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
