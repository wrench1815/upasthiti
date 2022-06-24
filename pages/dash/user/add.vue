<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h2>Add User</h2>
        <p>Add a New User</p>
      </div>
      <div class="card-body">
        <Lazy-LoadersForm
          :inputCount="6"
          :btnEnd="true"
          :btnColor="'info'"
          v-if="loading"
        />

        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- start:User Edit Form -->
          <form @submit.prevent="handleSubmit(addUser)">
            <!-- start:First Name -->
            <Lazy-DashInput
              :label="'First Name'"
              :validationRules="{ required: true, min: 3, alpha: true }"
              :data.sync="user.first_name"
              :type="'text'"
            />
            <!-- end:First Name -->

            <!-- start:Last Name -->
            <Lazy-DashInput
              :label="'Last Name'"
              :validationRules="{ required: true, min: 3, alpha: true }"
              :data.sync="user.last_name"
              :type="'text'"
            />
            <!-- end:Last Name -->

            <!-- start:Email -->
            <Lazy-DashInput
              :label="'Email'"
              :validationRules="{ required: true, email: true }"
              :data.sync="user.email"
              :type="'text'"
            />
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
                    class="text-danger transition-all-ease-out-sine"
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
                <label class="form-label" for="password">Password</label>
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
                    class="text-danger transition-all-ease-out-sine"
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
                  <label class="form-check-label" for="showPassword"
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

    async unsetLoading() {
      this.loading = await false
    },
  },

  mounted() {
    this.unsetLoading().then(() => {
      document.querySelectorAll('.form-outline').forEach((formOutline) => {
        new this.$mdb.Input(formOutline).init()
      })
    })
  },
}
</script>

<style></style>
