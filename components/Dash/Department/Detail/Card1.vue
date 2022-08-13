<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <!-- college Block -->
        <div
          class="obj-fit-cover shadow-1-strong bg-primary dept-block"
          v-if="isDepartment"
        ></div>

        <!-- start:Logo -->
        <img
          v-if="isCollege"
          :data-src="collegeLogo"
          :alt="`${college.name ? college.name : '----'}'s logo`"
          class="avatar avatar-xxl obj-fit-cover shadow-1-strong bg-white"
          v-lazy-load
        />
        <!-- end:Logo -->
      </div>

      <!-- start:Department Section -->
      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
        v-if="isDepartment"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <!-- start:Department Name -->
          <div class="fw-bolder mb-1 text-primary" v-if="isDepartment">
            {{ department.name ? department.name : '----' }}
          </div>
          <!-- end:DepartmentName -->
        </div>
      </div>
      <!-- end:Department Section -->

      <!-- start:College Section -->
      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
        v-if="isCollege"
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
  name: 'DashDepartmentDetailCard1',

  props: {
    // for department
    department: {
      type: Object,
    },

    isDepartment: {
      type: Boolean,
      default: false,
    },

    // for college
    college: {
      type: Object,
    },

    isCollege: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    collegeLogo() {
      if (this.isCollege) {
        return this.college.logo
          ? this.college.logo
          : this.$config.defaultCollegeImage
      }
    },
  },
}
</script>

<style scoped>
.dept-block {
  width: 1.5rem !important;
  height: 4rem !important;
  border-radius: 0.75rem 0 0 0.75rem !important;
}
</style>
