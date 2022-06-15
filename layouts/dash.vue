<template>
  <div class="container-fluid bg-nav">
    <div class="row g-0">
      <div class="col-3 d-none d-lg-block" style="width: 17rem">
        <Lazy-DashNavSideNav />
      </div>
      <div class="col">
        <Lazy-DashNav />
        <Lazy-DashNavToolBar />
        <Lazy-DashNavSideBar />

        <nuxt />
        <Lazy-UtilsToTop />
        <Lazy-DashFooter />
      </div>
    </div>
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
