<template>
  <div class="container-fluid my-4">
    <!-- start:College Detail -->
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Details</h2>
      </div>

      <!-- Start:Loading -->
      <div class="card-body" v-if="loading">
        <Lazy-LoadersDetailCard />
      </div>
      <!-- End:Loading -->

      <!-- start:College Info -->
      <div class="card-body" v-else>
        <!-- start:College Info Card -->
        <Lazy-DashCollegeDetailCard1 :college="college" isCollege />
        <!-- end:College Info Card -->

        <!-- start:College Alias -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
            <label class="text-muted fw-bold-500">Alias</label>
          </div>
          <div class="col d-flex mt-lg-4 mt-sm-4">
            <span class="fw-bold-600 fs-6">{{ college.alias_name }}</span>
          </div>
        </div>
        <!-- end:College Alias -->

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
        <div class="mt-5 mb-4">
          <h3 class="text-primary text-gradient">Affiliated University</h3>
        </div>

        <!-- start:Affiliated University  Info Card -->
        <Lazy-DashCollegeDetailCard1 :college="college" isUniversity />
        <!-- end:Affiliated University  Info Card -->

        <!-- end:Affiliated University-->

        <!-- start: Principal Info -->

        <div class="mt-5">
          <h3 class="text-primary text-gradient">Principal</h3>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <!-- start: Principal Info Card -->
            <Lazy-DashCollegeDetailPrincipalCard
              :principal="college.principal"
            />
            <!-- end: Principal Info Card -->
          </div>
        </div>

        <!-- end: Principal Info -->
      </div>
      <!-- end:College Info -->
    </div>
    <!-- end:College Detail -->

    <!-- start:Department Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Departments</h2>
      </div>
      <!-- start:loading -->
      <div class="card-body" v-if="loading">
        <Lazy-LoadersDetailCard />
      </div>
      <!-- end: Loading -->
      <div class="row mx-2" v-else>
        <div
          class="col-sm-6 col-lg-4 col-md-6 col-12"
          v-for="item in 3"
          :key="item"
        >
          <Lazy-DashCollegeDetailCard3 />
        </div>
      </div>
    </div>
    <!-- end:College Department Info -->

    <!-- start:College HOD Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College HODs</h2>
      </div>
      <!-- Start:Loading -->
      <div class="card-body" v-if="loading">
        <Lazy-LoadersDetailCard />
      </div>
      <!-- End:Loading -->
      <div class="row mx-2" v-else>
        <template v-if="college.hod.length == 0">
          <h2>No HODs</h2>
        </template>
        <template v-else>
          <div
            class="col-sm-6 col-lg-4 col-md-6 col-12"
            v-for="item in college.hod"
            :key="item.id"
          >
            <Lazy-DashCollegeDetailHodCard :hod="item" />
          </div>
        </template>
      </div>
    </div>
    <!-- end:College HOD Info -->

    <!-- start:College Teachers Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Teachers</h2>
      </div>
      <!-- Start:Loading -->
      <div class="card-body" v-if="loading">
        <Lazy-LoadersDetailCard />
      </div>
      <!-- End:Loading -->
      <div class="row mx-2" v-else>
        <div
          class="col-sm-6 col-lg-4 col-md-6 col-12"
          v-for="item in 3"
          :key="item"
        >
          <!-- <DashCollegeDetailHodCard/> -->
        </div>
      </div>
    </div>
    <!-- end:College Teachers Info -->

    <!-- start:College Students Info -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">College Students</h2>
      </div>
      <!-- Start:Loading -->
      <div class="card-body" v-if="loading">
        <Lazy-LoadersDetailCard />
      </div>
      <!-- End:Loading -->
      <div class="row mx-2" v-else>
        <div
          class="col-sm-6 col-lg-4 col-md-6 col-12"
          v-for="item in 3"
          :key="item"
        >
          <!-- <DashCollegeDetailHodCard /> -->
        </div>
      </div>
    </div>
    <!-- end:College Students Info -->
  </div>
</template>

<script>
export default {
  name: 'DashClassDetail',
  layout: 'dash',

  data() {
    return {
      hod: {},
      loading: true,
      error: true,
      college: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Class',
        url: '/dash/class',
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
  },

  mounted() {
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
