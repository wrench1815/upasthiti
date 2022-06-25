<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Add User</h1>
        <h3 class="text-secondary text-capitalize">Add a New User</h3>
      </div>
      <div class="card-body">
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <!-- start:User Edit Form -->
          <form>
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form6Example1">
                    <i class="ri-user-fill"></i> First name</label
                  >
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form6Example2"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form6Example2">
                    <i class="ri-user-fill"></i> Last name</label
                  >
                </div>
              </div>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form6Example5"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form6Example5">
                <i class="ri-mail-fill"></i>
                Email</label
              >
            </div>

            <!-- Gender -->
            <div class="form-outline mb-4">
              <v-select
                placeholder="Select Gender"
                :options="genderList"
                v-model="user.gender"
              ></v-select>
            </div>

            <!-- Password-->

            <div class="form-outline mb-4">
              <input
                type="password"
                id="form6Example5"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form6Example5">
                <i class="ri-lock-2-fill"></i> Password</label
              >
            </div>
            <!-- end password -->

            <!-- Checkbox -->
            <div class="row form-check d-flex justify-content-center my-4 pb-4">
              <div class="col-6 col-lg-3 col-md-3">
                <label class="form-check-label" for="form6Example8">
                  <!-- <i class="ri-shield-user-fill text-gradient text-danger d-inline-block"></i> -->
                  Admin
                </label>
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form6Example8"
                />
              </div>
              <div class="col-6 col-lg-3 col-md-3">
                <label class="form-check-label" for="form6Example8">
                  Principal
                </label>
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form6Example8"
                />
              </div>
              <div class="col-6 col-lg-3 col-md-3">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form6Example8"
                />
                <label class="form-check-label" for="form6Example8">
                  HOD
                </label>
              </div>
              <div class="col-6 col-lg-3 col-md-3">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form6Example8"
                />
                <label class="form-check-label" for="form6Example8">
                  Teacher
                </label>
              </div>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              class="btn bg-gradient-primary d-grid gap-2 col-6 mx-auto text-white btn-rounded my-4"
            >
              Add User
            </button>
          </form>
          <!-- End:User Edit Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserAdd',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      genderList: ['Male', 'Female', 'Rather not Say'],
      showPassword: false,
      user: {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        is_admin: false,
        is_principal: false,
        is_hod: false,
        is_teacher: false,
        password: '',
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
        name: 'Add',
      },
    ])
  },

  methods: {
    async addUser() {
      try {
        const user = {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          gender: this.user.gender,
          password: this.user.password,
          confirm_password: this.user.password,
          is_active: this.user.is_active,
          is_admin: this.user.is_admin,
          is_principal: this.user.is_principal,
          is_hod: this.user.is_hod,
          is_teacher: this.user.is_teacher,
        }

        this.$swal({
          title: 'Adding User',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Adding a New User',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.user
              .create(user)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'User has been added Successfully',
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
                  html: `Failed to Add User.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Add User.<br/>Try Again`,
        })
      }
    },
  },

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style scoped>
.required::after {
  content: '*';
  color: var(--mdb-danger);
  font-size: 1.2rem;
}
</style>
