<template>
  <div class="container-fluid my-4">
    <!-- start:Course Detail -->
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Course Details</h2>
      </div>

      <!-- Start:Loading -->
      <div class="card-body" v-if="loading">
        <Lazy-LoadersDetailCourseCard />
      </div>
      <!-- End:Loading -->

      <!-- start:course Info -->
      <div class="card-body" v-else>
        <!-- start:course Info Card -->
        <Lazy-DashCourseDetailCard :course="course" isCourse />
        <!-- end:course Info Card -->

        <section>
          <!-- start:Code -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
              <label class="text-muted fw-bold-500">Code</label>
            </div>
            <div class="col d-flex mt-lg-4 mt-sm-4">
              <span class="fw-bold-600 fs-6">{{
                course.code ? course.code : '----'
              }}</span>
            </div>
          </div>
          <!-- end:Code -->

          <!-- start:is Practical -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">Is Practical</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">
                <i
                  class="ri-checkbox-circle-fill text-success ri-lg"
                  v-if="course.is_practical"
                ></i>
                <i class="ri-close-circle-fill text-danger ri-lg" v-else></i>
              </span>
            </div>
          </div>
          <!-- end:Is Practical -->
        </section>

        <!-- start: University -->
        <div class="mt-5 mb-4">
          <h3 class="text-primary text-gradient">University</h3>
        </div>

        <!-- start: University  Info Card -->
        <Lazy-DashCourseDetailUniCard :university="course.university" />
        <!-- end: University  Info Card -->

        <!-- end: University-->
      </div>
      <!-- end:course Info -->
    </div>
    <!-- end:course Detail -->
  </div>
</template>

<script>
export default {
  name: 'DashCourseDetail',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      course: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Course',
        url: '/dash/course',
      },
      {
        name: 'Detail',
      },
    ])
  },

  methods: {
    async getCourse() {
      let id = this.$route.query.id

      return this.$api.course
        .retrieve(id)
        .then((response) => {
          this.course = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'Course does not Exist',
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
    this.getCourse().then(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
