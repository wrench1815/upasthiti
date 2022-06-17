<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h2>Colleges</h2>
        <p>lists all Registered Colleges</p>
      </div>
      <div class="card-body">
        <!-- <section class="d-flex justify-content-end">
          <div class="w-10-rem mb-3">
            <v-select
              placeholder="Select Filter"
              :options="userFilters"
              v-model="selectedUserFilter"
              :clearable="false"
              @option:selected="refreshUsers"
            >
            </v-select>
          </div>
        </section> -->
        <Lazy-LoadersTable v-if="loading" />
        <Lazy-DashCollegeTable v-if="!loading" :colleges="colleges" />

        <div class="d-flex justify-content-end">
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
export default {
  name: 'DashCollegeIndex',
  layout: 'dash',

  data() {
    return {
      colleges: [],
      loading: true,
      error: true,
      userFilters: ['All', 'Admin', 'Principal', 'HOD', 'Teacher'],
      selectedUserFilter: 'All',
    }
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
    async getColleges() {
      this.loading = true

      const response = this.$api.college
        .list()
        .then((response) => {
          this.colleges = response.data
          this.error = false
        })
        .catch((error) => {
          this.$swal({
            title: 'Error',
            icon: 'error',
            type: 'error',
            html: `${
              error.response.data.detail
                ? error.response.data.detail
                : 'Something went wrong'
            }`,
            confirmButtonText: 'Refresh',
            showCancelButton: true,
            cancelButtonText: 'To Dash Home',
            confirmButtonClass: 'btn btn-info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.getColleges()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        })
    },

    dateFormat(date) {
      // return strf date
      return this.$moment(date).format('Do MMMM YYYY, h:mm:ss a')
    },
  },

  mounted() {
    this.getColleges().finally(() => {
      this.loading = false
    })
  },
}
</script>

<style scoped></style>
