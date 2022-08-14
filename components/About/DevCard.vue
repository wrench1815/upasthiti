<template>
  <div class="card p-3 hover-shadow border hover-zoom">
    <div class="row gx-2">
      <!-- start:image -->
      <div class="col-lg-4 col-md-4 col-sm-4 col-12 text-center text-sm-start">
        <img
          class="avatar avatar-xxl obj-fit-cover shadow-1-strong img-fluid avatar-height"
          :data-src="image ? image : defaultImage"
          alt=""
          v-lazy-load
        />
      </div>
      <!-- end:image -->

      <!-- start:detail -->
      <div class="col-lg-8 col-md-8 col-sm-8 col-12 text-center text-sm-start">
        <!-- name -->
        <div class="fw-bold fs-5 text-primary text-gradient text-capitalize">
          {{ name }}
        </div>

        <!-- role -->
        <div class="fs-6 text-secondary">{{ role }}</div>

        <!-- email -->
        <div
          class="text-muted small d-flex gap-1 justify-content-center justify-content-sm-start"
        >
          <i class="ri-mail-fill text-primary text-gradient"></i>
          <a :href="`mailto:${email}`">
            <span class="text-dark text-break better-underline">
              {{ email }}
            </span>
          </a>
        </div>

        <!-- github -->
        <div
          class="text-muted small d-flex gap-1 justify-content-center justify-content-sm-start"
        >
          <i class="ri-github-fill text-primary text-gradient"></i>
          <a target="_blank" :href="`https://github.com/${githubUsername}`">
            <span class="text-dark better-underline">{{ githubName }}</span>
            <i class="ri-external-link-fill text-primary"></i>
          </a>
        </div>

        <!-- linkedin -->
        <div
          class="text-muted small d-flex gap-1 justify-content-center justify-content-sm-start"
        >
          <i class="ri-linkedin-box-fill text-primary text-gradient"></i>
          <a
            target="_blank"
            :href="`https://www.linkedin.com/in/${linkedinUsername}/`"
          >
            <span class="text-dark better-underline">{{ linkedinName }}</span>
            <i class="ri-external-link-fill text-primary"></i>
          </a>
        </div>
      </div>
      <!-- end:detail -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutDevCard',

  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
    },
    email: {
      type: String,
    },
    githubUsername: {
      type: String,
    },
    githubName: {
      type: String,
    },
    linkedinUsername: {
      type: String,
    },
    linkedinName: {
      type: String,
    },
  },

  computed: {
    defaultImage() {
      return this.$config.defaultUserImage
    },
  },
}
</script>

<style scoped>
@media (min-width: 768px) {
  .avatar-height {
    height: 100% !important;
  }
}
</style>
