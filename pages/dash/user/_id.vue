<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">User Edit</h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <transition name="fade-x" mode="out-in">
            <span class="text-info fw-bold" v-if="loading.main">
              <lazy-LoadersText :length="2" size="xs" />
              <lazy-LoadersText :length="1" size="xs" />
            </span>
            <span class="text-info fw-bold" v-else>{{ user.full_name }}</span>
          </transition>
        </h3>
      </div>

      <div class="card-body">
        <transition name="scale-in" mode="out-in">
          <Lazy-LoadersForm
            :inputCount="6"
            :btnCenter="true"
            :btnColor="'info'"
            v-if="loading.main"
          />
          <!-- for Valdation -->
          <ValidationObserver v-slot="{ handleSubmit }" v-else>
            <!-- start:User Edit Form -->
            <form @submit.prevent="handleSubmit(updateUserData)">
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
                    :style="`background-image: url(${user.profile_image})`"
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
              <div class="row">
                <!-- start:Email -->
                <div class="col-md-6 col-12">
                  <Lazy-DashInput
                    :label="'Email'"
                    :validationRules="{ required: true, email: true }"
                    :data.sync="user.email"
                    :type="'text'"
                    :icon="'ri-mail-fill'"
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
                    :data.sync="user.mobile"
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
                      v-model="user.district"
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
                    v-model="user.address"
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

              <transition name="fade-y" mode="out-in">
                <!-- start:College -->
                <div class="">
                  <div
                    class="row py-2 bg-gradient-light rounded-5 border shadow-4"
                    v-if="user.is_teacher"
                  >
                    <div class="col-12">
                      <label class="form-label" for="college">College</label>
                    </div>
                    <div class="col">
                      <ValidationProvider v-slot="{ errors }" :rules="{}">
                        <v-select
                          placeholder="Select College"
                          :options="collegeList.results"
                          v-model="user.college"
                          label="alias_name"
                          :loading="loading.college"
                        >
                          <!-- spinner -->
                          <template #spinner="{ loading }">
                            <div
                              v-if="loading"
                              class="vs__spinner"
                              style="border-left-color: var(--mdb-primary)"
                            >
                              loading...
                            </div>
                          </template>

                          <!-- options -->
                          <template #option="{ alias_name, logo }">
                            <div
                              class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                            >
                              <span class="d-flex align-items-center gap-2">
                                <span>
                                  <img
                                    class="avatar avatar-sm rounded-circle bg-white obj-fit-cover shadow"
                                    :data-src="logo"
                                    :alt="`${alias_name}'s logo`"
                                    v-lazy-load
                                  />
                                </span>
                              </span>
                              <span>{{ alias_name }}</span>
                            </div>
                          </template>

                          <!-- footer for pagination -->
                          <li
                            slot="list-footer"
                            class="d-flex gap-2 justify-content-center align-items-center my-2"
                            v-if="collegeList.pagination.count > 1"
                          >
                            <!-- previous button -->
                            <button
                              class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                              :disabled="
                                disableCollegeBtns ||
                                !collegeList.pagination.previous
                              "
                              @click.prevent="collegePaginatePrev"
                              data-mdb-ripple-color="primary"
                            >
                              <i class="ri-arrow-left-s-line"></i>
                            </button>

                            <!-- next button -->
                            <button
                              class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                              :disabled="
                                disableCollegeBtns ||
                                !collegeList.pagination.next
                              "
                              @click.prevent="collegePaginateNext"
                              data-mdb-ripple-color="primary"
                            >
                              <i class="ri-arrow-right-s-line"></i>
                            </button>
                          </li>
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
                  </div>
                </div>
                <!-- end:College -->
              </transition>

              <!-- Submit button -->
              <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">
                <button
                  type="submit"
                  class="btn bg-gradient-info text-white btn-rounded"
                >
                  <span class="d-flex align-items-center gap-1">
                    <i class="ri-edit-2-fill ri-lg mt-n1"></i>
                    <span>Update User</span>
                  </span>
                </button>

                <button
                  type="button"
                  @click="resetData"
                  class="btn bg-gradient-warning text-white btn-rounded"
                >
                  <span class="d-flex align-items-center gap-1">
                    <i class="ri-restart-line ri-lg mt-n1"></i>
                    <span>Reset</span>
                  </span>
                </button>
              </div>
            </form>
            <!-- End:User Edit Form -->
          </ValidationObserver>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashUserEdit',
  layout: 'dash',

  data() {
    return {
      loading: {
        main: true,
        college: true,
      },
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
      user: {},
      oldUser: {},

      // for college
      disableCollegeBtns: false,
      collegeList: {
        pagination: {
          count: 0,
        },
      },
      collegePayload: {},
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

  computed: {
    ...mapGetters({
      districtList: 'listDistricts',
    }),
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
      this.loading.main = true

      await this.$api.user
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.user = response.data

          if (this.user.college_teacher.length != 0) {
            this.user.college = this.user.college_teacher[0]
          }

          // find gender in genderList and assign it to user.gender
          this.genderList.forEach((ele) => {
            if (ele.label == this.user.gender) {
              this.user.gender = ele
            }
          })

          // take baackup of fetched data
          this.oldUser = { ...this.user }

          this.error = false
        })
        .catch((error) => {
          if (error.response.status == 404) {
            this.error = true

            this.$nuxt.error({
              statusCode: 404,
              message: 'User not Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
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
        let user = { ...this.user }

        let collegeList = []
        if (user.college && user.college.length != 0) {
          collegeList = [user.college.id]
        } else {
          user.college = []
        }

        user.gender = this.user.gender.label
        user.college = collegeList

        this.$swal({
          title: 'Updating User',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are updating the User',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.user
              .update(this.$route.params.id, user)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

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

                let errMsg = 'Failed to Update User'

                if (err.response.status == 404) {
                  errMsg = err.response.data.college
                    ? err.response.data.college
                    : errMsg
                }

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `${errMsg}`,
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

    // get list of colleges
    async getCollegeList() {
      this.loading.college = true
      this.disableCollegeBtns = true

      return this.$api.college
        .list(this.collegePayload)
        .then((response) => {
          this.collegeList = response.data

          this.loading.college = false
          this.disableCollegeBtns = false
          this.error = false
        })
        .catch((err) => {
          this.error = true

          this.loading.college = true
          this.collegeList = {
            pagination: {
              count: 0,
            },
          }
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'Page not Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong. Unable to fetch College List.',
            })
          }
        })
    },

    // on College filter previous
    collegePaginatePrev() {
      if (this.collegeList.pagination.previous) {
        this.collegePayload.page = this.collegePayload.page - 1
        this.getCollegeList()
      }
    },

    // on College filter next
    collegePaginateNext() {
      if (this.collegeList.pagination.next) {
        this.collegePayload.page = this.collegePayload.page + 1
        this.getCollegeList()
      }
    },

    resetData() {
      this.resetUserData().then(() => (this.loading.main = false))
    },

    async resetUserData() {
      this.loading.main = true

      return new Promise((resolve, reject) => {
        this.user = { ...this.oldUser }

        resolve()
      })
    },
  },

  mounted() {
    this.collegePayload.page = 1

    this.fetchUser()
      .then(() => {
        return this.getCollegeList()
      })
      .then(() => {
        if (!this.error) {
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

.badge-fs {
  font-size: 0.9rem !important;
}

.border-transparent {
  border-color: transparent !important;
}
</style>
