<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Student Edit</h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-info fw-bold" v-if="loading.main">
            <lazy-LoadersText :length="2" size="xs" />
            <lazy-LoadersText :length="1" size="xs" />
          </span>
          <span class="text-info fw-bold" v-else>{{ student.first_name }}</span>
        </h3>
      </div>

      <div class="card-body">
        <transition name="scale-in" mode="out-in">
          <Lazy-LoadersForm
            :inputCount="6"
            :btnColor="'info'"
            btnCenter
            v-if="loading.main"
          />

          <!-- for Valdation -->
          <ValidationObserver v-slot="{ handleSubmit }" v-else>
            <!-- start:Student Edit Form -->
            <form @submit.prevent="handleSubmit(editStudent)">
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
                    :style="`background-image: url(${student.profile_image})`"
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
                    :data.sync="student.first_name"
                    :type="'text'"
                    :icon="'ri-user-fill'"
                    isRequired
                  />
                  <!-- end:First Name -->
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <!-- start:Last Name -->
                  <Lazy-DashInput
                    :label="'Last Name'"
                    :validationRules="{ required: true, min: 3, alpha: true }"
                    :data.sync="student.last_name"
                    :type="'text'"
                    :icon="'ri-user-fill'"
                    isRequired
                  />
                  <!-- end:Last Name -->
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                  <!-- start:University Roll no -->
                  <Lazy-DashInput
                    :label="'University Roll no'"
                    :validationRules="{ required: true, min: 3, numeric: true }"
                    :data.sync="student.university_rollno"
                    :type="'number'"
                    :icon="'ri-user-fill'"
                    isRequired
                  />
                  <!-- end:University Roll no -->
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <!-- start:Class Roll no -->
                  <Lazy-DashInput
                    :label="'Class Roll no'"
                    :validationRules="{ required: true, min: 3, numeric: true }"
                    :data.sync="student.class_rollno"
                    :type="'number'"
                    :icon="'ri-user-fill'"
                    isRequired
                  />
                  <!-- end:Class Roll no -->
                </div>
              </div>

              <div class="row">
                <!-- start:Email -->
                <div class="col-md-6 col-12">
                  <Lazy-DashInput
                    :label="'Email'"
                    :validationRules="{ required: true, email: true }"
                    :data.sync="student.email"
                    :type="'text'"
                    :icon="'ri-mail-fill'"
                    isRequired
                  />
                </div>
                <!-- end:Email -->

                <!-- start:mobile -->
                <div class="col">
                  <Lazy-DashInput
                    :label="'Mobile'"
                    :validationRules="{
                      required: true,
                      min: 10,
                      max: 13,
                      phone: true,
                    }"
                    :data.sync="student.mobile"
                    :type="'tel'"
                    :icon="'ri-phone-fill'"
                    isRequired
                  />
                </div>
                <!-- end:mobile -->
              </div>

              <div class="row">
                <!-- start:Gender -->
                <div class="col-md-6 col-12">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      placeholder="Select Gender"
                      :options="genderList"
                      v-model="student.gender"
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
                          <i
                            class="text-primary text-gradient"
                            :class="icon"
                          ></i>
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
                </div>
                <!-- end:Gender -->

                <!-- start:District -->
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      placeholder="Select District"
                      :options="districtList"
                      v-model="student.district"
                    >
                    </v-select>
                    <!-- Validation Errors -->
                    <div
                      class="text-danger transition-all-ease-out-sine"
                      :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                    >
                      {{ errors[0] }}
                    </div>
                  </ValidationProvider>
                </div>
                <!-- end:District-->
              </div>

              <!-- start:Address -->
              <ValidationProvider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                  min: 5,
                }"
              >
                <div class="form-outline">
                  <textarea
                    class="form-control"
                    rows="4"
                    v-model="student.address"
                  ></textarea>
                  <label class="form-label required">
                    <i class="ri-map-pin-2-fill text-primary text-gradient"></i>
                    <span>Address</span>
                  </label>
                </div>
                <!-- Valdation Errors -->
                <div
                  class="text-danger transition-all-ease-out-sine"
                  :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                >
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
              <!-- end:Address -->

              <!-- start:Password -->
              <!-- <ValidationProvider
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
                  class="form-control mb-0"
                  v-model="student.password"
                />
                <label class="form-label" for="password">
                  <div class="d-flex justify-content-center gap-1">
                    <i
                      class="ri-lock-2-fill text-primary text-gradient d-block-inline"
                    ></i>
                    <span class="required">Password</span>
                  </div>
                </label>
              </div>
              Valdation Errors
               <div
                class="text-danger transition-all-ease-out-sine"
                :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
              >
                {{ errors[0] }}
              </div>
            </ValidationProvider> -->

              <!-- start:Show Password -->
              <!-- <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                id="showPassword"
                v-model="showPassword"
              />
              <label
                class="form-check-label ripple"
                data-mdb-ripple-unbound="true"
                data-mdb-ripple-radius="40"
                data-mdb-ripple-color="primary"
                for="showPassword"
                >Show Password</label
              >
            </div> -->
              <!-- end:Show Password -->
              <!-- end:Password -->

              <!-- Submit button -->
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn bg-gradient-primary text-white btn-rounded my-4"
                >
                  Update Student
                </button>
              </div>
            </form>
            <!-- End:Student Edit Form -->
          </ValidationObserver>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashStudentEdit',
  layout: 'dash',

  data() {
    return {
      loading: {
        main: true,
        uni: true,
        principal: true,
        paginateUni: true,
        paginatePrincipal: true,
      },
      error: true,
      imageFile: '',
      imageUploaded: false,
      college: {},

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
      student: {},
      // universty related
      disableUniBtns: true,
      universityList: [],
      uniPayload: {},

      // principal related
      principalList: [],
      disablePrincipalBtns: true,
      principalPayload: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Student',
        url: '/dash/Student',
      },
      {
        name: 'Edit',
      },
    ])
  },

  computed: {
    ...mapGetters({
      districtList: 'listDistricts',
    }),
  },

  methods: {
    // upload Student Profile Image to cloudinary
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
            formData.append('folder', 'student_profile_image')
            formData.append('public_id', this.student.profile_image_public_id)

            this.$api.image
              .upload(formData)
              .then((response) => {
                this.student.profile_image = response.data.image_url
                this.student.profile_image_public_id = response.data.public_id
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
                  text: 'Something went wrong while uploading the Profile Image.',
                })

                reject()
              })
          },
        })
      })
    },

    // upload Profile Image
    // Edit Student
    async editStudent() {
      if (this.imageFile) {
        if (this.imageUploaded) {
          this.updateStudent()
        } else {
          this.uploadProfile().then(() => {
            this.updateStudent()
          })
        }
      } else {
        this.updateStudent()
      }
    },

    // send Student data to server to Edit the Student
    async updateStudent() {
      try {
        let student = this.student
        student.gender = this.student.gender.label
        // college.university = college.university.id
        // college.principal = college.principal.id

        this.$swal({
          title: 'Updating Student',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Updating the Student',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.student
              .update(student.id, student)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'Student has been updated Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/student'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Update Student.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Update Student.<br/>Try Again`,
        })
      }
    },

    // reset student.profile_image to default image
    async removeProfileImage() {
      return new Promise((resolve, reject) => {
        this.student.profile_image = this.$config.defaultStudentImage
        this.imageFile = ''
        this.imageUploaded = false
        resolve()
      })
    },

    // load Profile Image and assign it to student.profile_image
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
      this.student.profile_image = await imageData
      e.target.value = ''
    },

    // retrieve Student
    async retrieveStudent() {
      this.loading.main = true

      return this.$api.student
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.student = response.data

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.student = {}

            this.$nuxt.error({
              statusCode: 404,
              message: 'No Student Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },
  },

  mounted() {
    // fetch Student
    this.retrieveStudent().then(() => {
      if (this.error) {
        this.$nuxt.error({
          statusCode: 400,
          message: 'Something went Wrong',
        })
      } else {
        this.loading.main = false

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
      }
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

.border-transparent {
  border-color: transparent !important;
}
</style>
