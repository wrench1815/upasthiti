<template>
  <section class="container-fluid">
    <!-- start:Error 403 -->
    <div
      class="py-5 my-4 card card-body rounded-9"
      v-if="error.statusCode == 403"
    >
      <!-- start:Error Details -->
      <div class="row d-flex align-items-center justify-content-center h-100">
        <!-- start:Error Image -->
        <div class="col-md-6 col-12">
          <img
            data-src="~/assets/svg/error403.svg"
            class="img-fluid"
            alt="Error 403"
            v-lazy-load
          />
        </div>
        <!-- end:Error Image -->

        <!-- start:Error Message -->
        <div
          class="col-md-6 col-12 my-md-2 my-4 d-flex flex-column justify-content-center align-items-md-start align-items-center"
        >
          <!-- title -->
          <h2 class="text-uppercase fw-bold text-danger">Oh no! error 403</h2>
          <!-- subtitle -->
          <h3 class="text-primary">Access Forbidden</h3>
          <!-- message 1 -->
          <span class="fs-5 mt-1">We are sorry.</span>
          <!-- message 2 -->
          <span class="fs-6 mt-1 text-md-start text-center"
            >The page or resource you were trying to reach is absolutely
            forbidden for some reason.</span
          >
          <!-- Home link text -->
          <span class="fs-6 mt-1 text-center text-md-start"
            >Try going back to our homepage.</span
          >
          <!-- start:Home Link Button -->
          <!-- if default layout -->
          <NuxtLink
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/"
            v-if="$nuxt.layoutName == 'default'"
          >
            Go to homepage
          </NuxtLink>

          <!-- if dash layout -->
          <NuxtLink
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/dash"
            v-if="$nuxt.layoutName == 'dash'"
          >
            Go to homepage
          </NuxtLink>
          <!-- end:Home Link Button -->
        </div>
        <!-- end:Error Message -->
      </div>
      <!-- end:Error Details -->
    </div>
    <!-- end:Error 403 -->

    <!-- start:Error 404 -->
    <div
      class="py-5 my-4 card card-body rounded-9"
      v-else-if="error.statusCode == 404"
    >
      <!-- start:Error Details -->
      <div class="row d-flex align-items-center justify-content-center h-100">
        <!-- start:Error Image -->
        <div class="col-md-6 col-12">
          <img
            data-src="~/assets/svg/error404.svg"
            class="img-fluid"
            alt="Error 404"
            v-lazy-load
          />
        </div>
        <!-- end:Error Image -->

        <!-- start:Error Message -->
        <div
          class="col-md-6 col-12 my-md-2 my-4 d-flex flex-column justify-content-center align-items-md-start align-items-center"
        >
          <!-- title -->
          <h2 class="text-uppercase fw-bold text-danger">Oh no! error 404</h2>
          <!-- subtitle -->
          <h3 class="text-primary">Page not found</h3>
          <!-- message -->
          <span class="fs-6 mt-1 text-center text-md-start"
            >The page you are trying to access doesn't exist or has been
            removed.</span
          >
          <!-- Home link text -->
          <span class="fs-6 mt-1 text-center text-md-start"
            >Try going back to our homepage.</span
          >

          <!-- start:Home Link Button -->
          <!-- if layout is default -->
          <NuxtLink
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/"
            v-if="$nuxt.layoutName == 'default'"
          >
            Go to Homepage
          </NuxtLink>

          <!-- if layout is dash -->
          <NuxtLink
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/dash"
            v-if="$nuxt.layoutName == 'dash'"
          >
            Go to Dash Home
          </NuxtLink>
          <!-- end:Home Link Button -->
        </div>
        <!-- end:Error Message -->
      </div>
      <!-- end:Error Details -->
    </div>
    <!-- end:Error 404 -->

    <!-- start:Error any -->
    <div class="py-5 my-4 card card-body rounded-9" v-else>
      <!-- start:Error Details -->
      <div class="row d-flex align-items-center justify-content-center h-100">
        <!-- start:Error Image -->
        <div class="col-md-6 col-12">
          <img
            data-src="~/assets/svg/error400.svg"
            class="img-fluid"
            alt="Error 400"
            v-lazy-load
          />
        </div>
        <!-- end:Error Details -->

        <!-- start:if debug -->
        <!-- start:Error Message -->
        <div
          class="col-md-6 col-12 my-md-2 my-4 d-flex flex-column justify-content-center align-items-md-start align-items-center"
          v-if="debug"
        >
          <!-- title -->
          <h2 class="text-uppercase fw-bold text-danger">
            Oh no! error "{{ error.statusCode }}"
          </h2>
          <!-- message -->
          <span class="fs-5 mt-1 text-md-start text-center text-danger">
            "{{ message }}"
          </span>
          <!-- Home link text -->
          <span class="fs-6 mt-1 text-center text-md-start"
            >Try going back to our homepage.</span
          >
          <!-- start:Home Link Button -->
          <!-- if default layout -->
          <NuxtLink
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/"
            v-if="$nuxt.layoutName == 'default'"
          >
            Go to Homepage
          </NuxtLink>

          <!-- if dash layout -->
          <NuxtLink
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/dash"
            v-if="$nuxt.layoutName == 'dash'"
          >
            Go to Dash Home
          </NuxtLink>
          <!-- end:Home Link Button -->
        </div>
        <!-- end:Error Message -->
        <!-- end:if debug -->

        <!-- start:if not debug -->
        <!-- start:Error Message -->
        <div
          class="col-md-6 col-12 my-md-2 my-4 d-flex flex-column justify-content-center align-items-md-start align-items-center"
          v-else
        >
          <!-- title -->
          <h2 class="text-uppercase fw-bold text-danger">Oh no! error 400</h2>
          <!-- subtitle -->
          <h3 class="text-primary">Bad Request</h3>
          <!-- message -->
          <span class="fs-6 mt-1 text-md-start text-center">
            Awwww.... you sent something I don't understand.
          </span>
          <!-- Home link text -->
          <span class="fs-6 mt-1 text-center text-md-start"
            >Try going back to our homepage.</span
          >

          <!-- start:Home Link Button -->
          <!-- if default layout -->
          <NuxtLink
            v-if="$nuxt.layoutName == 'default'"
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/"
          >
            Go to Homepage
          </NuxtLink>

          <!-- if dash layout -->
          <NuxtLink
            v-if="$nuxt.layoutName == 'dash'"
            class="btn btn-primary btn-rounded fw-bold text-uppercase my-3"
            to="/dash"
          >
            Go to Dash Home
          </NuxtLink>
          <!-- end:Home Link Button -->
        </div>
        <!-- end:Error Message -->
        <!-- end:if not debug -->
      </div>
      <!-- end:Error Details -->
    </div>
    <!-- end:Error any -->
  </section>
</template>

<script>
export default {
  props: ['error'],

  layout: () => ($nuxt.$store.state.isDash ? 'dash' : 'default'),

  computed: {
    message() {
      return this.error.message || 'An Error Occured'
    },

    debug() {
      return process.env.NODE_ENV === 'development'
    },
  },
}
</script>

<style></style>
