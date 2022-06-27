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
            <div class="row mb-4">
              <div class="col-12">
                <label class="form-label">
                  <div class="d-flex justify-content-center gap-1">
                    <i
                      class="ri-image-fill text-primary text-gradient d-block-inline"
                    ></i>
                    <span> Profile Image </span>
                  </div>
                </label>
              </div>
              <div class="col-12">
                <div
                  class="profile-img-input bg-secondar position-relative rounded-5 shadow-3 borde border-primar border- user-bg"
                  style="width: 125px; height: 125px"
                >
                  <span
                    class="position-absolute top-0 start-100 translate-middle bg-white border border-dange avatar avatar-s rounded-circle shadow-1-strong"
                    style="width: 22px; height: 22px"
                    data-mdb-toggle="tooltip"
                    data-mdb-placement="bottom"
                    title="Remove Image"
                  >
                    <i class="ri-close-line text-danger"></i>
                  </span>
                  <label
                    class="position-absolute top-100 start-100 translate-middle bg-white border border-dange avatar avatar-s rounded-circle shadow-1-strong"
                    style="width: 22px; height: 22px"
                    for="profileImage"
                    data-mdb-toggle="tooltip"
                    data-mdb-placement="bottom"
                    title="Select Image"
                  >
                    <i class="ri-pencil-fill text-primary"></i>
                  </label>
                </div>
                <input
                  type="file"
                  class="form-control d-none"
                  id="profileImage"
                />
              </div>
            </div>
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    class="form-control form-control-"
                  />
                  <label class="form-label" for="form6Example1">
                    <div class="d-flex justify-content-center gap-1">
                      <i
                        class="ri-user-fill text-primary text-gradient d-block-inline"
                      ></i>
                      <span> First name </span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form6Example2"
                    class="form-control form-control-"
                  />
                  <label class="form-label" for="form6Example2">
                    <div class="d-flex justify-content-center gap-1">
                      <i
                        class="ri-user-fill text-primary text-gradient d-block-inline"
                      ></i>
                      <span> Last name </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form6Example5"
                class="form-control form-control-"
              />
              <label class="form-label" for="form6Example5">
                <div class="d-flex justify-content-center gap-1">
                  <i
                    class="ri-mail-fill text-primary text-gradient d-block-inline"
                  ></i>
                  <span> Email </span>
                </div>
              </label>
            </div>

            <!-- Gender -->
            <div class="mb-4">
              <v-select
                placeholder="Select Gender"
                :options="genderList"
                v-model="user.gender"
              >
                <template #option="{ label, icon }">
                  <div
                    class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                  >
                    <i :class="icon"></i>
                    <span>{{ label }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, icon }">
                  <div
                    class="d-flex justify-content-start align-items-center gap-1 fw-5"
                  >
                    <i class="text-primary" :class="icon"></i>
                    <span>{{ label }}</span>
                  </div>
                </template>
              </v-select>
            </div>

            <!-- Password-->
            <div class="form-outline mb-4">
              <input
                type="password"
                id="form6Example5"
                class="form-control form-control-"
              />
              <label class="form-label" for="form6Example5">
                <div class="d-flex justify-content-center gap-1">
                  <i
                    class="ri-lock-2-fill text-primary text-gradient d-block-inline"
                  ></i>
                  <span> Password </span>
                </div>
              </label>
            </div>

            <!-- Role Checkbox -->
            <div class="row justify-content-center g-3 pb-4">
              <div class="col-12">
                <label class="form-label">
                  <div class="d-flex justify-content-center gap-1">
                    <i
                      class="ri-mail-fill text-primary text-gradient d-block-inline"
                    ></i>
                    <span> Roles </span>
                    <a
                      tabindex="0"
                      class=""
                      role="button"
                      data-mdb-toggle="popover"
                      data-mdb-trigger="focus"
                      data-mdb-content="Select a role to assign to the user. Can be multiple."
                    >
                      <i class="ri-information-line text-danger"></i>
                    </a>
                  </div>
                </label>
              </div>

              <!-- start:Admin Check -->
              <div
                class="col-6 col-lg-3 col-md-3 d-flex justify-content-start justify-content-md-center align-items-center"
              >
                <label class="form-check-label" for="admin">
                  <div
                    class="d-flex justify-content-center align-items-center gap-2 badge badge-fs py-2 rounded-pill border user-select-none"
                    :class="{
                      'border-transparent bg-gradient-danger shadow-3-strong text-white':
                        user.is_admin,
                      'border-danger text-danger text-gradient bg-white fw-bolder':
                        !user.is_admin,
                    }"
                  >
                    <i class="ri-shield-user-fill"></i>
                    <span>Admin</span>
                  </div>
                </label>
                <input
                  class="form-check-input me-2 d-none"
                  type="checkbox"
                  id="admin"
                  v-model="user.is_admin"
                />
              </div>
              <!-- end:Admin Check -->

              <!-- start:Principal Check -->
              <div
                class="col-6 col-lg-3 col-md-3 d-flex justify-content-end justify-content-md-center align-items-center"
              >
                <label class="form-check-label" for="principal">
                  <div
                    class="d-flex justify-content-center align-items-center gap-2 badge badge-fs py-2 rounded-pill border user-select-none"
                    :class="{
                      'border-transparent bg-gradient-info text-white shadow-3-strong':
                        user.is_principal,
                      'border-info text-info text-gradient bg-white fw-bolder':
                        !user.is_principal,
                    }"
                  >
                    <i class="ri-admin-fill"></i>
                    Principal
                  </div>
                </label>
                <input
                  class="form-check-input me-2 d-none"
                  type="checkbox"
                  id="principal"
                  v-model="user.is_principal"
                />
              </div>
              <!-- end:Principal Check -->

              <!-- start:HOD Check -->
              <div
                class="col-6 col-lg-3 col-md-3 d-flex justify-content-start justify-content-md-center align-items-center"
              >
                <label class="form-check-label" for="hod">
                  <div
                    class="d-flex justify-content-center align-items-center gap-2 badge badge-fs py-2 rounded-pill border user-select-none"
                    :class="{
                      'border-transparent bg-gradient-primary text-white shadow-3-strong':
                        user.is_hod,
                      'border-primary text-primary text-gradient bg-white fw-bolder':
                        !user.is_hod,
                    }"
                  >
                    <i class="ri-user-star-fill"></i>
                    HoD
                  </div>
                </label>
                <input
                  class="form-check-input me-2 d-none"
                  type="checkbox"
                  id="hod"
                  v-model="user.is_hod"
                />
              </div>
              <!-- end:HOD Check -->

              <!-- start:Teacher Check -->
              <div
                class="col-6 col-lg-3 col-md-3 d-flex justify-content-end justify-content-md-center align-items-center"
              >
                <label class="form-check-label" for="teacher">
                  <div
                    class="d-flex justify-content-center align-items-center gap-2 badge badge-fs py-2 rounded-pill border user-select-none"
                    :class="{
                      'border-transparent bg-gradient-warning text-white shadow-3-strong':
                        user.is_teacher,
                      'border-warning text-warning text-gradient bg-white fw-bolder':
                        !user.is_teacher,
                    }"
                  >
                    <i class="ri-user-2-fill"></i>
                    Teacher
                  </div>
                </label>
                <input
                  class="form-check-input me-2 d-none"
                  type="checkbox"
                  id="teacher"
                  v-model="user.is_teacher"
                />
              </div>
              <!-- end:Teacher Check -->
            </div>

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn bg-gradient-primary col- text-white btn-rounded my-4"
              >
                Add a new User
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
      genderList: [
        {
          label: 'Male',
          icon: 'ri-men-fill',
        },
        {
          label: 'Female',
          icon: 'ri-women-fill',
        },
        {
          label: 'Rather not Say',
          icon: 'ri-genderless-fill',
        },
      ],
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

    // get element by attribute
    document
      .querySelectorAll('[data-mdb-toggle="popover"]')
      .forEach((popover) => {
        new this.$mdb.Popover(popover)
      })
    document
      .querySelectorAll('[data-mdb-toggle="tooltip"]')
      .forEach((tooltip) => {
        new this.$mdb.Tooltip(tooltip)
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

hover-select i {
  color: var(--mdb-primary) !important;
}
.vs__dropdown-option--highlight {
  background: #5897fb;
  background: var(--vs-dropdown-option--active-bg);
  color: #fff;
  color: var(--vs-dropdown-option--active-color);
}

.badge-fs {
  font-size: 0.9rem !important;
}

.border-transparent {
  border-color: transparent !important;
}

.user-bg {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z' fill='rgba(94,114,228,1)'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
