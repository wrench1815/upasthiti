<template>
  <div class="table-responsive">
    <table class="table table-hover table-bordered align-middle">
      <!-- start:Header -->
      <thead class="align-middle">
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Date Added</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <!-- end:Header -->
      <tbody>
        <tr v-if="users.length == 0">
          <td colspan="5" class="">
            <h4 class="text-center">Nothing to see here</h4>
          </td>
        </tr>
        <tr v-for="user in users" v-else>
          <td>{{ user.first_name ? user.first_name : '----' }}</td>
          <td>{{ user.last_name ? user.last_name : '----' }}</td>
          <td>{{ user.email ? user.email : '----' }}</td>
          <td>
            {{
              user.date_added
                ? $nuxt.$utils.dateFormat(user.date_added)
                : '----'
            }}
          </td>
          <td>
            <div class="d-flex justify-content-center align-items-center gap-2">
              <NuxtLink
                :to="`/dash/user/${user.id}`"
                class="btn btn-floating btn-info btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-edit-2-fill ri-lg"></i
              ></NuxtLink>
              <a
                @click="deleteUser(user.id)"
                class="btn btn-floating btn-danger btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-delete-bin-fill ri-lg"></i
              ></a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashUserTable',

  props: {
    // takes a list of users
    users: {
      type: Array,
      required: true,
    },
  },

  methods: {
    // deletes the User of the Id
    deleteUser(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this user!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the user',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()

              this.$api.user.destroy(id).then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Deleted!',
                  text: 'User has been deleted.',
                  icon: 'success',
                  type: 'success',
                })
                  .then(() => {
                    let usersList = this.users.filter((user) => user.id !== id)
                    this.$emit('update:users', usersList)
                  })
                  .catch((err) => {
                    this.$swal.close()

                    this.$swal({
                      title: 'Error',
                      text: err.response.data.detail,
                      icon: 'error',
                      type: 'error',
                    })
                  })
              })
            },
          })
        }
      })
    },
  },
}
</script>

<style></style>
