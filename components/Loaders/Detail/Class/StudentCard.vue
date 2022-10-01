<template>
  <div>
    <div class="card border shadow-2 card-hover mt-4 mb-4">
      <div
        class="d-flex justify-content-start flex-column align-items-start flex-md-row"
      >
        <!-- start:Profile Image -->
        <div
          class="img-fluid avatar avatar-xl ms-4 mt-n4 placeholder-wave placeholder rounded-5"
        ></div>
        <!-- end:Profile Image -->

        <div
          class="d-flex flex-column justify-content-center align-content-start text-break px-3 w-75"
        >
          <!-- start:Name -->
          <div
            class="card-title fw-bold fs-5 text-primary text-gradient pt-3 px-2"
          >
            <!-- link -->
            <Lazy-LoadersText :length="12" />
          </div>
          <!-- start:Name -->
        </div>
      </div>

      <div class="card-body pt-2">
        <Lazy-LoadersText size="xs" para />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadersDetailClassStudentCard',
}
</script>

<style scoped>
.avatar {
  color: unset !important;
}
</style>
