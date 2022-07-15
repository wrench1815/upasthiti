<template>
  <section>
    <div class="container py-5 my-4 card card-body rounded-9">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-xl-6 col-md-6 col-sm-12 col-12">
          <img
            data-src="~/assets/svg/error404.svg"
            class="img-fluid vh-65"
            alt="Error 403"
            v-lazy-load
          />
        </div>
        <div
          class="col-xl-6 col-md-6 col-sm-12 col-12 my-2 d-flex flex-column justify-content-center align-items-xl-start align-items-md-start align-items-sm-center align-items-center"
        >
          <h2 class="text-uppercase fw-fw-bold text-black">Oh no! error 404</h2>
          <h3 class="text-black">Page not found</h3>
          <span class="fs-6 mt-1 text-center text-md-start"
            >The page you are trying to access doesn't exist or has been
            removed.</span
          >
          <span class="fs-6 mt-1 text-center text-md-start">Try going back to our homepage.</span>
          <NuxtLink
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/"
          >
            Go to homepage
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="container my-4 p-3">
    <div class="row">
      <div class="col-xl-6 col-md-6 col-sm-12 col-12">
        <img
          src="~assets/images/error404.png"
          alt="Error 404 Illustration"
          class="img-fluid"
          style=""
        />
      </div>
      <div
        class="col-xl-6 col-md-6 col-sm-12 col-12 my-2 d-flex flex-column justify-content-center align-items-xl-start align-items-md-start align-items-sm-center align-items-center"
      >
        <h2 class="text-uppercase fw-fw-bold text-black">Oh no! error 404</h2>
        <h3 class="text-black">Page not found</h3>
        <span class="fs-6 mt-1"
          >The page you are trying to access doesn't exist or has been
          removed.</span
        >
        <span class="fs-6 mt-1">Try going back to our homepage.</span>
        <NuxtLink
          class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
          to="/"
        >
          Go to homepage
        </NuxtLink>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'error404',
}
</script>

<style scoped>
.vh-65{
  height: 65vh;
}
</style>
