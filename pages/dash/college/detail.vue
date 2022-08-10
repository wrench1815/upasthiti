<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Details</h2>
      </div>
       <!-- Start:Loading -->
      <div class="card-body" v-if="loading">
        <div v-for="item in 5" class="mb-3" :key="item">
          <Lazy-LoadersText size="sm" para />
        </div>
      </div>
      <!-- End:Loading -->
      <!-- start:College Info -->
      <div class="card-body">
        <!-- start:College Info Card -->
        <div
          class="mb-3 shadow-5 d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-primary t"
        >
          <div>
            <img
              :data-src="college.logo"
              :alt="`${college.name} logo`"
              v-lazy-load
              class="avatar avatar-xxl obj-fit-cover shadow-1-strong bg-white"
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-content-start text-break "
          >
            <div class="fw-bold fs-5 text-light text-gradient">
              {{ college.name }}
            </div>
            <div class="text-muted small text-light d-flex gap-1">
              <i class="ri-mail-fill  text-gradient"></i>
              {{ college.email }}
            </div>
            <div class="text-muted small d-flex gap-1">
              <i class="ri-phone-fill text-light text-gradient"></i>
              {{ college.mobile }}
            </div>
          </div>
        </div>
        <!-- end:College Info Card -->

        <!-- start:College Alias -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
            <label class="text-muted  fw-bold-500">Alias</label>
          </div>
          <div class="col d-flex mt-lg-4 mt-sm-4">
            <span class="fw-bold-600 fs-6">{{ college.alias_name }}</span>
          </div>
        </div>
        <!-- end:College Alias -->

        <!-- start:College Principal  -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Principal</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6"
              >
              {{ college.principal.name}}
               </span
            >
          </div>
        </div>
        <!-- end:College Principal -->

        <!-- start:College Website -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500"> Website</label>
          </div>
          <div class="col d-flex">
            <a
              :href="college.website"
              target="_blank"
              class="text-gradient text-primary"
              >{{ college.website }} <i class="ri-external-link-fill"></i
            ></a>
          </div>
        </div>
        <!-- end:College Website -->

        <!-- start:College Address -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Address</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6">{{ college.address }}</span>
          </div>
        </div>
        <!-- end:College Address -->

        <!-- start:Affiliated University -->
        <!-- <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Affiliated University</label>
          </div>
          <div class="col d-flex">
            <a
              :href="college.affiliated_university"
              target="_blank"
              class="text-gradient text-primary"
              >{{ college.affiliated_university }}
              <i class="ri-external-link-fill"></i
            ></a>
          </div>
        </div> -->
        <!-- end:Affiliated University-->
      </div>
      <!-- end:College Info -->
    </div>

    <!-- start: Principal Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Principal</h2>
      </div>

      <div class="row">
        <div class="col-md-6 col-12">
          <div class="card border hover-shadow card-hover mt-5 mb-4 mx-4">
            <div class="d-flex justify-content-start">
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                class="img-fluid avatar avatar-xl ms-4 mt-n4"
              />

              <div
                class="d-flex flex-column justify-content-center align-content-start text-break"
              >
                <div
                  class="card-title fw-bold fs-5 text-primary text-gradient pt-3 px-2"
                >
                  {{ college.principal.name }}
                </div>
              </div>
            </div>
            <div class="card-body pt-2">
              <label class="text-muted fw-bold">Email:</label>
              <span class="text-dark fs-6">
                <!-- {{ principal.email }} -->
              </span>
              <br />
              <label class="text-muted fw-bold">Gender:</label>
              <span class="text-dark fs-6">
                <!-- {{ principal.gender }} -->
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end: Principal Info -->

    <!-- start:College Department Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Departments</h2>
      </div>
      <div class="row mx-2">
        <div
          class="col-sm-6 col-lg-4 col-md-6 col-12"
          v-for="item in 3"
          :key="item"
        >
          <div class="card my-4 shadow">
            <div class="card-header fw-bold fs-5 bg-primary text-white">
              <!-- {{ principal.first_name }} {{ principal.last_name }} -->
            </div>
            <div class="card-body">
              <div>
                <label class="text-muted fw-bold-500">HOD :</label>
                <span class="fw-bold-600 text-dark fs-6 card-text">
                  <!-- {{
                  principal.email
                }} -->
                </span>
              </div>
              <div>
                <label class="text-muted fw-bold-500">Teacher :</label>
                <span class="fw-bold-600 text-dark fs-6">
                  <!-- {{
                  principal.gender
                }} -->
                </span>
              </div>
              <div>
                <label class="text-muted fw-bold-500">Course :</label>
                <span class="fw-bold-600 text-dark fs-6">
                  <!-- {{
                  principal.gender
                }} -->
                </span>
              </div>
              <div>
                <label class="text-muted fw-bold-500">Student Count:</label>
                <span class="fw-bold-600 text-dark fs-6">
                  <!-- {{
                  principal.gender
                }} -->
                </span>
              </div>
              <a href="#" class="btn btn-primary rounded-pill mt-4"
                >Details <i class="ri-external-link-fill"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:College Department Info -->

    <!-- start:College HOD Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College HODs</h2>
      </div>
      <div class="row gap-">
        <div
          class="col-lg-4 col-md-6 col-12"
          v-for="item in hod.results"
          :key="item.id"
        >
          <div class="card-body">
            <div class="card mt-5 shadow">
              <div
                class="bg-image hover-overlay ripple d-flex mt-n5 mx-4 justify-content-start z-index-5"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                  class="img-fluid avatar avatar-xl shadow"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                  ></div>
                </a>
                <div
                  class="d-flex flex-column justify-content-center align-content-start text-break"
                >
                  <div
                    class="card-title fw-bold fs-5 text-primary text-gradient pt-3 ps-3"
                  >
                    <!-- {{ item.first_name }} {{ item.last_name }} -->
                  </div>
                </div>
              </div>

              <div class="card-body">
                <!-- <div class="card-title fw-bold fs-5 text-primary text-gradient">
                  {{ principal.first_name }} {{ principal.last_name }}
                </div> -->
                <label class="text-muted fw-bold-500">Email :</label>
                <span class="fw-bold-600 text-dark fs-6 card-text">
                  <!-- {{
                  item.email
                }} -->
                </span>
                <br />
                <label class="text-muted fw-bold-500">Gender :</label>
                <span class="fw-bold-600 text-dark fs-6">
                  <!-- {{
                  item.gender
                }} -->
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:College HOD Info -->

    <!-- start:College Teachers Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Teachers</h2>
      </div>
      <div class="row mx-2">
        <div
          class="col-sm-6 col-lg-4 col-md-6 col-12"
          v-for="item in 3"
          :key="item"
        >
          <div class="card-body">
            <div class="card shadow mt-5">
              <div
                class="bg-image hover-overlay ripple d-flex justify-content-center mt-n5 z-index-5"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                  class="img-fluid avatar avatar-xl shadow"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                  ></div>
                </a>
                <div
                  class="d-flex flex-column justify-content-center align-content-start text-break"
                >
                  <div
                    class="card-title fw-bold fs-5 text-primary text-gradient pt-3 ps-3"
                  >
                    <!-- {{ principal.first_name }} {{ principal.last_name }} -->
                  </div>
                </div>
              </div>

              <div class="card-body">
                <!-- <div class="card-title fw-bold fs-5 text-primary text-gradient">
                  {{ principal.first_name }} {{ principal.last_name }}
                </div> -->
                <label class="text-muted fw-bold-500">Email :</label>
                <span class="fw-bold-600 text-dark fs-6 card-text">
                  <!-- {{
                  principal.email
                }} -->
                </span>
                <label class="text-muted fw-bold-500">Gender :</label>
                <span class="fw-bold-600 text-dark fs-6">
                  <!-- {{
                  principal.gender
                }} -->
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:College Teachers Info -->

    <!-- start:College Students Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Students</h2>
      </div>
      <div class="row mx-2">
        <div
          class="col-sm-6 col-lg-4 col-md-6 col-12"
          v-for="item in 3"
          :key="item"
        >
          <div class="card-body">
            <div class="card shadow mt-5">
              <div
                class="bg-image hover-overlay ripple d-flex justify-content-center mt-n5 z-index-5"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                  class="img-fluid avatar avatar-xl shadow"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                  ></div>
                </a>
                <div
                  class="d-flex flex-column justify-content-center align-content-start text-break"
                >
                  <div
                    class="card-title fw-bold fs-5 text-primary text-gradient pt-3 ps-3"
                  >
                    <!-- {{ principal.first_name }} {{ principal.last_name }} -->
                  </div>
                </div>
              </div>

              <div class="card-body">
                <!-- <div class="card-title fw-bold fs-5 text-primary text-gradient">
                  {{ principal.first_name }} {{ principal.last_name }}
                </div> -->
                <label class="text-muted fw-bold-500">Email :</label>
                <span class="fw-bold-600 text-dark fs-6 card-text">
                  <!-- {{
                  principal.email
                }} -->
                </span>
                <label class="text-muted fw-bold-500">Gender :</label>
                <span class="fw-bold-600 text-dark fs-6">
                  <!-- {{
                  principal.gender
                }} -->
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:College Students Info -->
  </div>
