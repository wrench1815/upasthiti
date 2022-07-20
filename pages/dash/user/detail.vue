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
      <div class="card-body" v-else>
        <!-- start:User Info Card -->
        <div
          class="mb-3 shadow-5 d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row"
        >
          <div>
            <img
              class="avatar avatar-xxl obj-fit-cover shadow-1-strong"
              :data-src="
                user.profile_image ? user.profile_image : defaultProfileImage
              "
              :alt="`${user.full_name}'s Profile Image`"
              v-lazy-load
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-content-start text-break"
          >
            <div class="fw-bold fs-5 text-primary text-gradient">
              {{ user.full_name ? user.full_name : '----' }}
            </div>
            <div class="text-muted small d-flex gap-1">
              <i class="ri-mail-fill text-primary text-gradient"></i>
              {{ user.email ? user.email : '----' }}
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
      defaultProfileImage: '',
      error: true,
    }
  },

  methods: {
    // fetch user by id
    // populate user object with fetched data
    async getUser() {
      this.loading = true

      this.$api.user
        .retrieve(this.$route.query.id)
        .then((response) => {
          this.user = response.data

          this.error = false
        })
        .catch((error) => {
          this.$swal({
            title: 'Error',
            icon: 'error',
            type: 'error',
            text: `${
              error.response.data.detail
                ? error.response.data.detail
                : 'An error has occured'
            }`,
            confirmButtonText: 'Refresh',
            showCancelButton: true,
            cancelButtonText: 'To Dash Home',
            confirmButtonClass: 'btn btn-info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.getUser()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
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
        // if () {
          this.loading = false
        // }
      })
    })
  },
}
</script>

<style></style>
