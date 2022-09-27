<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Universities</h1>
        <h3 class="text-secondary text-capitalize">
          Lists All Registered Universities
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
              @option:selected="filterUni"
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
        <Lazy-DashUniversityTable
          v-else
          :universities.sync="university.results"
          @deletedUni="deletedUni"
        />

        <Lazy-UtilsPagination
          class="mt-4"
          v-if="!loading && university.pagination.items != 0"
          :pagination.sync="university.pagination"
          @prevPage="onPaginated"
          @nextPage="onPaginated"
        />

        <div class="d-flex justify-content-end mt-3">
          <Lazy-LoadersButton v-if="loading" :rounded="true" />
          <Lazy-UtilsLinkButton
            v-else
            :rounded="true"
            :link="'/dash/university/add'"
            >Add new university</Lazy-UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashUniversityIndex',
  layout: 'dash',

  watch: {
    '$route.query'() {
      this.payloadWatch()
      this.refreshUni()
    },
  },

  data() {
    return {
      districtsList: [],
      selectedDistrict: 'All',
      payload: {},
      error: true,
      university: {},
      loading: true,
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
        name: 'University',
        url: '/dash/university',
      },
    ])
  },

  methods: {
    // on filter
    filterUni() {
      this.payload = {}

      this.payload.district = this.selectedDistrict

      this.$router.push({
        path: this.$route.path,
      })

      this.refreshUni()
    },

    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = await '1'
      }
    },

    getUniversity() {
      this.loading = true

      if (this.payload.district) {
        if (this.payload.district == 'All') {
          this.payload.district = ''
        }
      }

      return this.$api.university
        .list(this.payload)
        .then((resp) => {
          this.university = resp.data

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.university = []

            this.$nuxt.error({ statusCode: 404, message: 'Page not Found' })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    // when University is deleted
    deletedUni() {
      if (this.university.results.length == 1) {
        if (this.payload.page && this.payload.page != 1) {
          this.onPaginated(this.payload.page - 1)
        } else {
          this.onPaginated(1)
        }
      }

      this.refreshUni()
    },

    // refresh University
    refreshUni() {
      this.getUniversity().then(() => {
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

    // env variables can only i read after mounted
    async setDefaults() {
      // this.defaultProfileImage = this.$config.defaultUserImage
      this.payload.page = await this.$route.query.page
    },
  },

  mounted() {
    this.payload.page = this.$route.query.page
    this.districtsList = ['All', ...this.districts]

    this.getUniversity().then(() => {
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
