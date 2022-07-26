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
        <Lazy-LoadersTable v-if="loading" />
        <Lazy-DashUniversityTable
          v-else
          :universities.sync="university.results"
          @deletedUni="refreshUni"
        />

        <Lazy-UtilsPagination
          class="mt-4"
          v-if="!loading"
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
      payload: {},
      error: true,
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
    ])
  },

  methods: {
    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = await '1'
      }
    },

    async getUniversity() {
      this.loading = await true

      await this.$api.university
        .list(this.payload)
        .then((resp) => {
          this.university = resp.data
          this.error = false
        })
        .catch((err) => {
          if (errr.response.status == 404) {
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

    async refreshUni() {
      await this.getUniversity().then(() => {
        this.loading = false
      })
    },

    // on paginated
    async onPaginated(pageNum) {
      this.payload.page = await pageNum

      await this.$router.push({
        path: this.$route.path,
        query: {
          page: pageNum,
        },
      })
    },
  },

  mounted() {
    this.getUniversity().then(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
