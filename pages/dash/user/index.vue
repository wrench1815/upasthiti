<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>Users</h2>
        <p>lists all Registerd User</p>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-bordered align-middle">
            <thead class="align-middle">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Date Added</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users">
                <td>{{ user.first_name ? user.first_name : '----' }}</td>
                <td>{{ user.last_name ? user.last_name : '----' }}</td>
                <td>{{ user.email ? user.email : '----' }}</td>
                <td>
                  {{ user.date_added ? dateFormat(user.date_added) : '----' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  layout: 'dash',

  data() {
    return {
      users: [],
      loading: true,
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'User',
        url: '/user',
      },
    ])
  },

  methods: {
    async getUsers() {
      const response = await this.$api.user.list()
      this.users = response.data
      console.log(response.data)
    },

    dateFormat(date) {
      // return strf date
      return this.$moment(date).format('Do MMMM YYYY, h:mm:ss a')
    },
  },

  mounted() {
    this.getUsers().finally(() => {
      this.loading = false
    })
  },
}
</script>

<style scoped></style>
