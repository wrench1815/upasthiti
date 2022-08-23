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

        <!-- start: University -->
        <div class="mt-5 mb-4">
          <h3 class="text-primary text-gradient">University</h3>
        </div>

        <!-- start: University  Info Card -->
        <Lazy-DashCourseDetailUniCard />
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
      // hod: {},
      // loading: true,
      // error: true,
      // department: {},
      // college: {},
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
    // async getDepartment() {
    //   let id = this.$route.query.id
    //   return this.$api.department
    //     .retrieve(id)
    //     .then((response) => {
    //       this.department = response.data
    //     })
    //     .catch((err) => {
    //       if (err.response.status == 404) {
    //         this.$nuxt.error({
    //           statusCode: 404,
    //           message: 'Department does not Exist',
    //         })
    //       } else {
    //         this.$nuxt.error({
    //           statusCode: 400,
    //           message: 'Something went Wrong',
    //         })
    //       }
    //     })
    // },
  },

  mounted() {
    // this.getDepartment().then(() => {
    //   this.loading = false
    // })
  },
}
</script>

<style scoped>
.card-hover div > img {
  box-shadow: none;
  transition: all 0.3s ease-in-out;
}

.card-hover:hover div > img {
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.16),
    0 10px 20px -2px rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
</style>
