<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <!-- Course Block -->
        <div
          class="obj-fit-cover shadow-1-strong bg-primary dept-block"
          v-if="isCourse"
        ></div>
      </div>

      <!-- start:Course Section -->
      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
        v-if="isCourse"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <!-- start:Course Name -->
          <div class="fw-bolder mb-1 text-primary" v-if="IsCourse">
            <!-- {{ course.name ? course.name : '----' }} -->
            ----
          </div>
          <!-- end:Course Name -->
        </div>
      </div>
      <!-- end:Course Section -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCourseDetailCard',

  props: {
    // for Course
    course: {
      type: Object,
      required: true,
    },

    isCourse: {
      type: Boolean,
      default: false,
    },

    // for college
    // college: {
    //   type: Object,
    // },

    // isCollege: {
    //   type: Boolean,
    //   default: false,
    // },
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
