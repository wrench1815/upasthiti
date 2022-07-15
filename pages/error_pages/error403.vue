<template>
  <section>
    <div class="container py-5 my-4 card card-body rounded-9">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-xl-6 col-md-6 col-sm-12 col-12">
          <img
            data-src="~/assets/svg/error403.svg"
            class="img-fluid vh-65 "
            alt="Error 403"
            v-lazy-load
          />
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12 col-12 my-2 d-flex flex-column justify-content-center align-items-xl-start align-items-md-start align-items-sm-center align-items-center">
          <h2 class="text-uppercase fw-fw-bold text-black">Oh no! error 403</h2>
          <h3 class="text-black">Access Forbidden</h3>
          <span class="fs-5 mt-1">We are sorry.</span>
          <span class="fs-6 mt-1  text-md-start text-center "
            >The page or resource you were trying to reach is absolutely
            forbidden for some reason.</span
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
          src="~assets/images/error403.png"
          alt="Error 403 Illustration"
          class="img-fluid"
          style=""
        />
      </div>
      <div
        class="col-xl-6 col-md-6 col-sm-12 col-12 my-2 d-flex flex-column justify-content-center align-items-xl-start align-items-md-start align-items-sm-center align-items-center"
      >
        <h2 class="text-uppercase fw-fw-bold text-black">Oh no! error 403</h2>
        <h3 class="text-black">Access Forbidden</h3>
        <span class="fs-5 mt-1">We are sorry.</span>
        <span class="fs-6 mt-1 "
          >The page or resource you were trying to reach is absolutely forbidden
          for some reason.</span
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
