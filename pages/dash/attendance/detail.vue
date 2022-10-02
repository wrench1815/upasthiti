<template>
  <div class="container-fluid my-4">
    <transition name="scale-in" mode="out-in">
      <!-- Start:Loading -->
      <div class="card card-body" v-if="loading">
        <Lazy-LoadersDetailCard />
      </div>
      <!-- End:Loading -->

      <!-- start:Attendance Detail -->
      <div class="card" v-else>
        <div class="card-header">
          <h2 class="text-primary text-gradient">Attendance Details</h2>
        </div>

        <!-- if not loading -->
        <div class="card-body">
          <!-- start:Attendance Info Card -->
          <Lazy-DashStudentDetailUCard :student="attendance.student" />
          <!-- end:Attendance Info Card -->

          <div>
            <!-- Start:Class -->
            <div class="row mb-3">
              <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Class</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4">
                <span class="fw-bold fs-6 text-primary">{{
                  attendance.for_class.name
                }}</span>
              </div>
            </div>
            <!-- End:Class -->

            <!-- Start:Date -->
            <div class="row mb-3">
              <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Date</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4">
                <span class="fw-bold fs-6 text-primary">{{
                  $nuxt.$utils.dateFormatNoTime(attendance.date)
                }}</span>
              </div>
            </div>
            <!-- End:Date -->

            <!-- Start:Present -->
            <div class="row mb-3">
              <div class="col-6 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Present</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4 align-items-center">
                <i
                  class="ri-checkbox-circle-fill text-success ri-lg"
                  v-if="attendance.is_present"
                ></i>
                <i class="ri-close-circle-fill text-danger ri-lg" v-else></i>
              </div>
            </div>
            <!-- End:Present -->

            <!-- Start:late -->
            <div class="row mb-3">
              <div class="col-6 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">late</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4 align-items-center">
                <i
                  class="ri-checkbox-circle-fill text-success ri-lg"
                  v-if="attendance.is_late"
                ></i>
                <i class="ri-close-circle-fill text-danger ri-lg" v-else></i>
              </div>
            </div>
            <!-- End:late -->

            <!-- Start:Absent -->
            <div class="row mb-3">
              <div class="col-6 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Absent</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4 align-items-center">
                <i
                  class="ri-checkbox-circle-fill text-success ri-lg"
                  v-if="attendance.is_absent"
                ></i>
                <i class="ri-close-circle-fill text-danger ri-lg" v-else></i>
              </div>
            </div>
            <!-- End:Absent -->
          </div>
        </div>
        <!-- </transition> -->
      </div>
      <!-- end:Attendance Detail -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DashAttendanceDetail',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,

      attendance: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Attendance',
        url: '/dash/attendance',
      },
      {
        name: 'Detail',
      },
    ])
  },

  methods: {
    async getAttendance() {
      let id = this.$route.query.id

      return this.$api.attendance
        .retrieve(id)
        .then((response) => {
          this.attendance = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'Attendance does not Exist',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },
  },

  mounted() {
    this.getAttendance().then(() => {
      this.loading = false
    })
  },
}
</script>

<style scoped></style>
