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
      <div
        class="d-flex flex-column justify-content-center align-content-start w-100 text-primary text-gradient"
      >
        <Lazy-LoadersText size="sm" :length="6" />
        <Lazy-LoadersText size="sm" :length="8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadersDetailCourseCard',
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
