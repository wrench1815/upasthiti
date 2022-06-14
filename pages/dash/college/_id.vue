<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>Edit College</h2>
        <p>
          Editing User:
          <span class="text-info fw-bold">dummy data</span>
        </p>
      </div>
      <div class="card-body">
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <!-- start:User Edit Form -->
          <form @submit.prevent="handleSubmit(addUser)">
            <!-- start:Institute name-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_name"
                  >Institute name</label
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
                      id="institute_name"
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
            <!-- end:Institute name -->

            <!-- start:Institute Alias name -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_alias_name"
                  >Institute Alias</label
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
                      id="institute_alias_name"
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
            <!-- end:Institute Alias name -->

            <!-- start:Address-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_address"
                  >Address</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true, email: true }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="institute_address"
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
            <!-- end:Address-->

            <!-- start:Principal -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_principal"
                  >Principal</label
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
            <!-- end:Principal-->

            <!-- start:Logo-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_logo">Logo</label>
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
                      type="text"
                      id="institute_logo"
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
                <!-- start:Show password-->
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
            <!-- end:Logo-->

            <!-- start:Website-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_website"
                  >Website</label
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
                      id="institute_website"
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
            <!-- end:website -->

            <!-- start:Mobile-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_mobile">Mobile</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true, min: 3, alpha: true }"
                >
                  <div class="form-outline">
                    <input
                      type="number"
                      id="institute_mobile"
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
            <!-- end:Mobile -->

            <!-- start:Email-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_email">Email</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true, min: 3, alpha: true }"
                >
                  <div class="form-outline">
                    <input
                      type="email"
                      id="institute_email"
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
            <!-- end:Email-->

            <!-- Submit button -->
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-info btn-rounded mb-4">
                Add College
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
  name: 'DashCollegeDetail',
  layout: 'dash',

  data() {
    return {
      loading: false,
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
        name: 'College',
        url: '/dash/College',
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
    // this.fetchUser()
    //   .then(() => {
    //     this.loading = false
    //   })
    //   .finally(() => {
    //     document.querySelectorAll('.form-outline').forEach((formOutline) => {
    //       new this.$mdb.Input(formOutline).init()
    //     })
    //   })

    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style scoped></style>
