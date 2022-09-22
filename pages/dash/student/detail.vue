<template>
  <section class="container-fluid my-4">
    <transition name="scale-in" mode="out-in">
      <div class="card card-body" v-if="loading">
        <Lazy-LoadersDetailUserCard />
      </div>

      <section v-else>
        <!-- start:Student Info -->
        <div class="card">
          <div class="card-header">
            <h2 class="text-primary text-gradient">Student Details</h2>
          </div>
          <div class="card-body">
            <!-- start:User Info Card -->
            <Lazy-DashStudentDetailUCard :student="student" />
            <!-- end:user Info Card -->

            <section>
              <!-- start:student University Roll no -->
              <div class="row mb-3">
                <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
                  <label class="text-muted fw-bold-500"
                    >University Roll no</label
                  >
                </div>
                <div class="col d-flex mt-lg-4 mt-sm-4">
                  <span class="fw-bold fs-6 text-primary">{{
                    student.university_rollno
                      ? student.university_rollno
                      : '----'
                  }}</span>
                </div>
              </div>
              <!-- end:student University Roll no -->

              <!-- start:student Class Roll no -->
              <div class="row mb-3">
                <div class="col-12 col-md-4 d-flex">
                  <label class="text-muted fw-bold-500">Class Roll no</label>
                </div>
                <div class="col d-flex">
                  <span class="fw-bold fs-6 text-primary">{{
                    student.class_rollno ? student.class_rollno : '----'
                  }}</span>
                </div>
              </div>
              <!-- end:student Class Roll no -->

              <!-- start:student District -->
              <div class="row mb-3">
                <div class="col-12 col-md-4 d-flex">
                  <label class="text-muted fw-bold-500">District</label>
                </div>
                <div class="col d-flex">
                  <span class="fw-bold-600 fs-6">{{
                    student.district ? student.district : '----'
                  }}</span>
                </div>
              </div>
              <!-- end:student District -->

              <!-- start:student Address -->
              <div class="row mb-3">
                <div class="col-12 col-md-4 d-flex">
                  <label class="text-muted fw-bold-500"> Address</label>
                </div>
                <div class="col d-flex">
                  <span class="fw-bold-600 fs-6">{{
                    student.address ? student.address : '---'
                  }}</span>
                </div>
              </div>
              <!-- end:student Address -->

              <!-- start:student Gender -->
              <div class="row mb-3">
                <div class="col-12 col-md-4 d-flex">
                  <label class="text-muted fw-bold-500">Gender</label>
                </div>
                <div class="col d-flex">
                  <span class="fw-bold-600 fs-6">
                    <i
                      class="text-primary"
                      :class="genderIcon(student.gender)"
                    ></i>
                    {{ student.gender }}</span
                  >
                </div>
              </div>
              <!-- end:student Gender -->
            </section>
          </div>
        </div>
        <!-- end:student Info -->
      </section>
    </transition>

    <!-- start:Principal -->
    <!-- <transition name="scale-in" mode="out-in">
      <div class="card card-body mt-4" v-if="loading">
        <Lazy-LoadersDetailUserCollegeCard />
      </div>

      <section v-else>
        <div class="card mt-4" v-if="user.is_principal">
          <div class="card-header">
            <h2 class="text-primary text-gradient">Administered College</h2>
          </div>

          <div class="card-body">
            start:College Card
              <Lazy-DashUserDetailCollegeCard
              :college="user.administrated_college"
              v-if="user.administrated_college"
            />
            <div v-else>
              <Lazy-UtilsNoData />
            </div> -->
    <!-- end:College Card -->
    <!-- </div>
        </div>
      </section>
    </transition> -->
    <!-- end:Principal  -->

    <!-- start:Teacher-->
    <!-- <div class="card mt-4 d-none">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Teacher</h2>
      </div>
      <div class="card-body"> -->
    <!-- start:Teacher info Card -->

    <!-- <div class="row">
          <div
            class="col-sm-6 col-lg-6 col-md-6 col-12"
            v-for="item in 1"
            :key="item"
          >
            <Lazy-DashUserDetailHodCard />
          </div>
        </div> -->
    <!-- end:Teacher info Card -->

    <!-- start:College Card -->
    <!-- <h3 class="text-primary text-gradient mt-5 mb-4">College</h3> -->
    <!-- <Lazy-DashUserDetailCollegeCard /> -->
    <!-- end:College Card -->

    <!-- start:Course Card -->
    <!-- <div>
          <h3>Course To-do</h3>
        </div> -->
    <!-- end:Course Card -->
    <!-- </div>
    </div> -->
    <!-- end:Teacher -->
  </section>
</template>

<script>
export default {
  name: 'DashStudentDetail',
  layout: 'dash',

  data() {
    return {
      student: {},
      loading: true,

      error: true,
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Student',
        url: '/dash/student',
      },
      {
        name: 'detail',
      },
    ])
  },

  methods: {
    // fetch student by id
    async getStudent() {
      this.loading = true

      return this.$api.student
        .retrieve(this.$route.query.id)
        .then((response) => {
          this.student = response.data

          this.error = false
        })
        .catch((error) => {
          this.error = true

          if (error.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'Student not found.',
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
    this.getStudent().then(() => {
      if (!this.error) {
        this.loading = false
      }
    })
  },
}
</script>

<style></style>
