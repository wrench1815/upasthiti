<template>
  <div class="container-fluid my-4">
    <!-- start:Department Detail -->
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Department Details</h2>
      </div>

      <!-- Start:Loading -->
      <div class="card-body" v-if="loading">
        <Lazy-LoadersDetailCard />
      </div>
      <!-- End:Loading -->

      <!-- start:Department Info -->
      <div class="card-body" v-else>
        <!-- start:Department Info Card -->
        <Lazy-DashDepartmentDetailCard1 :department="department" isDepartment />
        <!-- end:Department Info Card -->

        <!-- start:HOD-->
        <div class="mt-5">
          <h4 class="text-primary text-gradient">HOD</h4>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <!-- start:HOD  Info Card -->
            <Lazy-DashDepartmentDetailHodCard :hod="department.hod" />

            <!-- end:HOD Info Card -->
          </div>
        </div>

        <!-- end:HOD-->

        <!-- start:College-->
        <div class="mt-5 mb-4">
          <h4 class="text-primary text-gradient">College</h4>
        </div>

        <!-- start:College  Info Card -->
        <Lazy-DashDepartmentDetailCard1
          :college="department.college"
          isCollege
        />
        <!-- end:College Info Card -->

        <!-- end:College-->
      </div>
      <!-- end:Department Info -->
    </div>
    <!-- end:Department Detail -->
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentDetail',
  layout: 'dash',

  data() {
    return {
      hod: {},
      loading: true,
      error: true,
      department: {},
      college: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Department',
        url: '/dash/department',
      },
      {
        name: 'Detail',
      },
    ])
  },

  methods: {
    async getDepartment() {
      let id = this.$route.query.id

      return this.$api.department
        .retrieve(id)
        .then((response) => {
          this.department = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'Department does not Exist',
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
    this.getDepartment().then(() => {
      this.loading = false
    })
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
