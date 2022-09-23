<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 flex-row bg-light"
    >
      <div>
        <!-- Course Block -->
        <div
          class="obj-fit-cover shadow-1-strong bg-primary course-block"
        ></div>
      </div>

      <!-- start:Course Section -->
      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <!-- start:Course title -->
          <div class="fw-bolder mb-1 text-primary">
            {{ course.title ? course.title : '----' }}
          </div>
          <!-- end:Course title -->
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
  },
}
</script>

<style scoped>
.course-block {
  width: 1.5rem !important;
  min-height: 4rem !important;
  border-radius: 0.75rem 0 0 0.75rem !important;
  height: 100% !important;
}
</style>
