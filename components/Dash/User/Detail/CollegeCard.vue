<template>
  <div
    class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
  >
    <!-- logo -->
    <div>
      <img
        class="avatar avatar-xxl obj-fit-cover shadow-1-strong"
        :data-src="college.logo ? college.logo : defaultCollegeImage"
        :alt="`${college.name}'s Logo`"
        v-lazy-load
      />
    </div>

    <div
      class="d-flex flex-column justify-content-center align-content-start text-break"
    >
      <!-- name -->
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

      <!-- email -->
      <div class="text-muted small d-flex gap-1">
        <i class="ri-mail-fill text-primary text-gradient"></i>
        {{ college.email ? college.email : '----' }}
      </div>

      <!-- mobile -->
      <div class="text-muted small d-flex gap-1">
        <i class="ri-phone-fill text-primary text-gradient"></i
        >{{ college.mobile ? college.mobile : '----' }}
      </div>

      <!-- district -->
      <div class="text-muted small d-flex gap-1">
        <i class="ri-pin-distance-fill text-primary text-gradient"></i>
        {{ college.district ? college.district : '----' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserDetailCollegeCard',

  props: {
    college: {
      type: Object,
      required: true,
    },
  },

  computed: {
    defaultCollegeImage() {
      return this.$config.defaultCollegeImage
    },
  },
}
</script>

<style></style>
