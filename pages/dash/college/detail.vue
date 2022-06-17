<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h2>College Details</h2>
        <p>
          Details of College:
          <span class="text-info fw-bold">{{ college.institute_name }}</span>
        </p>
      </div>
      <div class="card-body">
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Institute name</label>
          </div>
          <div class="col">
            <span class="fw-bold-600 fs-6">{{ college.institute_name }}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Institute Address</label>
          </div>
          <div class="col">
            <span class="fw-bold-600 fs-6">{{
              college.institute_address
            }}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Institute Alias</label>
          </div>
          <div class="col">
            <span class="fw-bold-600 fs-6">{{
              college.institute_alias_name
            }}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Institute Principal</label>
          </div>
          <div class="col">
            <span class="fw-bold-600 fs-6"
              >{{ principal.first_name }} {{ principal.last_name }}</span
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Institute Logo</label>
          </div>
          <div class="col">
            <div>
              <img
                :data-src="college.institute_logo"
                :alt="`${college.institute_name} logo`"
                v-lazy-load
                class="avatar avatar-lg rounded-circle obj-fit-cover shadow"
              />
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Institute Website</label>
          </div>
          <div class="col">
            <a :href="college.institute_website" target="_blank">{{
              college.institute_website
            }}</a>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Institute Mobile</label>
          </div>
          <div class="col">
            <a :href="`tel:${college.institute_mobile}`" target="_blank">{{
              college.institute_mobile
            }}</a>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Institute website</label>
          </div>
          <div class="col">
            <a :href="`mailto:${college.institute_email}`" target="_blank">{{
              college.institute_email
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-header">
        <h2>College Principal Details</h2>
        <p>
          Details of User:
          <span class="text-info fw-bold"
            >{{ principal.first_name }} {{ principal.last_name }}</span
          >
        </p>
      </div>
      <div class="card-body">
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Full Name</label>
          </div>
          <div class="col">
            <span class="fw-bold-600 fs-6"
              >{{ principal.first_name }} {{ principal.last_name }}</span
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Email</label>
          </div>
          <div class="col">
            <span class="fw-bold-600 fs-6">{{ principal.email }}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-4">
            <label class="text-muted fw-bold-500">Gender</label>
          </div>
          <div class="col">
            <span class="fw-bold-600 fs-6">{{ principal.gender }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-header">
        <h2>Departmenft Details</h2>
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
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
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
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
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
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
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
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
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

<style></style>
