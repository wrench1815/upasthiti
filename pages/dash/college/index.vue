<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Colleges</h1>
        <h3 class="text-secondary text-capitalize">
          lists all Registered Colleges
        </h3>
      </div>
      <div class="card-body">
        <section
          class="d-flex align-items-center justify-content-center flex-wrap"
        >
          <!-- start:Search -->
          <div class="me-auto mb-3">
            <div
              class="btn btn-floating bg-gradient-primary text-white btn-s d-flex justify-content-center align-items-center"
            >
              <i class="ri-search-line ri-lg"></i>
            </div>
          </div>
          <!-- end:Search -->

          <!-- start:District Filter -->
          <div class="filter-width mb-3">
            <v-select
              placeholder="Select Filter"
              :options="districtsList"
              v-model="selectedDistrict"
              :clearable="false"
              @option:selected="filterCollege"
            >
              <!-- selected -->
              <template #selected-option="{ label }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1"
                >
                  <i
                    class="text-primary text-gradient ri-filter-line mt-n1"
                  ></i>
                  <span>{{ label }}</span>
                </div>
              </template>
            </v-select>
          </div>
          <!-- end:District Filter -->
        </section>
        <Lazy-LoadersTable v-if="loading" />
        <Lazy-DashCollegeTable v-else :colleges.sync="colleges" />

        <div class="d-flex justify-content-end mt-3">
          <Lazy-LoadersButton v-if="loading" :rounded="true" />
          <Lazy-UtilsLinkButton
            v-if="!loading"
            :rounded="true"
            :link="'/dash/college/add'"
            >Add new College</Lazy-UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashCollegeIndex',
  layout: 'dash',

  watch: {
    '$route.query'() {
      this.payloadWatch()
      this.refreshCollege()
    },
  },

  data() {
    return {
      colleges: [],
      loading: true,
      error: true,
      userFilters: ['All', 'Admin', 'Principal', 'HOD', 'Teacher'],
      selectedDistrict: 'All',
      districtsList: [],
      payload: {},
    }
  },

  computed: {
    ...mapGetters({
      districts: 'listDistricts',
    }),
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'College',
        url: '/dash/college',
      },
    ])
  },

  methods: {
    // on filter
    filterCollege() {
      this.payload = {}
      this.payload.district = this.selectedDistrict
      this.$router.push({
        path: this.$route.path,
      })
      this.refreshCollege()
    },

    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = await '1'
      }
    },

    async getColleges() {
      this.loading = true

      if (this.payload.district) {
        if (this.payload.district == 'All') {
          this.payload.district = ''
        }
      }

      return this.$api.college
        .list()
        .then((response) => {
          this.colleges = response.data

          this.error = false
        })
        .catch((error) => {
          if (err.response.status == 404) {
            this.error = true
            this.colleges = []

            this.$nuxt.error({
              statusCode: 404,
              message: 'Page not Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    // when College is deleted
    deletedCollege() {
      if (this.college.results.length == 1) {
        if (this.payload.page != 1) {
          this.onPaginated(this.payload.page - 1)
        } else {
          this.onPaginated(1)
        }
      }
      this.refreshCollege()
    },

    // refresh College
    refreshCollege() {
      this.getColleges().then(() => {
        this.loading = false
      })
    },

    // on paginated
    onPaginated(pageNum) {
      this.payload.page = pageNum
      this.$router.push({
        path: this.$route.path,
        query: {
          page: pageNum,
        },
      })
    },

    dateFormat(date) {
      // return strf date
      return this.$moment(date).format('Do MMMM YYYY, h:mm:ss a')
    },

    async setDefaults() {
      this.payload.page = await this.$route.query.page
    },
  },

  mounted() {
    this.payload.page = this.$route.query.page
    this.districtsList = ['All', ...this.districts]

    this.getColleges().finally(() => {
      if (!this.error) {
        this.loading = false
      }
    })
  },
}
</script>

<style scoped>
.filter-width {
  width: 10.5rem;
}
</style>
