<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <!-- start:Logo -->
        <img
          :data-src="collegeLogo"
          :alt="`${college.name ? college.name : '----'}'s logo`"
          class="avatar avatar-xxl obj-fit-cover shadow-1-strong bg-white"
          v-lazy-load
        />
        <!-- end:Logo -->
      </div>

      <!-- start:College Section -->
      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <!-- start:College Link -->
          <NuxtLink
            :to="`/dash/college/detail?id=${college.id}`"
            class="fw-bolder mb-1 text-primary"
          >
            <!-- College Name -->
            <span class="better-underline">
              {{ college.name ? college.name : '----' }}
            </span>
            <i class="ri-link"></i>
          </NuxtLink>
          <!-- end:College Link -->
        </div>

        <!--- start:Email -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-mail-fill text-primary text-gradient"></i>
          {{ college.email }}
        </div>
        <!--- end:Email -->

        <!--- start:Mobile -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-phone-fill text-primary text-gradient"></i>
          {{ college.mobile }}
        </div>
        <!--- end:Mobile -->

        <!--- start:District -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-pin-distance-fill text-primary text-gradient"></i>
          {{ college.district }}
        </div>
        <!--- end:District -->
      </div>
      <!-- end:College Section -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashClassDetailCollegeCard',

  props: {
    college: {
      type: Object,
    },
  },

  computed: {
    collegeLogo() {
      return this.college.logo
        ? this.college.logo
        : this.$config.defaultCollegeImage
    },
  },
}
</script>

<style></style>
