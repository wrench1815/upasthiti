<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>User Edit</h2>
        <p>
          Editing User:
          <span class="text-info fw-bold"
            >{{ user.first_name }} {{ user.last_name }}</span
          >
        </p>
      </div>
      <div class="card-body">
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <!-- start:User Edit Form -->
          <form @submit.prevent="handleSubmit(updateUser)">
            <!-- start:First Name -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="first_name">First name</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true, min: 3, alpha: true }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="first_name"
                      class="form-control"
                      v-model="user.first_name"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:First Name -->

            <!-- start:Last Name -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="last_name">Last name</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true, min: 3, alpha: true }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="last_name"
                      class="form-control"
                      v-model="user.last_name"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Last Name -->

            <!-- start:Email -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="email">Email</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true, email: true }"
                >
                  <div class="form-outline">
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      v-model="user.email"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Email -->

            <!-- start:Gender -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="gender">Gender</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    placeholder="Select Gender"
                    :options="genderList"
                    v-model="user.gender"
                  ></v-select>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Gender -->

            <!-- start:Is Admin -->
            <div class="row mb-4">
              <div class="col-12 col-md-4">
                <label class="form-label" for="is_admin">Is Admin</label>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_admin"
                    v-model="user.is_admin"
                  />
                </div>
              </div>
            </div>
            <!-- end:Is Admin -->

            <!-- start:Is Principal -->
            <div class="row mb-4">
              <div class="col-12 col-md-4">
                <label class="form-label" for="is_principal"
                  >Is Principal</label
                >
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_principal"
                    v-model="user.is_principal"
                  />
                </div>
              </div>
            </div>
            <!-- end:Is Principal -->

            <!-- start:Is HOD -->
            <div class="row mb-4">
              <div class="col-12 col-md-4">
                <label class="form-label" for="is_hod">Is HOD</label>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_hod"
                    v-model="user.is_hod"
                  />
                </div>
              </div>
            </div>
            <!-- end:Is HOD -->

            <!-- start:Is Teacher -->
            <div class="row mb-4">
              <div class="col-12 col-md-4">
                <label class="form-label" for="is_teacher">Is Teacher</label>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_teacher"
                    v-model="user.is_teacher"
                  />
                </div>
              </div>
            </div>
            <!-- end:Is Teacher -->

            <!-- Submit button -->
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-info btn-rounded mb-4">
                Update User
              </button>
            </div>
          </form>
          <!-- End:User Edit Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserDetail',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      genderList: ['Male', 'Female', 'Rather not Say'],
      user: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        date_added: '',
        is_active: '',
        is_admin: '',
        is_principal: '',
        is_hod: '',
        is_teacher: '',
      },
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'User',
        url: '/dash/user',
      },
      {
        name: 'Detail',
      },
    ])
  },

  methods: {
    async fetchUser() {
      this.loading = true

      const response = await this.$api.user
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.user.id = response.data.id
          this.user.first_name = response.data.first_name
          this.user.last_name = response.data.last_name
          this.user.email = response.data.email
          this.user.gender = response.data.gender
          this.user.date_added = this.$moment(this.date_added).format(
            'Do MMMM YYYY, h:mm:ss a'
          )
          this.user.is_active = response.data.is_active
          this.user.is_admin = response.data.is_admin
          this.user.is_principal = response.data.is_principal
          this.user.is_hod = response.data.is_hod
          this.user.is_teacher = response.data.is_teacher

          this.error = false
        })
        .catch((error) =>
          this.$swal({
            title: 'Error',
            icon: 'error',
            type: 'error',
            text: `${
              response.data.detail
                ? error.response.data.detail
                : 'An error has occured'
            }`,
            confirmButtonText: 'Refresh',
            showCancelButton: true,
            cancelButtonText: 'To Dash Home',
            confirmButtonClass: 'btn btn-info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.fetchUser()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        )
    },

    async updateUser() {
      try {
        const user = {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          gender: this.user.gender,
          is_active: this.user.is_active,
          is_admin: this.user.is_admin,
          is_principal: this.user.is_principal,
          is_hod: this.user.is_hod,
          is_teacher: this.user.is_teacher,
        }

        this.$swal({
          title: 'Updating User',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are updating the User',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.user
              .update(this.$route.params.id, user)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Update Successful',
                  icon: 'success',
                  type: 'success',
                  text: 'User has been updated Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/user'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Update User.`,
                })
              })
          },
        })
      } catch (error) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to update User.<br/>Try Again`,
        })
      }
    },
  },

  mounted() {
    this.fetchUser()
      .then(() => {
        this.loading = false
      })
      .finally(() => {
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
          new this.$mdb.Input(formOutline).init()
        })
      })
  },
}
</script>

<style scoped></style>
