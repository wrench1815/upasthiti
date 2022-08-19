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
        <Lazy-DashUserDetailUCard :user="user" />
        <!-- end:user Info Card -->

        <section>
          <!-- start:User District -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
              <label class="text-muted fw-bold-500">District</label>
            </div>
            <div class="col d-flex mt-lg-4 mt-sm-4">
              <span class="fw-bold-600 fs-6">{{ user.district }}</span>
            </div>
          </div>
          <!-- end:User District -->

          <!-- start:User Address -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500"> Address</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">{{ user.address }}</span>
            </div>
          </div>
          <!-- end:User Address -->

          <!-- start:User Gender -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">Gender</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">
                <i :class="genderIcon"></i> {{ user.gender }}</span
              >
            </div>
          </div>
          <!-- end:User Gender -->
        </section>
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

  computed: {
    genderIcon(gen) {
      if (gen == 'Male') {
        // if Male
        return 'ri-men-fill'
      } else if (gen == 'Female') {
        // if Female
        return 'ri-women-fill'
      } else {
        // if unspecified
        return 'ri-genderless-fill'
      }
    },
  },

  methods: {
    // fetch user by id
    async getUser() {
      this.loading = true

      return this.$api.user
        .retrieve(this.$route.query.id)
        .then((response) => {
          this.user = response.data

          this.error = false
        })
        .catch((error) => {
          this.error = true

          if (error.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'User not found.',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went wrong.',
            })
          }
        })
    },
  },

  mounted() {
    this.getUser().then(() => {
      if (!this.error) {
        this.loading = false
      }
    })
  },
}
</script>

<style></style>
