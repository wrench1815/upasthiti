<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <!-- start:Logo -->
        <img
          :data-src="collegeLogo"
          :alt="`${isDepartment ? deptName : collegeName}'s logo`"
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
          <div class="fw-bolder mb-1 text-primary" v-if="isDepartment">
            {{ deptName }}
          </div>
          <!-- end:College Name -->

          <!-- start:University Link -->
          <NuxtLink
            :to="`/dash/college/detail?id=${department.college.id}`"
            class="fw-bolder mb-1 text-primary"
            v-else
          >
            <!-- University Name -->
            <span class="better-underline">
              {{ collegeName }}
            </span>
            <i class="ri-link"></i>
          </NuxtLink>
          <!-- end:University Link -->
        </div>

        <!--- start:Email -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-mail-fill text-primary text-gradient"></i>
          {{ collegeEmail }}
        </div>
        <!--- end:Email -->

        <!--- start:Mobile -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-phone-fill text-primary text-gradient"></i>
          {{ collegeMobile }}
        </div>
        <!--- end:Mobile -->

        <!--- start:District -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-pin-distance-fill text-primary text-gradient"></i>
          {{ collegeDistrict }}
        </div>
        <!--- end:District -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentDetailCard1',

  props: {
    department: {
      type: Object,
      required: true,
    },
    isDepartment: {
      type: Boolean,
      default: false,
    },
    isCollege: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    collegeLogo() {
      if (this.isCollege) {
        return this.department.college.logo
          ? this.department.college.logo
          : this.$config.defaultCollegeImage
      }
    },

    collegeName() {
      return this.department.college.name
        ? this.department.college.name
        : '----'
    },

    deptName() {
      return this.department.department_name
        ? this.department.department_name
        : '----'
    },
    collegeEmail() {
      // if (this.isCollege) {
      return this.department.college.email
        ? this.department.college.email
        : '----'
      // }
    },

    // email() {
    //   if (this.isDepartment) {
    //     return this.department.email ? this.department.email : '----'
    //   } else {
    //     return this.department.college.email
    //       ? this.department.college.email
    //       : '----'
    //   }
    // },

    collegeMobile() {
      if (this.isDepartment) {
        return this.department.mobile ? this.department.mobile : '----'
      } else {
        return this.department.college.mobile
          ? this.department.college.mobile
          : '----'
      }
    },

    collegeDistrict() {
      if (this.isDepartment) {
        return this.department.district ? this.department.district : '----'
      } else {
        return this.department.college.district
          ? this.department.college.district
          : '----'
      }
    },
  },
}
</script>

<style></style>
