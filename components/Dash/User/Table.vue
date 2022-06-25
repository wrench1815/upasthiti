<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <!-- start:Header -->
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Name</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Email
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Role</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Date Added
          </th>
          <th scope="col" class="fw-bolder text-uppercase">Actions</th>
        </tr>
      </thead>
      <!-- end:Header -->
      <tbody>
        <!-- start:no users -->
        <tr v-if="users.length == 0">
          <td colspan="6" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Users found" />
          </td>
        </tr>
        <!-- end:no users -->

        <!-- start:has users -->
        <tr v-for="user in users" v-else>
          <!-- start:name -->
          <td>
            <div class="d-flex align-items-center">
              <!-- profile image -->
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style="width: 45px; height: 45px"
                class="rounded-circle"
              />
              <!-- full name -->
              <div class="ms-3">
                <p class="fw-bolder mb-1 text-primary">
                  {{ user.first_name ? user.first_name : '----' }}
                  {{ user.last_name ? user.last_name : '----' }}
                </p>
              </div>
            </div>
          </td>
          <!-- end:name -->

          <!-- start:email -->
          <td>
            <div class="text-dark mb-0">
              {{ user.email ? user.email : '----' }}
            </div>
          </td>
          <!-- end:email -->

          <!-- start:Roles -->
          <td>
            <div class="text-dark mb-0 badge-fs">
              <!-- if Admin -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-if="userRole(user) === 'Admin'"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill flex-wrap"
                >
                  <i class="ri-shield-user-fill"></i>
                  <div class="">Admin</div>
                </div>
              </div>

              <!-- if Principal -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-else-if="userRole(user) === 'Principal'"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-info badge-fs shadow-3-strong py-2 rounded-pill"
                >
                  <i class="ri-admin-fill"></i>
                  <div class="">Principal</div>
                </div>
              </div>

              <!-- if HOD -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-else-if="userRole(user) === 'HOD'"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-primary badge-fs shadow-3-strong py-2 rounded-pill"
                >
                  <i class="ri-user-star-fill"></i>
                  <div class="">HOD</div>
                </div>
              </div>

              <!-- if Teacher -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-else-if="userRole(user) === 'Teacher'"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-warning badge-fs shadow-3-strong py-2 rounded-pill"
                >
                  <i class="ri-user-2-fill"></i>
                  <div class="">Teacher</div>
                </div>
              </div>

              <!-- fallback -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-else
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-success badge-fs shadow-3-strong py-2 rounded-pill"
                >
                  <div class="">----</div>
                </div>
              </div>
            </div>
          </td>
          <!-- end:Roles -->

          <!-- start:Date Added -->
          <td>
            <p class="text-dark mb-0">
              {{
                user.date_added
                  ? $nuxt.$utils.dateFormat(user.date_added)
                  : '----'
              }}
            </p>
          </td>

          <!-- start:Actions-->
          <td>
            <div class="d-flex justify-content-center align-items-center gap-2">
              <!-- edit -->
              <NuxtLink
                :to="`/dash/user/${user.id}`"
                class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-edit-2-fill ri-lg"></i
              ></NuxtLink>
              <!-- destroy -->
              <a
                @click="deleteUser(user.id)"
                class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-delete-bin-fill ri-lg"></i
              ></a>
            </div>
          </td>
          <!-- end:Actions-->
        </tr>
        <!-- end:has users -->
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

    // return User Role name
    userRole(user) {
      // return Admin if is_admin is true, return teacher if is_teacher is true, return Hod if is_hod is true, return Principal if is_principal is true
      if (user.is_admin) {
        return 'Admin'
      } else if (user.is_teacher) {
        return 'Teacher'
      } else if (user.is_hod) {
        return 'HOD'
      } else if (user.is_principal) {
        return 'Principal'
      } else {
        return '----'
      }
    },
  },
}
</script>

<style scoped>
.badge-fs {
  font-size: 0.9rem !important;
}

table th:first-child {
  border-radius: 10px 0 0 10px !important;
}

table th:last-child {
  border-radius: 0 10px 10px 0 !important;
}
</style>
