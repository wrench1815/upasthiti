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

        <div class="d-flex justify-content-end mt-3">
          <Lazy-LoadersButton v-if="loading" :rounded="true" />
          <Lazy-UtilsLinkButton
            v-else
            :rounded="true"
            :link="'/dash/college/add'"
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
    ])
  },

  methods: {
    async getUniversity() {
      this.loading = await true

      await this.$api.university.list().then((resp) => {
        this.university = resp.data
      })
    },

    async refreshUni() {
      this.getUniversity().then(() => {
        this.loading = false
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
