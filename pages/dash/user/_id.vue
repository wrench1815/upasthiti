<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>User Details</h2>
        <p>Details of User Id: {{ user.id }}</p>
      </div>
      <div class="card-body">
        <form @submit.prevent="updateUser">
          <!-- start:First Name -->
          <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="firstName">First name</label>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  id="firstName"
                  class="form-control"
                  v-model="user.firstName"
                />
              </div>
            </div>
          </div>
          <!-- end:First Name -->

          <!-- start:Last Name -->
          <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="lastName">Last name</label>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  id="lastName"
                  class="form-control"
                  v-model="user.lastName"
                />
              </div>
            </div>
          </div>
          <!-- end:Last Name -->

          <!-- start:Email -->
          <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="email">Email</label>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  v-model="user.email"
                />
              </div>
            </div>
          </div>
          <!-- end:Email -->

          <!-- start:Gender -->
          <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="gender">Gender</label>
            </div>
            <div class="col">
              <v-select
                placeholder="Select Gender"
                :options="genderList"
                v-model="user.gender"
              ></v-select>
            </div>
          </div>
          <!-- end:Gender -->

          <!-- start:Password -->
          <!-- <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="password">Password</label>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  class="form-control"
                  v-model="user.password"
                />
              </div>
            </div>
          </div> -->
          <!-- end:Password -->

          <!-- start:Confirm Password -->
          <!-- <div class="row mb-4"> -->
          <!-- <div class="col-12 col-md-4">
              <label class="form-label" for="confirmPassword"
                >Confirm Password</label
              >
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="confirmPassword"
                  class="form-control"
                  v-model="user.confirmPassword"
                />
              </div> -->
          <!-- start:Show Password -->
          <!-- <div class="form-check my-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="showPassword"
                  v-model="showPassword"
                />
                <label class="form-check-label" for="showPassword"
                  >Show Password</label
                >
              </div> -->
          <!-- start:Show Password -->
          <!-- </div> -->
          <!-- </div> -->
          <!-- end:Confirm Password -->

          <!-- start:Is Admin -->
          <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="isAdmin">Is Admin</label>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="isAdmin"
                  v-model="user.isAdmin"
                />
              </div>
            </div>
          </div>
          <!-- end:Is Admin -->

          <!-- start:Is Principal -->
          <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="isPrincipal">Is Principal</label>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="isPrincipal"
                  v-model="user.isPrincipal"
                />
              </div>
            </div>
          </div>
          <!-- end:Is Principal -->

          <!-- start:Is HOD -->
          <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="isHOD">Is HOD</label>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="isHOD"
                  v-model="user.isHOD"
                />
              </div>
            </div>
          </div>
          <!-- end:Is HOD -->

          <!-- start:Is Teacher -->
          <div class="row mb-4">
            <div class="col-12 col-md-4">
              <label class="form-label" for="isTeacher">Is Teacher</label>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="isTeacher"
                  v-model="user.isTeacher"
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
      genderList: ['Male', 'Female', 'Rather not Say'],
      showPassword: false,
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        date_added: '',
        isActive: '',
        isAdmin: '',
        isPrincipal: '',
        isHOD: '',
        isTeacher: '',
      },
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'User',
        url: '/user',
      },
      {
        name: 'Detail',
      },
    ])
  },

  methods: {
    async fetchUser() {
      const response = await this.$api.user.retrieve(this.$route.params.id)
      this.user.id = response.data.id
      this.user.firstName = response.data.first_name
      this.user.lastName = response.data.last_name
      this.user.email = response.data.email
      this.user.gender = response.data.gender
      this.user.date_added = this.$moment(this.date_added).format(
        'Do MMMM YYYY, h:mm:ss a'
      )
      this.user.isActive = response.data.is_active
      this.user.isAdmin = response.data.is_admin
      this.user.isPrincipal = response.data.is_principal
      this.user.isHOD = response.data.is_hod
      this.user.isTeacher = response.data.is_teacher

      console.log(response.data)
      console.log(this.user)
    },

    async updateUser() {
      const user = {
        first_name: this.user.firstName,
        last_name: this.user.lastName,
        email: this.user.email,
        gender: this.user.gender,
        is_active: this.user.isActive,
        is_admin: this.user.isAdmin,
        is_principal: this.user.isPrincipal,
        is_hod: this.user.isHOD,
        is_teacher: this.user.isTeacher,
      }

      const response = await this.$api.user.update(this.$route.params.id, user)
      console.log(response)
    },
  },

  mounted() {
    this.fetchUser()

    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style scoped></style>
