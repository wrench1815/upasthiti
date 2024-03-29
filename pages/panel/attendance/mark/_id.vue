<template>
  <section class="container-fluid my-4">
    <div class="card" v-if="loading">
      <h1>Loading</h1>
    </div>
    <div class="card" v-else>
      <div class="card-header text-center">
        <h2 class="text-primary text-gradient">Mark Attendance</h2>
      </div>

      <div class="card-body">
        <div class="text-center d-none">
          <h4 class="text-secondary text-gradient">{{ classs.name }}</h4>
          <h4 class="text-secondary text-gradient">{{ classs.course.code }}</h4>
          <h4 class="text-secondary text-gradient">
            {{ classs.department.name }}
          </h4>
          <h5 class="text-secondary text-gradient">
            {{ $nuxt.$moment().format('DD-MMM-YYYY') }}
          </h5>
        </div>
        <div class="text-secondary text-gradient h4 d-flex flex-wrap gap-2">
          <span
            class="border-bottom border-warning text-warning text-gradient"
            >{{ classs.name }}</span
          >
          <span>of Course code</span>
          <span class="border-bottom border-warning text-warning text-gradient">
            {{ classs.course.code }}
          </span>
          <span>of</span>
          <span class="border-bottom border-warning text-warning text-gradient">
            {{ classs.department.name }}
          </span>
          <span>Department on</span>
          <span class="border-bottom border-warning text-warning text-gradient">
            {{ $nuxt.$moment().format('DD MMMM, YYYY') }}
          </span>
        </div>

        <div class="row my-3 g-3">
          <div
            class="col-lg-3 col-md-4 col-12"
            v-for="stud in students.results"
            :key="stud.id"
          >
            <Lazy-PanelAttendanceCard :student="stud" :classs="classs" />
          </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <button
            class="btn bg-gradient-primary text-white fw-bold btn-rounded"
            @click="markAttendances"
          >
            Mark
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PanelAttendanceMark',
  layout: 'panel',

  data() {
    return {
      classs_id: '',
      error: true,
      loading: true,

      classs: {},
      students: {},

      attendances: [],
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Attendance',
        url: '/panel/attendance',
      },
      {
        name: 'Mark',
        url: '/panel/attendance/mark',
      },
    ])
  },

  methods: {
    async getClass() {
      let id = this.$route.params.id

      return this.$api.class
        .retrieve(id)
        .then((response) => {
          this.classs = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'Class does not Exist',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    async getStudents() {
      let payload = {}
      payload.classs = this.$route.params.id
      payload.size = 100

      return this.$api.student
        .list(payload)
        .then((response) => {
          this.students = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'No Student found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    // add Attendance
    async markAttendances() {
      try {
        let attendances = [...this.$store.state.attendance.attendanceList]

        this.$swal({
          title: 'Marking Attendance',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are marking Attendance',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.attendance
              .bulk(attendances)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'Attendance has been marked Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => {
                  this.$store.commit('attendance/clearAttendance')
                  this.$router.push('/panel/class')
                })
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to mark Attendance.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to mark Attendance.<br/>Try Again`,
        })
      }
    },
  },

  mounted() {
    // clear attendanceList from state on page load, just in case
    this.$store.commit('attendance/clearAttendance')

    this.getClass()
      .then(() => {
        return this.getStudents()
      })
      .then(() => {
        this.loading = false
      })
  },
}
</script>

<style scoped></style>
