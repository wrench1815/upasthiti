<template>
  <section class="my-4 bg-white rounded-4 shadow-4">
    <div class="container my-4 py-4">
      <div class="text-center mb-4">
        <h2 class="text-uppercase text-primary fw-bold">What We Do</h2>
      </div>
      <div class="row gy-4 gx-4">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 d-flex flex-column">
          <img
            data-src="~/assets/svg/take_attendance.svg"
            class="img-fluid vh-25"
            alt="download attendance"
            v-lazy-load
          />
          <h4 class="text-center mt-4 mb-2 text-dark">Take Attendance</h4>
          <p class="text-center">
            Take online attendance by simply taping the student's image.
          </p>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-12 d-flex flex-column">
          <img
            data-src="~/assets/svg/view.svg"
            class="img-fluid vh-25"
            alt="download attendance"
            v-lazy-load
          />
          <h4 class="text-center mt-4 mb-2 text-dark">View Attendance</h4>
          <p class="text-center">
            Students and Parents can view attendance by simply searching their
            name whenever needed.
          </p>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-12 d-flex flex-column">
          <img
            data-src="~/assets/svg/reports.svg"
            class="img-fluid vh-25"
            alt="download attendance"
            v-lazy-load
          />
          <h4 class="text-center mt-4 mb-2 text-dark">Generate Reports</h4>
          <p class="text-center">
            Generate Weekly/Monthly/Sessional attendance reports like total
            classes and attended classes ratio.
          </p>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-12 d-flex flex-column">
          <img
            data-src="~/assets/svg/download.svg"
            class="img-fluid vh-25"
            alt="download attendance"
            v-lazy-load
          />
          <h4 class="text-center mt-4 mb-2 text-dark">Download Reports</h4>
          <p class="text-center">
            Download attendance report as a spreadsheet.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeWhatwedo',
}
</script>

<style></style>
