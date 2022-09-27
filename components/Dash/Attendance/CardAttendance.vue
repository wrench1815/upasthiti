<template>
  <div class="card shadow-3-strong text-center p-3">
    <img class="avatar-xl rounded-circle obj-fit-cover shadow-2-strong" />
    <div class="text-primary fs-4">Name</div>
    <div class="text-secondary fs-5">Roll no</div>
    <div class="row mt-3">
      <div class="col-lg-6 ">
        <div
          class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-success badge-fs shadow-3-strong py-2 rounded-pill"
        >
          <div class="">Present</div>
        </div>
      </div>
      <div class="col-lg-6 ">
        <div
          class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-secondary badge-fs shadow-3-strong py-2 rounded-pill"
        >
          <div class="">Late</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashAttendanceCard',
}
</script>

<style></style>
