<template>
  <section class="container-fluid my-4">
    <!-- <Lazy-DashUserCard v-if="!loading" :user="user" /> -->
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">University Details</h2>
      </div>

      <!-- Start:Loading -->
      <div class="card-body" v-if="loading">
        <div v-for="item in 5" class="mb-3" :key="item">
          <Lazy-LoadersText size="sm" para />
        </div>
      </div>
      <!-- End:Loading -->

      <!-- start:University Info -->
      <div class="card-body" v-else>
        <!-- start:University Info Card -->
        <div
          class="mb-3 shadow-5 d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row"
        >
          <div>
            <img
              class="avatar avatar-xxl obj-fit-cover shadow-1-strong"
              :data-src="university.logo"
              :alt="`${university.alias}'s logo`"
              v-lazy-load
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-content-start text-break"
          >
            <!-- start:University Name -->
            <div
              class="fw-bold fs-5 text-primary text-gradient text-capitalize"
            >
              {{ university.name }}
            </div>
            <!-- End:University Name -->

            <!-- start:University Email-->
            <div class="text-muted small d-flex gap-1">
              <i class="ri-mail-fill text-primary text-gradient"></i>
              {{ university.email }}
            </div>
            <!-- End:University Email -->

            <!-- start:University Phone Number-->
            <div class="text-muted small d-flex gap-1">
              <i class="ri-phone-fill text-primary text-gradient"></i>
              {{ university.phone_number }}
            </div>
            <!-- End:University Phone Number-->
          </div>
        </div>
        <!-- end:user Info Card -->

        <!-- start:University Alias -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
            <label class="text-muted fw-bold-500">Alias</label>
          </div>
          <div class="col d-flex mt-lg-4 mt-sm-4">
            <span class="fw-bold-600 fs-6">
              {{ university.alias }}
            </span>
          </div>
        </div>
        <!-- end:University Alias -->

        <!-- start:University Vice Chancellor -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Vice Chancellor</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6">
              {{ university.vice_chancelor }}
            </span>
          </div>
        </div>
        <!-- end:University Vice Chancellor -->

        <!-- start:University Website -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500"> Website</label>
          </div>
          <div class="col d-flex">
            <a
              v-if="university.website"
              :href="university.website"
              target="_blank"
              class="text-gradient text-primary text-break"
            >
              <span class="better-underline">
                {{ university.website }}
              </span>
              <i class="ri-external-link-fill"></i>
            </a>
            <span v-else class="text-primary fw-bold">N/A</span>
          </div>
        </div>
        <!-- end:University Website -->

        <!-- start:University Address -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Address</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6">
              {{ university.address }}
            </span>
          </div>
        </div>
        <!-- end:University Address -->

        <!-- start:College Count -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">College Count</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold text-primary fs-6">
              {{ university.college_affiliated_count }}
            </span>
          </div>
        </div>
        <!-- end:College Count-->
      </div>
      <!-- end:University Info -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashUniversityDetail',
  layout: 'dash',

  data() {
    return {
      university: {},
      loading: true,
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'University',
        url: '/dash/university',
      },
      {
        name: 'Detail',
      },
    ])
  },

  methods: {
    async getUni() {
      let id = this.$route.query.id

      return this.$api.university
        .retrieve(id)
        .then((response) => {
          this.university = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'University does not Exist',
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
    this.getUni().then(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
