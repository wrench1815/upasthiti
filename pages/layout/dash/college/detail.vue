<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Details</h2>
        <p class="text-secondary">
          Details of College:
          <span class="text-info fw-bold">{{ college.institute_name }}</span>
        </p>
      </div>
      <div class="card-body">
        <div
          class="mb-3 shadow-5 d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row"
        >
          <div>
            <img
              :data-src="college.institute_logo"
              :alt="`${college.institute_name} logo`"
              v-lazy-load
              class="avatar avatar-xxl obj-fit-cover shadow-1-strong"
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-content-start text-break"
          >
            <div class="fw-bold fs-5 text-primary text-gradient">
              {{ college.institute_name }}
            </div>
            <div class="text-muted small d-flex gap-1">
              <i class="ri-mail-fill text-primary text-gradient"></i>
              {{ college.institute_email }}
            </div>
            <div class="text-muted small d-flex gap-1">
              <i class="ri-phone-fill text-primary text-gradient"></i>
              {{ college.institute_mobile }}
            </div>
          </div>
        </div>
        <!-- <div class="row mb-3 card-header shadow">

          <div class="col-12 col-md-4 col-lg-4">
            <div
              class="d-flex justify-content-lg-start justify-content-md-end justify-content-sm-center justify-content-center"
            >
              <img
                :data-src="college.institute_logo"
                :alt="`${college.institute_name} logo`"
                v-lazy-load
                class="avatar avatar-xl rounded-circle obj-fit-cover shadow"
              />
            </div>
          </div>
          <div
            class="col d-flex align-items-center justify-content-lg-start justify-content-sm-center justify-content-md-start"
          >
            <span class="fw-bold-600 h5 pt-3 text-center">{{
              college.institute_name
            }}</span>
          </div>
        </div> -->

        <div class="row mb-3">
          <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
            <label class="text-muted fw-bold-500">Institute Alias</label>
          </div>
          <div class="col d-flex mt-lg-4 mt-sm-4">
            <span class="fw-bold-600 fs-6">{{
              college.institute_alias_name
            }}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Institute Principal</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6"
              >{{ principal.first_name }} {{ principal.last_name }}</span
            >
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Institute Website</label>
          </div>
          <div class="col d-flex">
            <a
              :href="college.institute_website"
              target="_blank"
              class="text-gradient text-primary"
              >{{ college.institute_website }}</a
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Institute Address</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6">{{
              college.institute_address
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Principal Details</h2>
        <p>
          Details of User:
          <span class="text-info fw-bold"
            >{{ principal.first_name }} {{ principal.last_name }}</span
          >
        </p>
      </div>
      <div class="card-body">
        <div class="card" style="max-width: 300px">
          <div
            class="bg-image hover-overlay ripple d-flex justify-content-center z-index-5"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
              class="img-fluid avatar avatar-xxl rounded-circle mt-n5 shadow"
            />
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.15)"
              ></div>
            </a>
          </div>

          <div class="card-body">
            <div class="card-title fw-bold fs-5 text-primary text-gradient">
              {{ principal.first_name }} {{ principal.last_name }}
            </div>
            <label class="text-muted fw-bold-500">Email :</label>
            <span class="fw-bold-600 text-dark fs-6 card-text">{{
              principal.email
            }}</span>
            <label class="text-muted fw-bold-500">Gender :</label>
            <span class="fw-bold-600 text-dark fs-6">{{
              principal.gender
            }}</span>
          </div>
        </div>
        <!-- <div
          class="mb-3 shadow-5 d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row"
        >
          <div>
            <img
              :data-src="college.institute_logo"
              :alt="`${college.institute_name} logo`"
              v-lazy-load
              class="avatar avatar-xxl obj-fit-cover shadow-1-strong"
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-content-start text-break"
          >
            <div class="fw-bold fs-5 text-primary text-gradient">
              {{ principal.first_name }} {{ principal.last_name }}
            </div>
            <div class="text-muted small d-flex gap-1">
              <label class="text-muted fw-bold-500">Email :</label>
              <span class="fw-bold-600 text-dark  card-text">{{
                principal.email
              }}</span>
            </div>
            <div class="text-muted small d-flex gap-1">
             <label class="text-muted fw-bold-500">Gender :</label>
            <span class="fw-bold-600 text-dark card-text">{{
              principal.gender
            }}</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Department Details</h2>
        <p>Details of College Department</p>
      </div>
      <div class="card-body">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <!-- <h5 class="card-title ">Card title</h5> -->
                <div class="card-title fw-bold fs-5 text-primary text-gradient">
                  {{ principal.first_name }} {{ principal.last_name }}
                </div>
                <div>
                  <label class="text-muted fw-bold-500">HOD :</label>
                  <span class="fw-bold-600 text-dark fs-6 card-text">{{
                    principal.email
                  }}</span>
                </div>
                <div>
                  <label class="text-muted fw-bold-500">Teacher :</label>
                  <span class="fw-bold-600 text-dark fs-6">{{
                    principal.gender
                  }}</span>
                </div>
                <div>
                  <label class="text-muted fw-bold-500">Course :</label>
                  <span class="fw-bold-600 text-dark fs-6">{{
                    principal.gender
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                class="card-img-top"
                alt="Palm Springs Road"
              />
              <div class="card-body">
                <div class="card-title fw-bold fs-5 text-primary text-gradient">
                  {{ principal.first_name }} {{ principal.last_name }}
                </div>
                <div>
                  <label class="text-muted fw-bold-500">HOD :</label>
                  <span class="fw-bold-600 text-dark fs-6 card-text">{{
                    principal.email
                  }}</span>
                </div>
                <div>
                  <label class="text-muted fw-bold-500">Teacher :</label>
                  <span class="fw-bold-600 text-dark fs-6">{{
                    principal.gender
                  }}</span>
                </div>
                <div>
                  <label class="text-muted fw-bold-500">Course :</label>
                  <span class="fw-bold-600 text-dark fs-6">{{
                    principal.gender
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                class="card-img-top"
                alt="Los Angeles Skyscrapers"
              />
              <div class="card-body">
                <div class="card-title fw-bold fs-5 text-primary text-gradient">
                  {{ principal.first_name }} {{ principal.last_name }}
                </div>
                <div>
                  <label class="text-muted fw-bold-500">HOD :</label>
                  <span class="fw-bold-600 text-dark fs-6 card-text">{{
                    principal.email
                  }}</span>
                </div>
                <div>
                  <label class="text-muted fw-bold-500">Teacher :</label>
                  <span class="fw-bold-600 text-dark fs-6">{{
                    principal.gender
                  }}</span>
                </div>
                <div>
                  <label class="text-muted fw-bold-500">Course :</label>
                  <span class="fw-bold-600 text-dark fs-6">{{
                    principal.gender
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                class="card-img-top"
                alt="Skyscrapers"
              />
              <div class="card-body">
                <div class="card-title fw-bold fs-5 text-primary text-gradient">
                  {{ principal.first_name }} {{ principal.last_name }}
                </div>
                <div>
                  <label class="text-muted fw-bold-500">HOD :</label>
                  <span class="fw-bold-600 text-dark fs-6 card-text">{{
                    principal.email
                  }}</span>
                </div>
                <div>
                  <label class="text-muted fw-bold-500">Teacher :</label>
                  <span class="fw-bold-600 text-dark fs-6">{{
                    principal.gender
                  }}</span>
                </div>
                <div>
                  <label class="text-muted fw-bold-500">Course :</label>
                  <span class="fw-bold-600 text-dark fs-6">{{
                    principal.gender
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeDetail',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      principal: {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        gender: '',
        date_added: '',
        is_active: '',
        is_admin: '',
        is_principal: '',
        is_hod: '',
        is_teacher: '',
      },
      college: {
        institute_name: '',
        institute_address: '',
        institute_alias_name: '',
        institute_principal: '',
        institute_logo: '',
        institute_website: '',
        institute_mobile: '',
        institute_email: '',
      },
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
      this.loading = true

      await this.$api.college
        .retrieve(this.$route.query.id)
        .then((response) => {
          this.college = response.data
          this.error = false
        })
        .catch((error) =>
          this.$swal({
            title: 'Error',
            icon: 'error',
            type: 'error',
            text: `${
              response.data.detail
                ? error.response.data.detail
                : 'An error has occured'
            }`,
            confirmButtonText: 'Refresh',
            showCancelButton: true,
            cancelButtonText: 'To Dash Home',
            confirmButtonClass: 'btn btn-info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.getCollege()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        )
    },

    async getPrincipal() {
      this.loading = true

      await this.$api.user
        .retrieve(this.college.institute_principal)
        .then((response) => {
          this.principal = response.data
          this.error = false
        })
        .catch((error) =>
          this.$swal({
            title: 'Error',
            icon: 'error',
            type: 'error',
            text: `${
              response.data.detail
                ? error.response.data.detail
                : 'An error has occured'
            }`,
            confirmButtonText: 'Refresh',
            showCancelButton: true,
            cancelButtonText: 'To Dash Home',
            confirmButtonClass: 'btn btn-info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.getPrincipal()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        )
    },
  },

  mounted() {
    this.getCollege().then(() => {
      this.getPrincipal().then(() => {
        if (!this.error) this.loading = false
      })
    })
  },
}
</script>

<style scoped>
/* * {
  border: 2px solid rebeccapurple;
} */
</style>
