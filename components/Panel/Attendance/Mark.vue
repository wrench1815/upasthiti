<template>
  <div>
    <div class="card pt-3">
      <div class="card-header text-center">
        <h2 class="text-primary text-gradient">Mark Attendance</h2>
      </div>
      <div class="card-body">
        <div class="text-center">
          <h4 class="text-secondary text-gradient">Class Name</h4>
          <h5 class="text-secondary text-gradient">Date</h5>
        </div>

        <div class="row my-3 g-3">
          <div class="col-lg-3 col-md-4 col-12">
            <Lazy-PanelAttendanceCard />
          </div>
          <div class="col-lg-3 col-md-4 col-12">
            <Lazy-PanelAttendanceCard />
          </div>
          <div class="col-lg-3 col-md-4 col-12">
            <Lazy-PanelAttendanceCard />
          </div>
          <div class="col-lg-3 col-md-4 col-12">
            <Lazy-PanelAttendanceCard />
          </div>
          <div class="col-lg-3 col-md-4 col-12">
            <Lazy-PanelAttendanceCard />
          </div>
          <div class="col-lg-3 col-md-4 col-12">
            <Lazy-PanelAttendanceCard />
          </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <button
            class="btn bg-gradient-primary text-white fw-bold btn-rounded"
          >
            Submit
          </button>
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
