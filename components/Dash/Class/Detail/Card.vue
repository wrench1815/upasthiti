<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <!-- college Block -->
        <div class="obj-fit-cover shadow-1-strong bg-primary class-block"></div>
      </div>

      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <!-- start:Class Name -->
          <div class="fw-bolder mb-1 text-primary">
            {{ classs.name ? classs.name : '----' }}
          </div>
          <!-- end:Class Name -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashClassDetailCard',

  props: {
    classs: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.class-block {
  width: 1.5rem !important;
  height: 4rem !important;
  border-radius: 0.75rem 0 0 0.75rem !important;
}
</style>
