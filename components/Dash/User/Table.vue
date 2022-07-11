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
        <template v-else>
          <tr v-for="user in users" :key="user.id">
            <!-- start:name -->
            <td>
              <div class="d-flex align-items-center">
                <div class="avatar rounded-circle">
                  <!-- profile image -->
                  <img
                    :data-src="
                      user.profile_image
                        ? user.profile_image
                        : defaultProfileImage
                    "
                    class="avatar rounded-circle shadow-2-strong obj-fit-cover obj-pos-center"
                    v-lazy-load
                  />
                </div>
                <!-- full name -->
                <div class="ms-3">
                  <NuxtLink
                    :to="`/dash/user/detail?id=${user.id}`"
                    class="fw-bolder mb-1 text-primary"
                  >
                    <span class="hover-underline-animation">{{
                      user.full_name ? user.full_name : '----'
                    }}</span>
                    <i class="ri-link"></i>
                  </NuxtLink>
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
              <div class="d-flex gap-2 mb-0 badge-fs">
                <!-- if Admin -->
                <div
                  class="d-flex justify-content-center align-items-center"
                  v-if="roleAdmin(user)"
                >
                  <div
                    class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill"
                  >
                    <i class="ri-shield-user-fill"></i>
                    <div class="">Admin</div>
                  </div>
                </div>

                <!-- if Principal -->
                <div
                  class="d-flex justify-content-center align-items-center"
                  v-if="rolePrincipal(user)"
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
                  v-if="roleHod(user)"
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
                  v-if="roleTeacher(user)"
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
                  v-if="roleNone(user)"
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
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              >
                <!-- detail -->
                <NuxtLink
                  :to="`/dash/user/detail?id=${user.id}`"
                  class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-eye-fill ri-lg"></i
                ></NuxtLink>
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
        </template>
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

    defaultProfileImage: {
      type: String,
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

    // checks if user is Admin
    roleAdmin(user) {
      return user.is_admin
    },

    // checks if user is Principal
    rolePrincipal(user) {
      return user.is_principal
    },

    // checks if user is HOD
    roleHod(user) {
      return user.is_hod
    },

    // checks if user is Teacher
    roleTeacher(user) {
      return user.is_teacher
    },

    // checks if user has no role
    roleNone(user) {
      return (
        !user.is_admin && !user.is_principal && !user.is_hod && !user.is_teacher
      )
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
