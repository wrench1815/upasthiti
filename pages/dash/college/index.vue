<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>Colleges</h2>
        <p>lists all Registered Colleges</p>
      </div>
      <div class="card-body">
        <section class="d-flex justify-content-end">
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
        </section>
        <Lazy-LoadersTable v-if="loading" />
        <Lazy-DashUserTable v-if="!loading" :users="users" />

        <div class="d-flex justify-content-end">
          <Lazy-LoadersButton v-if="loading" :rounded="true" />
          <Lazy-UtilsLinkButton
            v-if="!loading"
            :rounded="true"
            :link="'/dash/user/add'"
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
      users: [],
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
    async getUsers() {
      this.loading = true
      let requestUrl

      if (this.selectedUserFilter === 'All') {
        requestUrl = this.$api.user.list()
      } else if (this.selectedUserFilter === 'Admin') {
        requestUrl = this.$api.user.listAdmin()
      } else if (this.selectedUserFilter === 'Principal') {
        requestUrl = this.$api.user.listPrincipal()
      } else if (this.selectedUserFilter === 'HOD') {
        requestUrl = this.$api.user.listHod()
      } else if (this.selectedUserFilter === 'Teacher') {
        requestUrl = this.$api.user.listTeacher()
      }

      const response = await requestUrl
        .then(
          (response) => ((this.users = response.data), (this.error = false))
        )
        .catch((error) => {
          console.log(error)
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
              this.getUsers()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        })
    },

    refreshUsers() {
      this.loading = true
      this.getUsers().then(() => (this.loading = false))
    },

    dateFormat(date) {
      // return strf date
      return this.$moment(date).format('Do MMMM YYYY, h:mm:ss a')
    },
  },

  mounted() {
    this.getUsers().finally(() => {
      if (!this.error) {
        this.loading = false
      }
    })
  },
}
</script>

<style scoped></style>
