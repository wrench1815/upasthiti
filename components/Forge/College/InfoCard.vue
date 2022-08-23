<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <!-- start:Logo -->
        <img
          :data-src="logo"
          :alt="`${name}'s logo`"
          class="avatar avatar-xxl obj-fit-cover shadow-1-strong bg-white"
          v-lazy-load
        />
        <!-- end:Logo -->
      </div>

      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <!-- start:Link -->
          <div class="fw-bolder mb-1 text-primary">
            <!-- Name -->
            <span>
              {{ name }}
            </span>
          </div>
          <!-- end:Link -->
        </div>

        <!--- start:Email -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-mail-fill text-primary text-gradient"></i>
          {{ email }}
        </div>
        <!--- end:Email -->

        <!--- start:Mobile -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-phone-fill text-primary text-gradient"></i>
          {{ mobile }}
        </div>
        <!--- end:Mobile -->

        <!--- start:District -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-pin-distance-fill text-primary text-gradient"></i>
          {{ district }}
        </div>
        <!--- end:District -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgeCollegeInfoCard',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    logo() {
      return this.data.logo
        ? this.data.logo
        : this.$config.defaultUniversityImage
    },

    name() {
      return this.data.name ? this.data.name : '----'
    },

    email() {
      return this.data.email ? this.data.email : '----'
    },

    mobile() {
      return this.data.mobile ? this.data.mobile : '----'
    },

    district() {
      return this.data.district ? this.data.district : '----'
    },
  },
}
</script>

<style></style>
