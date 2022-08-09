<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Add College</h1>
        <h3 class="text-secondary text-capitalize">Add a New College</h3>
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
          <!-- start:College Add Form -->
          <form @submit.prevent="handleSubmit(addCollege)">
            <!-- start:College Logo -->
            <div class="row mb-4">
              <div class="col-12">
                <label class="form-label">
                  <div class="d-flex justify-content-center gap-1">
                    <i
                      class="ri-image-fill text-primary text-gradient d-block-inline"
                    ></i>
                    <span> College Logo </span>
                  </div>
                </label>
              </div>
              <div class="col-12">
                <div
                  class="position-relative rounded-5 shadow-2-strong logo-size bg-size-cover bg-pos-center"
                  :lazy-background="college.logo"
                >
                  <!-- College logo, reset -->
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

                  <!-- College logo, select -->
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
            <!-- end:College Logo -->

            <!-- start:Institute name-->
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>

              <label class="form-label required" for="textAreaExample"
                ><i class="ri-font-size text-primary text-gradient"></i>
                Name</label
              >
            </div>
            <!-- end:Institute name -->

            <!-- start:Institute Address -->
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>
              <label class="form-label required" for="textAreaExample"
                ><i class="ri-map-pin-2-fill text-primary text-gradient"></i>
                Address</label
              >
            </div>
            <!-- end:Institute Address -->

            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <!-- start:Mobile Number-->
                <Lazy-DashInput
                  :label="'Mobile Number'"
                  :validationRules="{ required: true, min: 3, alpha: true }"
                  :data.sync="college.mobile_number"
                  :type="'text'"
                  :icon="'ri-phone-fill'"
                />
                <!-- end:Mobile Number-->
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <!-- start:Email-->
                <Lazy-DashInput
                  :label="'Email'"
                  :validationRules="{ required: true, min: 3, alpha: true }"
                  :data.sync="college.email"
                  :type="'text'"
                  :icon="'ri-mail-fill'"
                />
                <!-- end:Email-->
              </div>
            </div>

            <!-- start:Institute Alias name -->
            <Lazy-DashInput
              :label="'Alias'"
              :validationRules="{ required: true, min: 3 }"
              :data.sync="college.institute_alias_name"
              :type="'text'"
              :icon="'ri-font-size'"
            />
            <!-- end:Institute Alias name -->

            <!-- start:Institute Principal -->
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <label class="form-label required" for="form7Example1"
                  ><i class="ri-admin-fill text-primary text-gradient"></i>
                  Principal</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      id="institute_principal"
                      placeholder="Select Principal"
                      :options="principalList"
                      v-model="college.institute_principal"
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
              <!--end:Institute Principal  -->
              <!--Start:University -->
              <div class="col-lg-6 col-md-6 col-12">
                <label class="form-label required" for="form7Example1"
                  ><i class="ri-government-fill text-primary text-gradient"></i>
                  University</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      id="colleges"
                      placeholder="Select University"
                      :options="UniversityList"
                      v-model="college.university"
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
            </div>
            <!-- end:University-->

            <!-- start:Institute Website-->
            <Lazy-DashInput
              :label="'Website'"
              :validationRules="{ required: true }"
              :data.sync="college.institute_website"
              :type="'url'"
              :icon="'ri-global-fill'"
            />
            <!-- end:Institute website -->

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-rounded bg-gradient-primary text-white mb-4"
              >
                Add College
              </button>
            </div>
          </form>
          <!-- End:College Add Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeAdd',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      principalList: [],
      college: {
        institute_name: '',
        institute_address: '',
        institute_alias_name: '',
        institute_principal: '',
        institute_logo: '',
        institute_website: '',
        institute_mobile: '',
        institute_email: '',
        logo: '',
        logo_public_id: '',
      },
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'College',
        url: '/dash/college',
      },
      {
        name: 'Add',
      },
    ])
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
            formData.append('folder', 'college_logo')
            this.$api.image
              .upload(formData)
              .then((response) => {
                this.college.logo = response.data.image_url
                this.college.logo_public_id = response.data.public_id
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
    // add new college
    async addCollege() {
      if (this.imageFile) {
        if (this.imageUploaded) {
          this.addNewCollege()
          console.log(this.college)
        } else {
          this.uploadLogo().then(() => {
            console.log(this.college)
            this.addNewCollege()
          })
        }
      } else {
        console.log(this.college)
        this.addNewCollege()
      }
    },
    // assign defaults
    assignDefaultValues() {
      // get default logo from config
      this.college.logo = this.$config.defaultCollegeImage
    },

    // reset college logo to default
    removeLogo() {
      this.college.logo = this.$config.defaultCollegeImage
      this.imageFile = ''
      this.imageUploaded = false
    },

    // load Logo and assign it to college.logo
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
      this.college.logo = await imageData
      e.target.value = ''
    },

    async addCollege() {
      try {
        let college = this.college
        college.institute_principal = college.institute_principal.id
        this.$swal({
          title: 'Adding College',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Adding a New College',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.college
              .create(this.college)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'College has been added Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/college'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Add College.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Add College.<br/>Try Again`,
        })
      }
    },

    async getPrincipals() {
      await this.$api.user.listPrincipal().then((response) => {
        // set first_name and last name as label and id as value for v-select
        this.principalList = response.data.results.map((principal) => {
          return {
            id: principal.id,
            label: principal.full_name,
          }
        })
      })
    },
  },

  mounted() {
    this.getPrincipals()
      .then(() => {
        this.loading = false
      })
      .finally(() => {
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
          new this.$mdb.Input(formOutline).init()
        })
      })
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
