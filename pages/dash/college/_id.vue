<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">College Edit</h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-info fw-bold" v-if="loading.main">
            <lazy-LoadersText :length="2" size="xs" />
            <lazy-LoadersText :length="1" size="xs" />
          </span>
          <span class="text-info fw-bold" v-else>{{ college.name }}</span>
        </h3>
      </div>

      <div class="card-body">
        <Lazy-LoadersForm
          :inputCount="6"
          :btnColor="'info'"
          btnCenter
          v-if="loading.main"
        />

        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- start:College Edit Form -->
          <form @submit.prevent="handleSubmit(editCollege)">
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
                  :style="`background-image: url(${college.logo})`"
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

            <!-- start:College name-->
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
                  v-model="college.name"
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
            <!-- end:College name -->

            <!-- start:College Address -->
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
                  v-model="college.address"
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
            <!-- end:College Address -->

            <div class="row">
              <!-- start:Mobile Number-->
              <div class="col-lg-6 col-md-6 col-12">
                <Lazy-DashInput
                  :label="'Mobile Number'"
                  :validationRules="{
                    required: true,
                    min: 10,
                    max: 13,
                    phone: true,
                  }"
                  :data.sync="college.mobile"
                  :type="'tel'"
                  :icon="'ri-phone-fill'"
                  isRequired
                />
              </div>
              <!-- end:Mobile Number-->

              <!-- start:Email-->
              <div class="col-lg-6 col-md-6 col-12">
                <Lazy-DashInput
                  :label="'Email'"
                  :validationRules="{ required: true, email: true }"
                  :data.sync="college.email"
                  :type="'text'"
                  :icon="'ri-mail-fill'"
                  isRequired
                />
              </div>
              <!-- end:Email-->
            </div>

            <div class="row">
              <!-- start:College Alias name -->
              <div class="col">
                <Lazy-DashInput
                  :label="'Alias'"
                  :validationRules="{
                    required: true,
                    min: 3,
                    max: 10,
                    capitalizeOrNum: true,
                  }"
                  :data.sync="college.alias_name"
                  :type="'text'"
                  :icon="'ri-font-size'"
                  isRequired
                />
              </div>
              <!-- end:College Alias name -->

              <!-- start:District -->
              <div class="col-md-6 col-12">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    placeholder="Select District"
                    :options="districtList"
                    v-model="college.district"
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
              <!-- end:District -->
            </div>

            <div class="row">
              <!-- start:College Principal -->
              <div class="col-md-6 col-12">
                <label class="form-label required"
                  ><i class="ri-admin-fill text-primary text-gradient"></i>
                  Principal</label
                >
                <div class="col">
                  <template v-if="loading.principal">
                    <Lazy-LoadersText size="xs" :length="1" />
                    <Lazy-LoadersText size="xs" :length="3" />
                    <Lazy-LoadersText size="xs" :length="5" />
                    <Lazy-LoadersText size="xs" :length="5" />
                    <Lazy-LoadersText size="xs" :length="2" />
                    <div class="mb-4"></div>
                  </template>
                  <ValidationProvider
                    v-else
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      id="principal"
                      placeholder="Select Principal"
                      :options="principalList.results"
                      v-model="college.principal"
                      label="full_name"
                      :selectable="(option) => !option.administrated_college"
                      :loading="loading.paginatePrincipal"
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
                      <template #option="{ full_name, profile_image }">
                        <div
                          class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                        >
                          <span class="d-flex align-items-center gap-2">
                            <span>
                              <img
                                class="avatar avatar-sm border rounded-circle bg-white"
                                :data-src="profile_image"
                                :alt="`${full_name}'s profile image`"
                                v-lazy-load
                              />
                            </span>
                            <span class="text-capitalize">{{ full_name }}</span>
                          </span>
                        </div>
                      </template>

                      <!-- footer for pagination -->
                      <li
                        slot="list-footer"
                        class="d-flex gap-2 justify-content-center align-items-center my-2"
                        v-if="principalList.pagination.count > 1"
                      >
                        <!-- previous button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disablePrincipalBtns ||
                            !principalList.pagination.previous
                          "
                          @click.prevent="principalPaginatePrev"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>

                        <!-- next button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disablePrincipalBtns ||
                            !principalList.pagination.next
                          "
                          @click.prevent="principalPaginateNext"
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
              <!--end:College Principal  -->

              <!--Start:University -->
              <div class="col-lg-6 col-md-6 col-12">
                <label class="form-label required"
                  ><i class="ri-government-fill text-primary text-gradient"></i>
                  University</label
                >
                <div class="col">
                  <template v-if="loading.uni">
                    <Lazy-LoadersText size="xs" :length="5" />
                    <Lazy-LoadersText size="xs" :length="1" />
                    <Lazy-LoadersText size="xs" :length="2" />
                    <Lazy-LoadersText size="xs" :length="4" />
                    <Lazy-LoadersText size="xs" :length="6" />
                    <div class="mb-4"></div>
                  </template>
                  <ValidationProvider
                    v-else
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      id="colleges"
                      placeholder="Select University"
                      :options="universityList.results"
                      v-model="college.university"
                      label="alias"
                      :loading="loading.paginateUni"
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
                      <template #option="{ alias, logo }">
                        <div
                          class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                        >
                          <span class="d-flex align-items-center gap-2">
                            <span>
                              <img
                                class="avatar avatar-sm border rounded-circle bg-white"
                                :data-src="logo"
                                :alt="`${alias}'s logo`"
                                v-lazy-load
                              />
                            </span>
                            <span>{{ alias }}</span>
                          </span>
                        </div>
                      </template>

                      <!-- footer for pagination -->
                      <li
                        slot="list-footer"
                        class="d-flex gap-2 justify-content-center align-items-center my-2"
                        v-if="universityList.pagination.count > 1"
                      >
                        <!-- previous button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableUniBtns ||
                            !universityList.pagination.previous
                          "
                          @click.prevent="uniPaginatePrev"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>

                        <!-- next button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableUniBtns || !universityList.pagination.next
                          "
                          @click.prevent="uniPaginateNext"
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
              <!-- end:University-->
            </div>

            <!-- start:College Website-->
            <Lazy-DashInput
              :label="'Website'"
              :validationRules="{ required: true, url: true }"
              :data.sync="college.website"
              :type="'url'"
              :icon="'ri-global-fill'"
            />
            <!-- end:College website -->

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <Lazy-LoadersButton
                class="mb-4"
                btnColor="btn-info"
                rounded
                v-if="loading.principal || loading.uni"
              />
              <button
                v-else
                type="submit"
                class="btn btn-rounded bg-gradient-info text-white mb-4"
              >
                Update College
              </button>
            </div>
          </form>
          <!-- End:College Edit Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashCollegeEdit',
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
        name: 'College',
        url: '/dash/college',
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
            formData.append('public_id', this.college.logo_public_id)
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
                  text: 'Something went wrong while uploading College Logo.',
                })

                reject()
              })
          },
        })
      })
    },

    // upload logo
    // Edit the college
    async editCollege() {
      if (this.imageFile) {
        if (this.imageUploaded) {
          this.updateCollege()
        } else {
          this.uploadLogo().then(() => {
            this.updateCollege()
          })
        }
      } else {
        this.updateCollege()
      }
    },

    // send college data to server to Edit the college
    async updateCollege() {
      try {
        let college = this.college
        college.university = college.university.id
        college.principal = college.principal.id

        this.$swal({
          title: 'Updating College',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Updating the College',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.college
              .update(college.id, college)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'College has been updated Successfully',
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
                  html: `Failed to Update College.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Update College.<br/>Try Again`,
        })
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

    // fetch principals for select
    async getPrincipals() {
      this.disablePrincipalBtns = true
      this.loading.paginatePrincipal = true

      return this.$api.user
        .listPrincipal(this.principalPayload)
        .then((response) => {
          this.principalList = response.data

          this.disablePrincipalBtns = false
          this.loading.paginatePrincipal = false
        })
    },

    // on principal select next
    principalPaginateNext() {
      if (this.principalList.pagination.next) {
        this.principalPayload.page = this.principalPayload.page + 1

        this.getPrincipals()
      }
    },

    // on Uni select previous
    principalPaginatePrev() {
      if (this.principalList.pagination.previous) {
        this.principalPayload.page = this.principalPayload.page - 1

        this.getPrincipals()
      }
    },

    // fetch universities for select
    async getUniversities() {
      this.disableUniBtns = true
      this.loading.paginateUni = true

      return this.$api.university.list(this.uniPayload).then((response) => {
        this.universityList = response.data

        this.disableUniBtns = false
        this.loading.paginateUni = false
      })
    },

    // on Uni select next
    uniPaginateNext() {
      if (this.universityList.pagination.next) {
        this.uniPayload.page = this.uniPayload.page + 1
        this.getUniversities()
      }
    },

    // on Uni select previous
    uniPaginatePrev() {
      if (this.universityList.pagination.previous) {
        this.uniPayload.page = this.uniPayload.page - 1
        this.getUniversities()
      }
    },

    // retrieve COllege
    async retrieveCollege() {
      this.loading.main = true

      return this.$api.college
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.college = response.data

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.university = {}

            this.$nuxt.error({
              statusCode: 404,
              message: 'No College Found',
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
    this.uniPayload.page = 1
    this.principalPayload.page = 1

    // fetch college
    this.retrieveCollege().then(() => {
      if (this.error) {
        this.$nuxt.error({
          statusCode: 400,
          message: 'Something went Wrong',
        })
      } else {
        this.loading.main = false

        document.querySelectorAll('.form-outline').forEach((formOutline) => {
          new this.$mdb.Input(formOutline).init()
        })
      }
    })

    // fetch Principals
    this.getPrincipals().then(() => {
      this.loading.principal = false
    })

    // fetch universities
    this.getUniversities().then(() => {
      this.loading.uni = false
    })
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
