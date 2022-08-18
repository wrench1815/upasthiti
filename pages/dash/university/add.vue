<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">
          Add University
        </h1>
        <h3 class="text-secondary text-capitalize">Add a New University</h3>
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
          <!-- start:University Add Form -->
          <form @submit.prevent="handleSubmit(addUniversity)">
            <!-- start:University Logo -->
            <div class="row mb-4">
              <div class="col-12">
                <label class="form-label">
                  <div class="d-flex justify-content-center gap-1">
                    <i
                      class="ri-image-fill text-primary text-gradient d-block-inline"
                    ></i>
                    <span> University Logo </span>
                  </div>
                </label>
              </div>
              <div class="col-12">
                <div
                  class="position-relative rounded-5 shadow-2-strong logo-size bg-size-cover bg-pos-center"
                  :style="`background-image: url(${university.logo})`"
                >
                  <!-- university logo, reset -->
                  <span
                    class="position-absolute top-0 start-100 translate-middle bg-white border avatar rounded-circle shadow-1-strong logo-action-size ripple"
                    data-mdb-ripple-radius="40"
                    data-mdb-ripple-unbound="true"
                    data-mdb-ripple-centered="true"
                    data-mdb-ripple-color="primary"
                    data-mdb-toggle="tooltip"
                    data-mdb-placement="bottom"
                    title="Remove Logo"
                    @click="removeLogo"
                  >
                    <i class="ri-close-line text-danger"></i>
                  </span>

                  <!-- university logo, select -->
                  <label
                    class="position-absolute top-100 start-100 translate-middle bg-white border avatar rounded-circle shadow-1-strong logo-action-size ripple"
                    data-mdb-ripple-radius="40"
                    data-mdb-ripple-color="primary"
                    data-mdb-ripple-unbound="true"
                    data-mdb-ripple-centered="true"
                    for="profileImage"
                    data-mdb-toggle="tooltip"
                    data-mdb-placement="bottom"
                    title="Select logo"
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
                  @change="handleLogo"
                />
              </div>
              <div class="col-12">
                <div class="mt-3 logo-help-text text-black-50">
                  Allowed file types: png, jpg, jpeg.
                </div>
              </div>
            </div>
            <!-- end:University Logo -->

            <!-- start:University name-->
            <ValidationProvider
              v-slot="{ errors }"
              :rules="{
                required: true,
                min: 3,
              }"
            >
              <div class="form-outline">
                <textarea
                  class="form-control"
                  rows="4"
                  v-model="university.name"
                ></textarea>
                <label class="form-label required">
                  <i class="ri-font-size text-primary text-gradient"></i>
                  <span>Name</span>
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
            <!-- end:University name -->

            <!-- start:University Address -->
            <ValidationProvider
              v-slot="{ errors }"
              :rules="{
                required: true,
                min: 3,
              }"
            >
              <div class="form-outline">
                <textarea
                  class="form-control"
                  rows="4"
                  v-model="university.address"
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
            <!-- end:University Address -->

            <div class="row">
              <div class="col-md-6 col-12">
                <!-- start:District -->
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    placeholder="Select District"
                    :options="districtList"
                    v-model="university.district"
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
                <!-- end:District -->
              </div>
              <div class="col-md-6 col-12">
                <!-- start:University Alias name -->
                <Lazy-DashInput
                  :label="'Alias'"
                  :validationRules="{ required: true, min: 3, max: 10 }"
                  :data.sync="university.alias"
                  :type="'text'"
                  :icon="'ri-font-size'"
                  isRequired
                />
                <!-- end:university Alias name -->
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-12">
                <!-- start:University Email -->
                <Lazy-DashInput
                  :label="'Email'"
                  :validationRules="{ required: true, email: true }"
                  :data.sync="university.email"
                  :type="'email'"
                  :icon="'ri-mail-fill'"
                  isRequired
                />
                <!-- end:University Email -->
              </div>
              <div class="col-md-6 col-12">
                <!-- start:University Phone -->
                <Lazy-DashInput
                  :label="'Phone'"
                  :validationRules="{ required: true, min: 10, max: 13 }"
                  :data.sync="university.phone_number"
                  :type="'tel'"
                  :icon="'ri-phone-fill'"
                  isRequired
                />
                <!-- end:University Phone -->
              </div>
            </div>

            <!-- start:University Vice Chancellor -->
            <Lazy-DashInput
              :label="'Vice Chancellor'"
              :validationRules="{ required: true, min: 3 }"
              :data.sync="university.vice_chancelor"
              :type="'text'"
              :icon="'ri-user-voice-fill'"
              isRequired
            />
            <!-- end:university Vice Chancellor -->

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-rounded bg-gradient-primary text-white mb-4"
              >
                Add University
              </button>
            </div>
          </form>
          <!-- End:University Add Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashUniversityAdd',
  layout: 'dash',

  data() {
    return {
      imageFile: '',
      imageUploaded: false,
      loading: false,
      error: true,
      university: {
        name: '',
        address: '',
        alias: '',
        email: '',
        district: '',
        phone_number: '',
        logo: '',
        logo_public_id: '',
        vice_chancelor: '',
      },
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'University',
        url: '/dash/university',
      },
      {
        name: 'Add',
      },
    ])
  },

  computed: {
    ...mapGetters({
      districtList: 'listDistricts',
    }),
  },

  methods: {
    // upload logo to cloudinary
    async uploadLogo() {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Uploading',
          type: 'info',
          icon: 'info',
          text: 'Please wait while we are uploading Logo.',
          didOpen: () => {
            this.$swal.showLoading()

            const formData = new FormData()
            formData.append('image', this.imageFile)
            formData.append('folder', 'university_logo')
            this.$api.image
              .upload(formData)
              .then((response) => {
                this.university.logo = response.data.image_url
                this.university.logo_public_id = response.data.public_id
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
                  text: 'Something went wrong while uploading University Logo.',
                })

                reject()
              })
          },
        })
      })
    },

    // upload logo
    // add new University
    async addUniversity() {
      if (this.imageFile) {
        if (this.imageUploaded) {
          this.addNewUniversity()
        } else {
          this.uploadLogo().then(() => {
            this.addNewUniversity()
          })
        }
      } else {
        this.addNewUniversity()
      }
    },

    // send data to server to create a new University
    async addNewUniversity() {
      try {
        this.$swal({
          title: 'Adding University',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Adding a New University',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.university
              .create(this.university)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'University has been added Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/university'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Add University.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Add University.<br/>Try Again`,
        })
      }
    },

    // assign defaults
    assignDefaultValues() {
      // get default logo from config
      this.university.logo = this.$config.defaultUniversityImage
    },

    // reset university logo to default
    removeLogo() {
      this.university.logo = this.$config.defaultUniversityImage
      this.imageFile = ''
      this.imageUploaded = false
    },

    // load Logo and assign it to university.logo
    async handleLogo(e) {
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
      this.university.logo = await imageData
      e.target.value = ''
    },
  },

  mounted() {
    this.assignDefaultValues()
  },
}
</script>

<style scoped>
.logo-size {
  width: 125px !important;
  height: 125px !important;
}

.logo-action-size {
  width: 22px !important;
  height: 22px !important;
}

.logo-help-text {
  font-size: 0.9rem !important;
}
</style>
