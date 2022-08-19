<template>
  <section class="container-fluid my-4">
    <!-- <Lazy-DashUserCard v-if="!loading" :user="user" /> -->
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">User Details</h2>
      </div>

      <div class="card-body" v-if="loading">
        <div v-for="item in 6" :key="item">
          <div class="row placeholder-wave">
            <div class="col-12 col-md-4 mb-2">
              <span class="placeholder placeholder-sm w-100"></span>
              <span class="placeholder placeholder-sm w-75"></span>
            </div>
            <div class="col">
              <div class="mb-4">
                <span class="placeholder placeholder-sm w-100"></span>
                <span class="placeholder placeholder-sm w-75"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- start:User Info -->
      <div class="card-body">
        <!-- start:User Info Card -->
        <Lazy-DashUserDetailUCard />
        <!-- end:user Info Card -->
      </div>
      <!-- end:User Info -->
    </div>
    <!-- start:Principal -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Principal</h2>
      </div>
      <!-- <DashUserDetailCard /> -->
      <div class="card-body">
        <!-- start:Principal Card -->
        <div class="row">
          <div
            class="col-sm-6 col-lg-6 col-md-6 col-12"
            v-for="item in 1"
            :key="item"
          >
            <Lazy-DashUserDetailPrincipalCard />
          </div>
        </div>
        <!-- end:Principal Card -->
        <!-- start:College Card -->
        <h3 class="text-primary text-gradient mt-5 mb-4">College</h3>
        <Lazy-DashUserDetailCollegeCard />
        <!-- end:College Card -->
      </div>
    </div>
    <!-- end:Principal  -->
    <!-- start:HOD -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">HOD</h2>
      </div>
      <div class="card-body">
        <!-- start:HOD info Card -->
        <div class="row">
          <div
            class="col-sm-6 col-lg-6 col-md-6 col-12"
            v-for="item in 1"
            :key="item"
          >
            <Lazy-DashUserDetailHodCard />
          </div>
        </div>
        <!-- end:HOD info Card -->
        <!-- start:College Card -->
        <h3 class="text-primary text-gradient mt-5 mb-4">College</h3>
        <Lazy-DashUserDetailCollegeCard />
        <!-- end:College Card -->
      </div>
      <div class="row mx-2">
        <div
          class="col-sm-6 col-lg-4 col-md-6 col-12"
          v-for="item in 1"
          :key="item"
        >
          <h3 class="text-primary text-gradient mt-5 mb-4">Department</h3>
          <Lazy-DashUserDetailDeptCard />
        </div>
      </div>
    </div>
    <!-- end:HOD -->
    <!-- start:Teacher-->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Teacher</h2>
      </div>
      <div class="card-body">
        <!-- start:Teacher info Card -->

        <div class="row">
          <div
            class="col-sm-6 col-lg-6 col-md-6 col-12"
            v-for="item in 1"
            :key="item"
          >
            <Lazy-DashUserDetailHodCard />
          </div>
        </div>
        <!-- end:Teacher info Card -->
        <!-- start:College Card -->
        <h3 class="text-primary text-gradient mt-5 mb-4">College</h3>
        <Lazy-DashUserDetailCollegeCard />
        <!-- end:College Card -->
        <!-- start:Course Card -->
        <div>
          <h3>Course To-do</h3>
        </div>
        <!-- end:Course Card -->
      </div>
    </div>
    <!-- end:Teacher -->
  </section>
</template>

<script>
export default {
  name: 'DashUserDetail',
  layout: 'dash',

  data() {
    return {
      user: {},
      loading: true,
      defaultProfileImage: '',
      error: true,
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'User',
        url: '/dash/user',
      },
      {
        name: 'detail',
      },
    ])
  },

  methods: {
    // fetch user by id
    // populate user object with fetched data
    async getUser() {
      this.loading = await true

      await this.$api.user
        .retrieve(this.$route.query.id)
        .then((response) => {
          this.user = response.data

          this.error = false
        })
        .catch((error) => {
          this.$nuxt.error({
            statusCode: error.response.status,
            message: error.response.data.message,
          })

          // this.$swal({
          //   title: 'Error',
          //   icon: 'error',
          //   type: 'error',
          //   text: `${
          //     error.response.data.detail
          //       ? error.response.data.detail
          //       : 'An error has occured'
          //   }`,
          //   confirmButtonText: 'Refresh',
          //   showCancelButton: true,
          //   cancelButtonText: 'To Dash Home',
          //   confirmButtonClass: 'btn btn-info',
          // }).then((result) => {
          //   if (result.isConfirmed) {
          //     this.getUser()
          //   } else if (result.isDismissed) {
          //     this.$router.push('/dash')
          //   }
          // })
        })
    },

    async setDefaults() {
      return new Promise((resolve, reject) => {
        this.defaultProfileImage = this.$config.defaultUserImage

        resolve()
      })
    },
  },

  mounted() {
    this.getUser().then(() => {
      this.setDefaults().then(() => {
        if (!this.error) {
          console.log('gonna set loading')
          this.loading = false
        }
      })
    })
  },
}
</script>

<style></style>
