<template>
  <section>
    <div class="container py-5 my-4 card card-body rounded-9">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-6 col-12">
          <img
            data-src="~/assets/svg/error400.svg"
            class="img-fluid"
            alt="Error 400"
            v-lazy-load
          />
        </div>
        <div
          class="col-md-6 col-12 my-md-2 my-4 d-flex flex-column justify-content-center align-items-md-start align-items-center"
        >
          <h2 class="text-uppercase fw-bold text-danger">Oh no! error 400</h2>
          <h3 class="text-primary">Bad Request</h3>
          <!-- <span class="fs-5 mt-1">We are sorry.</span> -->
          <span class="fs-6 mt-1 text-md-start text-center"
            > Awwww.... you sent something I don't understand.
             </span
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
  name: 'Error400',
}
</script>

<style></style>
