<template>
  <section class="container-fluid my-4">
    <transition name="scale-in" mode="out-in">
      <div class="card card-body" v-if="loading">
        <Lazy-LoadersDetailUserCard />
      </div>

      <section v-else>
        <!-- start:User Info -->
        <div class="card">
          <div class="card-header">
            <h2 class="text-primary text-gradient">User Details</h2>
          </div>
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
                  <span class="fw-bold-600 fs-6">{{
                    user.district ? user.district : '----'
                  }}</span>
                </div>
              </div>
              <!-- end:User District -->

              <!-- start:User Address -->
              <div class="row mb-3">
                <div class="col-12 col-md-4 d-flex">
                  <label class="text-muted fw-bold-500"> Address</label>
                </div>
                <div class="col d-flex">
                  <span class="fw-bold-600 fs-6">{{
                    user.address ? user.address : '---'
                  }}</span>
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
                    <i
                      class="text-primary"
                      :class="genderIcon(user.gender)"
                    ></i>
                    {{ user.gender }}</span
                  >
                </div>
              </div>
              <!-- end:User Gender -->
            </section>
          </div>
        </div>
        <!-- end:User Info -->
      </section>
    </transition>

    <!-- start:Principal -->
    <transition name="scale-in" mode="out-in">
      <div class="card card-body mt-4" v-if="loading">
        <Lazy-LoadersDetailUserCollegeCard />
      </div>

      <section v-else>
        <div class="card mt-4" v-if="user.is_principal">
          <div class="card-header">
            <h2 class="text-primary text-gradient">Administered College</h2>
          </div>

          <div class="card-body">
            <!-- start:College Card -->
            <Lazy-DashUserDetailCollegeCard
              :college="user.administrated_college"
              v-if="user.administrated_college"
            />
            <div v-else>
              <Lazy-UtilsNoData />
            </div>
            <!-- end:College Card -->
          </div>
        </div>
      </section>
    </transition>
    <!-- end:Principal  -->

    <!-- start:HOD -->
    <transition name="scale-in" mode="out-in">
      <div class="card card-body mt-4" v-if="loading">
        <Lazy-LoadersDetailUserCollegeCard />
      </div>

      <section v-else>
        <div class="card mt-4" v-if="user.is_hod">
          <div class="card-header">
            <h2 class="text-primary text-gradient">Affiliated College</h2>
          </div>
          <div class="card-body">
            <!-- start:College Card -->
            <template v-for="college in user.college">
              <Lazy-DashUserDetailCollegeCard
                :college="college"
                :key="college.id"
              />
            </template>
            <!-- end:College Card -->
          </div>

          <h2 class="card-header text-primary text-gradient">Department</h2>
          <section class="card-body" v-if="!loading">
            <Lazy-DashUserDetailDept :uId="user.id" />
          </section>
        </div>
      </section>
    </transition>
    <!-- end:HOD -->

    <!-- start:Teacher-->
    <div class="card mt-4 d-none">
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
        <!-- <Lazy-DashUserDetailCollegeCard /> -->
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
