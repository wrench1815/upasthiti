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
          <form @submit.prevent="handleSubmit(addUser)">
            <!-- start:First Name -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label text-dark required" for="first_name">
                  <!-- <i class="ri-user-fill"></i>  -->
                  First name
                  <!-- <i class="ri-asterisk text-danger"></i> -->
                </label>
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
                <label class="form-label text-dark required" for="last_name">
                  <!-- <i class="ri-user-fill"></i> -->
                  Last name</label
                >
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
                <label class="form-label text-dark required" for="email">
                  <!-- <i class="ri-mail-fill"></i> -->
                  Email</label
                >
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
                <label class="form-label text-dark required" for="gender">
                  <!-- <i class="ri-women-fill"></i> -->
                  Gender</label
                >
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

            <!-- start:Password -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label text-dark required" for="password">
                  <!-- <i class="ri-lock-2-fill"></i> -->
                  Password</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{
                    required: true,
                    min: 6,
                    max: 16,
                    passwordNumber: true,
                    passwordUpper: true,
                    passwordLower: true,
                    passwordSpecial: true,
                  }"
                >
                  <div class="form-outline">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      id="password"
                      name="password"
                      class="form-control"
                      v-model="user.password"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-2': !errors[0], 'mb-1': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
                <!-- start:Show Password -->
                <div class="form-check mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="showPassword"
                    v-model="showPassword"
                  />
                  <label class="form-check-label text-dark" for="showPassword"
                    >Show Password</label
                  >
                </div>
                <!-- start:Show Password -->
              </div>
            </div>
            <!-- end:Password -->

            <!-- start:Is Admin -->
            <div class="row mb-4">
              <div class="col-12 col-md-4">
                <label class="form-label text-dark" for="is_admin">
                  <i
                    class="ri-shield-user-fill text-gradient text-danger d-inline-block"
                  ></i>
                  Admin
                </label>
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
                <label class="form-label text-dark" for="is_principal">
                  <i
                    class="ri-admin-fill text-gradient text-info d-inline-block"
                  ></i>
                  Principal
                </label>
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
                <label class="form-label text-dark" for="is_hod">
                  <i
                    class="ri-user-star-fill text-gradient text-primary d-inline-block"
                  ></i>
                  HOD
                </label>
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
                <label class="form-label text-dark" for="is_teacher">
                  <i
                    class="ri-user-2-fill text-gradient text-warning d-inline-block"
                  ></i>
                  Teacher
                </label>
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
              <button
                type="submit"
                class="btn bg-gradient-info text-white btn-rounded mb-4"
              >
                Add User
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
