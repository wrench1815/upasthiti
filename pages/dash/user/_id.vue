<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">User Edit</h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-gradient text-info fw-bold"
            >{{ user.first_name }} {{ user.last_name }}</span
          >
        </h3>
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
          <form @submit.prevent="handleSubmit(updateUser)">
            <!-- start:Profile Image -->
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
                  class="position-relative rounded-5 shadow-2-strong profile-image-size bg-size-cover bg-pos-center"
                  :lazy-background="user.profile_image"
                >
                  <!-- profile image, reset -->
                  <span
                    class="position-absolute top-0 start-100 translate-middle bg-white border avatar rounded-circle shadow-1-strong profile-image-action-size ripple"
                    data-mdb-ripple-radius="40"
                    data-mdb-ripple-unbound="true"
                    data-mdb-ripple-centered="true"
                    data-mdb-ripple-color="primary"
                    data-mdb-toggle="tooltip"
                    data-mdb-placement="bottom"
                    title="Remove Profile Image"
                    @click="removeProfileImage"
                  >
                    <i class="ri-close-line text-danger"></i>
                  </span>

                  <!-- profile image, select -->
                  <label
                    class="position-absolute top-100 start-100 translate-middle bg-white border avatar rounded-circle shadow-1-strong profile-image-action-size ripple"
                    data-mdb-ripple-radius="40"
                    data-mdb-ripple-color="primary"
                    data-mdb-ripple-unbound="true"
                    data-mdb-ripple-centered="true"
                    for="profileImage"
                    data-mdb-toggle="tooltip"
                    data-mdb-placement="bottom"
                    title="Select Profile Image"
                  >
                    <i class="ri-pencil-fill text-primary"></i>
                  </label>
                </div>

                <!-- file input, hidden -->
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  class="form-control d-none"
                  id="profileImage"
                  @change="handleProfileImage"
                />
              </div>
              <div class="col-12">
                <div class="mt-3 profile-help-text text-black-50">
                  Allowed file types: png, jpg, jpeg.
                </div>
              </div>
            </div>
            <!-- end:Profile Image -->

            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <!-- start:First Name -->
                <Lazy-DashInput
                  :label="'First Name'"
                  :validationRules="{ required: true, min: 3, alpha: true }"
                  :data.sync="user.first_name"
                  :type="'text'"
                  :icon="'ri-user-fill'"
                />
                <!-- end:First Name -->
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <!-- start:Last Name -->
                <Lazy-DashInput
                  :label="'Last Name'"
                  :validationRules="{ required: true, min: 3, alpha: true }"
                  :data.sync="user.last_name"
                  :type="'text'"
                  :icon="'ri-user-fill'"
                />
                <!-- end:Last Name -->
              </div>
            </div>

            <!-- start:Email -->
            <Lazy-DashInput
              :label="'Email'"
              :validationRules="{ required: true, email: true }"
              :data.sync="user.email"
              :type="'text'"
              :icon="'ri-mail-fill'"
            />
            <!-- end:Email -->

            <!-- start:Gender -->
            <ValidationProvider v-slot="{ errors }" :rules="{ required: true }">
              <v-select
                placeholder="Select Gender"
                :options="genderList"
                v-model="user.gender"
              >
                <!-- for options -->
                <template #option="{ label, icon }">
                  <div
                    class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                  >
                    <i :class="icon"></i>
                    <span>{{ label }}</span>
                  </div>
                </template>

                <!-- for selected option -->
                <template #selected-option="{ label, icon }">
                  <div
                    class="d-flex justify-content-start align-items-center gap-1"
                  >
                    <i class="text-primary text-gradient" :class="icon"></i>
                    <span>{{ label }}</span>
                  </div>
                </template>
              </v-select>
              <!-- Validation Errors -->
              <div
                class="text-danger transition-all-ease-out-sine"
                :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
              >
                {{ errors[0] }}
              </div>
            </ValidationProvider>
            <!-- end:Gender -->

            <!-- start:Role Checkbox -->
            <div class="row justify-content-center g-3 pb-4">
              <div class="col-12">
                <label class="form-label">
                  <div class="d-flex justify-content-center gap-1">
                    <i
                      class="ri-user-4-fill text-primary text-gradient d-block-inline"
                    ></i>
                    <span> Roles </span>
                    <a
                      tabindex="0"
                      class="ripple"
                      data-mdb-ripple-unbound="true"
                      data-mdb-ripple-radius="40"
                      data-mdb-ripple-color="primary"
                      role="button"
                      data-mdb-toggle="popover"
                      data-mdb-html="true"
                      data-mdb-trigger="focus"
                      data-mdb-content="Select a role to assign to the user.<br/>Can be multiple."
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
                <label
                  class="form-check-label ripple"
                  data-mdb-ripple-unbound="true"
                  data-mdb-ripple-radius="40"
                  data-mdb-ripple-color="primary"
                  for="admin"
                >
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
                <label
                  class="form-check-label ripple"
                  data-mdb-ripple-unbound="true"
                  data-mdb-ripple-radius="40"
                  data-mdb-ripple-color="primary"
                  for="principal"
                >
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
                <label
                  class="form-check-label ripple"
                  data-mdb-ripple-unbound="true"
                  data-mdb-ripple-radius="40"
                  data-mdb-ripple-color="primary"
                  for="hod"
                >
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
                    HOD
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
                <label
                  class="form-check-label ripple"
                  data-mdb-ripple-unbound="true"
                  data-mdb-ripple-radius="40"
                  data-mdb-ripple-color="primary"
                  for="teacher"
                >
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
            <!-- end:Role Checkbox -->

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn bg-gradient-info text-white btn-rounded my-4"
              >
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
      imageFile: '',
      imageUploaded: false,
      user: {
        profile_image: '',
        profile_image_public_id: '',
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        is_admin: false,
        is_principal: false,
        is_hod: false,
        is_teacher: false,
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
        name: 'Edit',
      },
    ])
  },

  methods: {
    async uploadProfile() {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Uploading',
          type: 'info',
          icon: 'info',
          text: 'Please wait while we are uploading Profile Image.',
          didOpen: () => {
            this.$swal.showLoading()

            const formData = new FormData()
            formData.append('image', this.imageFile)
            formData.append('folder', 'profile_image')
            formData.append('public_id', this.user.profile_image_public_id)
            this.$api.image
              .upload(formData)
              .then((response) => {
                this.user.profile_image = response.data.image_url
                this.user.profile_image_public_id = response.data.public_id
                this.imageUploaded = true

                this.$swal.hideLoading()
                this.$swal.close()
                resolve()
              })
              .catch((error) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.imageUploaded = false

                this.$swal({
                  title: 'Error',
                  type: 'error',
                  icon: 'error',
                  text: 'Something went wrong while uploading your Profile Image.',
                })

                reject()
              })
          },
        })
      })
    },
    async fetchUser() {
      this.loading = true

      const response = await this.$api.user
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.user = response.data
          this.user.date_added = this.$moment(this.date_added).format(
            'Do MMMM YYYY, h:mm:ss a'
          )

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

    // update user Data
    // first check if image is uploaded or not
    // if not then first upload it then update the user data
    // if image is uploaded then update the user data
    // else run fallback case
    async updateUserData() {
      if (this.imageFile) {
        if (this.imageUploaded) {
          this.updateUser()
        } else {
          this.uploadProfile().then(() => {
            this.updateUser()
          })
        }
      } else {
        this.updateUser()
      }
    },

    // update user
    async updateUser() {
      try {
        const user = {
          profile_image: this.user.profile_image,
          profile_image_public_id: this.user.profile_image_public_id,
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          gender: this.user.gender.label,
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

    // reset user.profile_image to default image
    async removeProfileImage() {
      return new Promise((resolve, reject) => {
        this.user.profile_image = this.$config.defaultUserImage
        this.imageFile = ''
        this.imageUploaded = false
        resolve()
      })
    },

    // load Profile Image and assign it to user.profile_image
    async handleProfileImage(e) {
      let imageFile = await e.target.files[0]

      if (await !imageFile) {
        e.target.value = ''
        return
      }

      let imageType = await imageFile.type
      let imageSize = await imageFile.size

      // must be image file of type jpeg, png, or jpg
      const imgPattern = /^image\/(jpeg|png|jpg)$/i

      // 3 mb max
      const imgSize = 3145728

      // check if image file is of valid type
      if (!imgPattern.test(imageType)) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Invalid Image Format.<br/>Please Upload a JPEG, PNG or JPG Image`,
          confirmButtonText: 'OK',
        })
        e.target.value = ''
        return
      }

      // check if image file is of valid size
      if (imageSize > imgSize) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Image Size is too Large.<br/>Please Upload a JPEG, PNG or JPG Image less than 3 MB`,
          confirmButtonText: 'OK',
        })
        e.target.value = ''
        return
      }

      // read image file and covert it into base64
      const readData = (f) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = (e) => {
            resolve(e.target.result)
          }
          reader.readAsDataURL(f)
        })
      }

      this.imageFile = await imageFile
      const imageData = await readData(imageFile)
      this.user.profile_image = await imageData
      e.target.value = ''
    },
  },

  mounted() {
    this.fetchUser()
      .then(() => {
        this.loading = false
      })
      .then(() => {
        // initialize form elements
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
          new this.$mdb.Input(formOutline).init()
        })

        // initialize popover elements
        document
          .querySelectorAll('[data-mdb-toggle="popover"]')
          .forEach((popover) => {
            new this.$mdb.Popover(popover)
          })

        // initialize tooltip elements
        document
          .querySelectorAll('[data-mdb-toggle="tooltip"]')
          .forEach((tooltip) => {
            new this.$mdb.Tooltip(tooltip)
          })
      })
  },
}
</script>

<style scoped>
.profile-image-size {
  width: 125px !important;
  height: 125px !important;
}

.profile-image-action-size {
  width: 22px !important;
  height: 22px !important;
}

.profile-help-text {
  font-size: 0.9rem !important;
}

.badge-fs {
  font-size: 0.9rem !important;
}

.border-transparent {
  border-color: transparent !important;
}
</style>
