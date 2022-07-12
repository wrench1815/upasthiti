<template>
  <section class="container-fluid my-4">
    <!-- <Lazy-DashUserCard v-if="!loading" :user="user" /> -->
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">User Details</h2>
      </div>
      <!-- start:User Info -->
      <div class="card-body">
        <!-- start:User Info Card -->
        <div
          class="mb-3 shadow-5 d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row"
        >
          <div>
            <img
              v-lazy-load
              class="avatar avatar-xxl obj-fit-cover shadow-1-strong"
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-content-start text-break"
          >
            <div class="fw-bold fs-5 text-primary text-gradient">
              <!-- {{ college.institute_name }} -->
              Name
            </div>
            <div class="text-muted small d-flex gap-1">
              <i class="ri-mail-fill text-primary text-gradient"></i>
              <!-- {{ college.institute_email }} -->
              Roll No
            </div>
            <div class="text-muted small d-flex gap-1">
              <i class="ri-phone-fill text-primary text-gradient"></i>
              <!-- {{ college.institute_mobile }} -->
              Role
            </div>
          </div>
        </div>
        <!-- end:user Info Card -->

        <!-- start:College Alias -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
            <label class="text-muted fw-bold-500">Institute Alias</label>
          </div>
          <div class="col d-flex mt-lg-4 mt-sm-4">
            <span class="fw-bold-600 fs-6">
              <!-- {{
              college.institute_alias_name
            }} -->
            </span>
          </div>
        </div>
        <!-- end:College Alias -->

        <!-- start:College Principal  -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Institute Principal</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6">
              <!-- {{ principal.first_name }} {{ principal.last_name }} -->
            </span>
          </div>
        </div>
        <!-- end:College Principal -->

        <!-- start:College Website -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Institute Website</label>
          </div>
          <div class="col d-flex">
            <!-- <a
              :href="college.institute_website"
              target="_blank"
              class="text-gradient text-primary"
              >
              {{ college.institute_website }}
              <i class="ri-external-link-fill"></i
            ></a> -->
          </div>
        </div>
        <!-- end:College Website -->

        <!-- start:College Address -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Institute Address</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6">
              <!-- {{
              college.institute_address
            }} -->
            </span>
          </div>
        </div>
        <!-- end:College Address -->
      </div>
      <!-- end:User Info -->
    </div>
    <!-- start:College -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College</h2>
      </div>

      <h1 class="d-flex justify-content-center">To-Do</h1>
    </div>
    <!-- end:College  -->
    <!-- start:Department -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Department</h2>
      </div>

      <h1 class="d-flex justify-content-center">To-Do</h1>
    </div>
    <!-- end:Department  -->
    <!-- start:Classes -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Classes</h2>
      </div>

      <h1 class="d-flex justify-content-center">To-Do</h1>
    </div>
    <!-- end:Classes-->
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
    }
  },

  methods: {
    // fetch user by id
    // populate user object with fetched data
    async getUser() {
      return new Promise((resolve, reject) => {
        let id = this.$route.query.id

        this.$api.user
          .retrieve(id)
          .then((resp) => {
            this.user = resp.data

            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },

  mounted() {
    this.getUser().then(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
