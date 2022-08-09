<template>
  <!-- start:Footer -->
  <footer class="bg-white text-center">
    <!-- Grid container -->
    <div class="container p-4">
      <section class="mb-4">
        <img
          class="avatar avatar- rounded-circle obj-fit-cover shadow-2-strong"
          data-src="/favicon.png"
          alt="user-profile"
          v-lazy-load
        />
        <h3 class="fw-bold text-primary mt-2">Upasthiti</h3>
      </section>
      <section class="">
        <!--Grid row-->
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <nuxt-link to="/" class="px-2 text-dark">Home</nuxt-link>
          <nuxt-link to="/about" class="px-2 text-dark">About</nuxt-link>
          <nuxt-link to="/" class="px-2 text-dark">Link 3</nuxt-link>
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->

    <!-- start:Copyright -->
    <div class="d-flex justify-content-center align-items-center pb-3">
      <i class="ri-copyright-line"></i>Upasthiti {{ currentYear }}
    </div>
    <!-- end:Copyright -->
  </footer>
  <!-- end:Footer -->
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style></style>
