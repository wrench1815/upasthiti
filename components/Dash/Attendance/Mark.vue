<template>
  <div class="container-fluid my-4">
    <div class="card py-3">
      <div class="card-header text-center">
        <h2 class="text-primary text-gradient">Mark Attendance</h2>
        <h4 class="text-secondary text-gradient">Class Name</h4>
        <h5 class="text-secondary text-gradient">Date</h5>
      </div>
      <div class="card-body">
        <div class="row my-3 gx-4 gy-4">
          <div class="col-lg-3 col-md-4 col-sm-12">
            <Lazy-DashAttendanceCardAttendance />
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <Lazy-DashAttendanceCardAttendance />
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <Lazy-DashAttendanceCardAttendance />
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <Lazy-DashAttendanceCardAttendance />
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <Lazy-DashAttendanceCardAttendance />
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <Lazy-DashAttendanceCardAttendance />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelAttendanceMark',
}
</script>

<style></style>
