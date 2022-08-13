<template>
  <section
    class="card container fixed-bottom border border-primary border-3 mb-3"
  >
    <div class="p-3 d-inline-flex align-items-center">
      <p class="my-0 mx-1 py-2">
        By continuing to the application, you accept that you have read the
        <nuxt-link to="/privacy-policy" class="link-primary fw-bold">
          Privacy Policy
        </nuxt-link>
        and are well aware of how it effects your stay here.
      </p>
      <div class="d-flex align-items-center">
        <button
          type=""
          class="btn btn-primary text-uppercase rounded ms-0 ms-md-5"
        >
          Ok
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrivacyPolicyComponent',
}
</script>

<style></style>
