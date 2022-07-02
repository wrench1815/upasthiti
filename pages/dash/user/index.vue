<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Users</h1>
        <h3 class="text-secondary text-capitalize">lists all Registerd User</h3>
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
        <Lazy-DashUserTable
          v-else
          :users.sync="users"
          :defaultProfileImage="defaultProfileImage"
        />

        <div class="d-flex justify-content-end mt-3">
          <Lazy-LoadersButton v-if="loading" :rounded="true" />
          <Lazy-UtilsLinkButton
            v-if="!loading"
            :rounded="true"
            :link="'/dash/user/add'"
            >Add new User</Lazy-UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserIndex',
  layout: 'dash',

  data() {
    return {
      users: [],
      defaultProfileImage: '',
      loading: true,
      error: true,
      userFilters: ['All', 'Admin', 'Principal', 'HOD', 'Teacher'],
      selectedUserFilter: 'All',
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'User',
        url: '/dash/user',
      },
    ])
  },

  methods: {
    // fetches list of users from API
    // fetches all users initially
    // if filter is selected, fetches list of user per filter
    // has ability to refetch in case of error or gives option to go to Dash home
    async getUsers() {
      this.loading = true
      let requestUrl

      // set user to fetch as per filter
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
        .then((response) => {
          this.users = response.data
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
          }).then((result) => {
            if (result.isConfirmed) {
              this.getUsers()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        })
    },

    // refreshes list of users in case error
    refreshUsers() {
      this.loading = true
      this.getUsers().then(() => (this.loading = false))
    },

    // set default profile image on mounted
    // env variables can only i read after mounted
    async setdefaultProfileImage() {
      return new Promise((resolve, reject) => {
        this.defaultProfileImage = this.$config.defaultUserImage
        resolve()
      })
    },
  },

  mounted() {
    this.setdefaultProfileImage().then(() => {
      this.getUsers().then(() => {
        if (!this.error) {
          this.loading = false
        }
      })
    })
  },
}
</script>

<style scoped></style>
