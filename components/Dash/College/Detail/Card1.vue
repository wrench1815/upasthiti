<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <!-- start:Logo -->
        <img
          :data-src="logo"
          :alt="`${isCollege ? collegeName : uniName}'s logo`"
          class="avatar avatar-xxl obj-fit-cover shadow-1-strong bg-white"
          v-lazy-load
        />
        <!-- end:Logo -->
      </div>

      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <!-- start:College Name -->
          <div class="fw-bolder mb-1 text-primary" v-if="isCollege">
            {{ collegeName }}
          </div>
          <!-- end:College Name -->

          <!-- start:University Link -->
          <NuxtLink
            :to="`/dash/university/detail?id=${college.university.id}`"
            class="fw-bolder mb-1 text-primary"
            v-else
          >
            <!-- University Name -->
            <span class="better-underline">
              {{ uniName }}
            </span>
            <i class="ri-link"></i>
          </NuxtLink>
          <!-- end:University Link -->
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
  name: 'DashCollegeDetailCard1',

  props: {
    college: {
      type: Object,
      required: true,
    },
    isCollege: {
      type: Boolean,
      default: false,
    },
    isUniversity: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    logo() {
      if (this.isCollege) {
        return this.college.logo
          ? this.college.logo
          : this.$config.defaultCollegeImage
      } else {
        return this.college.university.logo
          ? this.college.university.logo
          : this.$config.defaultUniversityImage
      }
    },

    collegeName() {
      return this.college.name ? this.college.name : '----'
    },

    uniName() {
      return this.college.university.name
        ? this.college.university.name
        : '----'
    },

    email() {
      if (this.isCollege) {
        return this.college.email ? this.college.email : '----'
      } else {
        return this.college.university.email
          ? this.college.university.email
          : '----'
      }
    },

    mobile() {
      if (this.isCollege) {
        return this.college.mobile ? this.college.mobile : '----'
      } else {
        return this.college.university.mobile
          ? this.college.university.mobile
          : '----'
      }
    },

    district() {
      if (this.isCollege) {
        return this.college.district ? this.college.district : '----'
      } else {
        return this.college.university.district
          ? this.college.university.district
          : '----'
      }
    },
  },
}
</script>

<style></style>
