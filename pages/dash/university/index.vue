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
        <!-- <Lazy-LoadersTable v-if="loading" />
        <Lazy-DashUserTable
          v-else
          :users.sync="users.results"
          :defaultProfileImage="defaultProfileImage"
        /> -->
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
      payload: {},
      users: [],
      defaultProfileImage: '',
      loading: false,
      error: true,
      // userFilters: ['All', 'Admin', 'Principal', 'HOD', 'Teacher'],
      // selectedUserFilter: 'All',
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



  //  mounted() {
  //     this.setDefaults().then(() => {
  //       this.getUsers().then(() => {
  //         if (!this.error) {
  //           this.loading = false
  //         }
  //       })
  //     })
  //   },
}
</script>

<style></style>
