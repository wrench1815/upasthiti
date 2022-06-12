<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>Admins</h2>
        <p>lists all Admins of Upasthiti</p>
      </div>
      <div class="card-body">
        <Lazy-LoadersTable v-if="loading" />
        <Lazy-DashUserTable v-if="!loading" :users="users" />

        <div class="d-flex justify-content-end">
          <Lazy-LoadersButton v-if="loading" :rounded="true" />
          <Lazy-UtilsLinkButton
            v-if="!loading"
            :rounded="true"
            :link="'/dash/user/add'"
            >Add new Admin</Lazy-UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashAdminIndex',
  layout: 'dash',

  data() {
    return {
      users: [],
      loading: true,
      error: true,
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Admin',
        url: '/dash/admin',
      },
    ])
  },

  methods: {
    async getUsers() {
      this.loading = true
      const response = await this.$api.user
        .listAdmin()
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

<style></style>
