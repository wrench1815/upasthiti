<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Attendance</h1>
        <h3 class="text-secondary text-capitalize">Lists all Attendances</h3>
      </div>
      <div class="card-body">
        <section
          class="d-flex align-items-center justify-content-center flex-wrap"
          v-if="!loading.main"
        >
          <!-- start:Search -->
          <div class="me-auto mb-3">
            <div
              class="btn btn-floating bg-gradient-primary text-white btn-s d-flex justify-content-center align-items-center"
            >
              <i class="ri-search-line ri-lg"></i>
            </div>
          </div>
          <!-- end:Search -->

          <!-- start:Filter -->
          <div class="filter-width mb-3 me-0 ms-auto"></div>
          <!-- end:Filter -->
        </section>

        <LoadersTable v-if="loading.main" />
        <!-- <DashCourseTable  :courses.sync="courses.results" /> -->
        <Lazy-DashAttendanceTable
          :attendances.sync="attendance.results"
          @update:attendances="deletedAttendance"
          v-else
        />

        <Lazy-UtilsPagination
          class="mt-4"
          v-if="!loading.main && attendance.pagination.items != 0"
          :pagination.sync="attendance.pagination"
          @prevPage="onPaginated"
          @nextPage="onPaginated"
        />

        <div class="d-flex justify-content-end mt-3">
          <LoadersButton v-if="loading.main" :rounded="true" />
          <UtilsLinkButton :rounded="true" :link="'/dash/attendance/add'" v-else
            >Add Attendance</UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashAttendanceIndex',
  layout: 'dash',

  watch: {
    '$route.query'() {
      this.payloadWatch()
      this.refreshAttendance()
    },
  },

  data() {
    return {
      loading: {
        main: true,
      },
      error: true,

      attendance: {},
      payload: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Attendance',
        url: '/attendance',
      },
    ])
  },

  methods: {
    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = await '1'
      }
    },

    async getAttendance() {
      this.loading.main = true

      // if (this.payload.university) {
      //   if (this.payload.university == 'All') {
      //     this.payload.university = undefined
      //   }
      // }

      return this.$api.attendance
        .list(this.payload)
        .then((response) => {
          this.attendance = response.data

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.course = {}

            this.$nuxt.error({
              statusCode: 404,
              message: 'Page not Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    // when Attendance is deleted
    deletedAttendance() {
      if (this.attendance.results.length == 0) {
        if (this.payload.page != 1) {
          this.onPaginated(this.payload.page - 1)
        } else {
          this.onPaginated(1)
        }
      }
      this.refreshAttendance()
    },

    // refresh Attendance
    refreshAttendance() {
      this.getAttendance().then(() => {
        this.loading.main = false
      })
    },

    // on paginated
    onPaginated(pageNum) {
      this.payload.page = pageNum
      this.$router.push({
        path: this.$route.path,
        query: {
          page: pageNum,
        },
      })
    },
  },

  mounted() {
    this.payload.page = this.$route.query.page
    this.payload.size = 2

    this.getAttendance().then(() => {
      if (!this.error) {
        this.loading.main = false
      }
    })
  },
}
</script>

<style scoped>
.filter-width {
  width: 10.5rem;
}

.uni-filter-width {
  width: 11.5rem;
}
</style>