</template>

<script>
export default {
  name: 'DashCollegeDetail',
  layout: 'dash',

  data() {
    return {
      hod: {},
      loading: true,
      error: true,
      // principal: {
      //   id: '',
      //   email: '',
      //   first_name: '',
      //   last_name: '',
      //   gender: '',
      //   date_added: '',
      //   is_active: '',
      //   is_admin: '',
      //   is_principal: '',
      //   is_hod: '',
      //   is_teacher: '',
      // },
      college: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'College',
        url: '/dash/college',
      },
      {
        name: 'Detail',
      },
    ])
  },

  methods: {
    async getCollege() {
      let id = this.$route.query.id

      return this.$api.college
        .retrieve(id)
        .then((response) => {
          this.college = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'College does not Exist',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },
    // async getCollege() {
    //   this.loading = true

    //   await this.$api.college
    //     .retrieve(this.$route.query.id)
    //     .then((response) => {
    //       this.college = response.data
    //       this.error = false
    //     })
    //     .catch((error) =>
    //       this.$swal({
    //         title: 'Error',
    //         icon: 'error',
    //         type: 'error',
    //         text: `${
    //           response.data.detail
    //             ? error.response.data.detail
    //             : 'An error has occured'
    //         }`,
    //         confirmButtonText: 'Refresh',
    //         showCancelButton: true,
    //         cancelButtonText: 'To Dash Home',
    //         confirmButtonClass: 'btn btn-info',
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           this.getCollege()
    //         } else if (result.isDismissed) {
    //           this.$router.push('/dash')
    //         }
    //       })
    //     )
    // },

    // async getPrincipal() {
    //   this.loading = true

    //   await this.$api.user
    //     .retrieve(this.college.institute_principal)
    //     .then((response) => {
    //       this.principal = response.data
    //       this.error = false
    //     })
    //     .catch((error) =>
    //       this.$swal({
    //         title: 'Error',
    //         icon: 'error',
    //         type: 'error',
    //         text: `${
    //           response.data.detail
    //             ? error.response.data.detail
    //             : 'An error has occured'
    //         }`,
    //         confirmButtonText: 'Refresh',
    //         showCancelButton: true,
    //         cancelButtonText: 'To Dash Home',
    //         confirmButtonClass: 'btn btn-info',
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           this.getPrincipal()
    //         } else if (result.isDismissed) {
    //           this.$router.push('/dash')
    //         }
    //       })
    //     )
    // },

    // async getHod() {
    //   this.loading = true

    //   await this.$api.user
    //     .listHod()
    //     .then((response) => {
    //       this.hod = response.data
    //       this.error = false
    //     })
    //     .catch((error) =>
    //       this.$swal({
    //         title: 'Error',
    //         icon: 'error',
    //         type: 'error',
    //         text: `${
    //           response.data.detail
    //             ? error.response.data.detail
    //             : 'An error has occured'
    //         }`,
    //         confirmButtonText: 'Refresh',
    //         showCancelButton: true,
    //         cancelButtonText: 'To Dash Home',
    //         confirmButtonClass: 'btn btn-info',
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           this.getHod()
    //         } else if (result.isDismissed) {
    //           this.$router.push('/dash')
    //         }
    //       })
    //     )
    // },
  },

  mounted() {
    // this.getCollege()
    //   .then(async () => {
    //     await this.getPrincipal()
    //   })
    //   .then(async () => {
    //     await this.getHod()
    //   })
    //   .then(() => {
    //     if (!this.error) {
    //       this.loading = false
    //     }
    //   })
    this.getCollege().then(() => {
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
