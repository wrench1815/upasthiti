<template>
  <div class="container-fluid my-4">
    <transition name="scale-in" mode="out-in">
      <!-- Start:Loading -->
      <div class="card card-body" v-if="loading">
        <Lazy-LoadersDetailCard />
      </div>
      <!-- End:Loading -->
      <!-- start:Class Detail -->
      <div class="card" v-else>
        <div class="card-header">
          <h2 class="text-primary text-gradient">Class Details</h2>
        </div>

        <!-- if not loading -->
        <div class="card-body">
          <!-- start:Class Info Card -->
          <Lazy-DashClassDetailCard :classs="classs" />
          <!-- end:Class Info Card -->

          <div>
            <!-- Start:Code -->
            <div class="row mb-3">
              <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Code</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4">
                <span class="fw-bold fs-6 text-primary">{{ classs.code }}</span>
              </div>
            </div>
            <!-- End:Code -->

            <!-- Start:Course -->
            <div class="row mb-3">
              <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Course Code</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4">
                <span class="fw-bold fs-6">{{ classs.course.code }}</span>
              </div>
            </div>
            <!-- End:Course -->

            <!-- Start:Department -->
            <div class="row mb-3">
              <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Department</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4">
                <span class="fw-bold fs-6">{{ classs.department.name }}</span>
              </div>
            </div>
            <!-- End:Department -->

            <!-- Start:Session -->
            <div class="row mb-3">
              <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Session</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4">
                <span class="fw-bold fs-6 text-primary"
                  >{{
                    classs.session_start
                      ? $nuxt.$utils.dateFormatNoTimeDay(classs.session_start)
                      : '----'
                  }}
                  -
                  {{
                    classs.session_end
                      ? $nuxt.$utils.dateFormatNoTimeDay(classs.session_end)
                      : '----'
                  }}</span
                >
              </div>
            </div>
            <!-- End:Session -->

            <!-- Start:Teacher -->
            <div class="row mb-3">
              <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">Teacher</label>
              </div>
              <div class="col d-flex mt-lg-4 mt-sm-4">
                <span class="fs-6">{{ classs.teacher.full_name }} </span>
              </div>
            </div>
            <!-- End:Teacher -->

            <!-- Start:College -->
            <div class="row">
              <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                <label class="text-muted">College</label>
              </div>
              <div class="col-12 mt-lg-4 mt-sm-4">
                <Lazy-DashClassDetailCollegeCard :college="classs.college" />
              </div>
            </div>
            <!-- End:College -->
          </div>
        </div>
        <!-- </transition> -->
      </div>
      <!-- end:Class Detail -->
    </transition>

    <!-- <transition name="scale-in" mode="out-in"> -->
    <!-- start:Class Student List -->
    <div class="card mt-4" v-if="!loading">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Students List</h2>
      </div>

      <!-- Start:Loading -->
      <div class="card-body">
        <!-- <Lazy-LoadersDetailCard /> -->
        <lazy-DashClassDetailStudent :classId="$route.query.id" />
      </div>
      <!-- End:Loading -->
    </div>
    <!-- end:Class Student List -->
  </div>
</template>

<script>
export default {
  name: 'DashClassDetail',
  layout: 'dash',

  data() {
    return {
      hod: {},
      loading: true,
      error: true,

      classs: {},
      studentList: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Class',
        url: '/dash/class',
      },
      {
        name: 'Detail',
      },
    ])
  },

  methods: {
    async getClass() {
      let id = this.$route.query.id

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

    async getStudentList() {
      let id = this.$route.query.id
      let payload = {}
      payload.classs = id

      return this.$api.student
        .list(payload)
        .then((response) => {
          this.studentList = response.data
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
  },

  mounted() {
    this.getClass()
      .then(() => {
        return this.getStudentList()
      })
      .then(() => {
        this.loading = false
      })
  },
}
</script>

<style scoped></style>
