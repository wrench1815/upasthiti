<template>
  <section>
    <div class="container py-5 my-4 card card-body rounded-9">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-6 col-12">
          <img
            data-src="~/assets/svg/error404.svg"
            class="img-fluid"
            alt="Error 404"
            v-lazy-load
          />
        </div>
        <div
          class="col-md-6 col-12 my-md-2 my-4 d-flex flex-column justify-content-center align-items-md-start align-items-center"
        >
          <h2 class="text-uppercase fw-bold text-danger">Oh no! error 404</h2>
          <h3 class="text-primary">Page not found</h3>
          <span class="fs-6 mt-1 text-center text-md-start"
            >The page you are trying to access doesn't exist or has been
            removed.</span
          >
          <span class="fs-6 mt-1 text-center text-md-start"
            >Try going back to our homepage.</span
          >
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
</template>

<script>
export default {
  name: 'Error404',
}
</script>

<style></style>
