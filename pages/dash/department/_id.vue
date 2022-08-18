<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">
          Department Edit
        </h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-info fw-bold" v-if="loading.main">
            <lazy-LoadersText :length="2" size="xs" />
            <lazy-LoadersText :length="1" size="xs" />
          </span>
          <span class="text-info fw-bold" v-else
            >{{ department.name
            }}<span class="text-dark text-lowercase px-2">of</span
            >{{ department.college.name }}</span
          >
        </h3>
      </div>

      <div class="card-body">
        <transition name="scale-in" mode="out-in">
          <Lazy-LoadersForm
            :inputCount="3"
            :btnColor="'info'"
            btnCenter
            v-if="loading.main"
          />
          <!-- for Valdation -->
          <ValidationObserver v-slot="{ handleSubmit }" v-else>
            <!-- start:Department Add Form -->
            <form @submit.prevent="handleSubmit(updateDepartment)">
              <!-- start:College -->
              <div class="row">
                <div class="col-12">
                  <label class="form-label required" for="hod">College</label>
                </div>
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      placeholder="Select College"
                      :options="collegeList.results"
                      v-model="department.college"
                      label="name"
                      @option:selected="collegeSelected"
                      :loading="loading.college"
                      :clearable="false"
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
                      <template #option="{ name, logo }">
                        <div
                          class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                        >
                          <span class="d-flex align-items-center gap-2">
                            <span>
                              <img
                                class="avatar avatar-sm rounded-circle bg-white obj-fit-cover shadow"
                                :data-src="logo"
                                :alt="`${name}'s logo`"
                                v-lazy-load
                              />
                            </span>
                          </span>
                          <span>{{ name }}</span>
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
                            disableCollegeBtns || !collegeList.pagination.next
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
              <!-- end:College -->

              <section v-if="loading.collegeSelected">
                <transition name="scale-in" mode="out-in">
                  <div v-if="loading.searching">
                    <div class="mb-3">
                      <LoadersText size="xs" :length="7" />
                      <LoadersText size="xs" :length="3" />
                      <LoadersText size="xs" :length="1" />
                      <LoadersText size="xs" :length="2" />
                      <LoadersText size="xs" :length="7" />
                    </div>
                    <div class="mb-3">
                      <LoadersText size="xs" :length="5" />
                      <LoadersText size="xs" :length="3" />
                      <LoadersText size="xs" :length="1" />
                      <LoadersText size="xs" :length="3" />
                      <LoadersText size="xs" :length="1" />
                      <LoadersText size="xs" :length="4" />
                      <LoadersText size="xs" :length="3" />
                    </div>
                  </div>

                  <div v-else>
                    <!-- start:Department Name -->
                    <div class="row">
                      <div class="col-12">
                        <label class="form-label required" for="department_name"
                          >Department Name</label
                        >
                      </div>
                      <div class="col">
                        <ValidationProvider
                          v-slot="{ errors }"
                          :rules="{ required: true }"
                        >
                          <v-select
                            placeholder="Select Department"
                            :options="departmentNameList"
                            v-model="department.name"
                            label="department_name"
                            :clearable="false"
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
                    <!-- end:Department Name -->

                    <!-- start:HoD -->
                    <div class="row">
                      <div class="col-12">
                        <label class="form-label required" for="hod">HoD</label>
                      </div>
                      <div class="col">
                        <ValidationProvider
                          v-slot="{ errors }"
                          :rules="{ required: true }"
                        >
                          <v-select
                            placeholder="Select HOD"
                            :options="hodList.results"
                            v-model="department.hod"
                            label="full_name"
                            :loading="loading.hod"
                            :clearable="false"
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
                                      class="avatar avatar-sm rounded-circle bg-white obj-fit-cover shadow"
                                      :data-src="profile_image"
                                      :alt="`${full_name}'s Profile Image`"
                                      v-lazy-load
                                    />
                                  </span>
                                </span>
                                <span>{{ full_name }}</span>
                              </div>
                            </template>

                            <!-- footer for pagination -->
                            <li
                              slot="list-footer"
                              class="d-flex gap-2 justify-content-center align-items-center my-2"
                              v-if="hodList.pagination.count > 1"
                            >
                              <!-- previous button -->
                              <button
                                class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                                :disabled="
                                  disableHODBtns || !hodList.pagination.previous
                                "
                                @click.prevent="hodPaginatePrev"
                                data-mdb-ripple-color="primary"
                              >
                                <i class="ri-arrow-left-s-line"></i>
                              </button>

                              <!-- next button -->
                              <button
                                class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                                :disabled="
                                  disableHODBtns || !hodList.pagination.next
                                "
                                @click.prevent="hodPaginateNext"
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
                    <!-- end:HoD -->
                  </div>
                </transition>
              </section>

              <!-- Submit button -->
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn bg-gradient-info text-white btn-rounded mb-4"
                >
                  Update Department
                </button>
              </div>
            </form>
            <!-- End:Department Add Form -->
          </ValidationObserver>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentEdit',
  layout: 'dash',

  data() {
    return {
      loading: {
        main: true,
        college: true,
        hod: true,
        collegeSelected: false,
        searching: false,
      },
      error: true,

      departmentNameList: [],
      department: {},
      collegeDeptList: {},

      // for HOD
      hodList: {
        pagination: {
          count: 0,
        },
      },
      disableHODBtns: false,
      hodPayload: {},

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
        name: 'Department',
        url: '/dash/department',
      },
      {
        name: 'Edit',
      },
    ])
  },

  methods: {
    // fetch department of given id
    async fetchDepartment() {
      return this.$api.department
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.department = response.data

          this.error = false
        })
        .catch((err) => {
          this.error = true
          this.loading.college = true

          this.collegeList = {}

          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'Department not Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong. Unable to fetch Department.',
            })
          }
        })
    },

    // update Department
    async updateDepartment() {
      try {
        const department = {
          name: this.department.name.id,
          hod: this.department.hod.id,
          college: this.department.college.id,
        }

        this.$swal({
          title: 'Updating Department',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are updating the Department',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.department
              .update(this.$route.params.id, department)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Update Successful',
                  icon: 'success',
                  type: 'success',
                  text: 'Department has been updated Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/department'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Update Department`,
                })
              })
          },
        })
      } catch (error) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to update Department.<br/>Try Again`,
        })
      }
    },

    // get list of HODs of College
    async getHodList() {
      this.hodPayload.college = this.department.college.id
      this.hodPayload.exclude_college = this.department.college.id

      this.loading.hod = true
      this.disableHODBtns = true

      return this.$api.user
        .listHod(this.hodPayload)
        .then((response) => {
          this.hodList = response.data

          // append this.department.hod at the start of this.hodList.results
          this.hodList.results.unshift(this.department.hod)

          this.disableHODBtns = false
          this.loading.hod = false
        })
        .catch((err) => {
          this.$nuxt.error({
            statusCode: 400,
            message: 'Something went Wrong. Unable to fetch HOD List.',
          })
        })
    },

    //  on HOD filter previous
    hodPaginatePrev() {
      if (this.hodList.pagination.previous) {
        this.hodPayload.page = this.hodPayload.page - 1
        this.getHodList()
      }
    },

    // on HOD filter next
    hodPaginateNext() {
      if (this.hodList.pagination.next) {
        this.hodPayload.page = this.hodPayload.page + 1
        this.getHodList()
      }
    },

    // get list of Department Names
    async getDepartmentNameList() {
      this.loading.dept = true

      let payload = {
        exclude_college: this.department.college.id,
      }

      return this.$api.department
        .typeList(payload)
        .then((response) => {
          this.departmentNameList = response.data

          // append this.department.name_rel at the start of this.departmentNameList
          this.departmentNameList.unshift(this.department.name_rel)
        })
        .catch((err) => {
          this.$nuxt.error({
            statusCode: 400,
            message:
              'Something went Wrong. Unable to fetch Department Name List.',
          })
        })
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

    // when a college is selected from options
    async collegeSelected() {
      this.loading.collegeSelected = true
      this.loading.searching = true

      return this.getDepartmentNameList()
        .then(() => {
          return this.getHodList()
        })
        .then(() => {
          this.loading.searching = false
        })
    },

    collegeOpened() {
      this.loading.collegeSelected = false
    },
  },

  mounted() {
    this.collegePayload.page = 1

    this.hodPayload.page = 1

    this.fetchDepartment().then(() => {
      if (!this.error) {
        return this.getDepartmentNameList()
          .then(() => {
            return this.getCollegeList()
          })
          .then(() => {
            return this.getHodList()
          })
          .then(() => {
            this.loading.main = false
            this.loading.collegeSelected = true
          })
      }
    })

    // this.fetchDepartment()
    //   .then(() => {
    //     this.getDepartmentNameList().then(() => {
    //       for (let i = 0; i < this.departmentNameList.length; i++) {
    //         if (
    //           this.departmentNameList[i].label ==
    //           this.department.department_name
    //         ) {
    //           this.department.department_name = this.departmentNameList[i]
    //         }
    //       }
    //     })
    //   })
    //   .then(() => {
    //     this.getHodList().then(() => {
    //       for (let i = 0; i < this.hodList.length; i++) {
    //         if (this.hodList[i].id == this.department.hod) {
    //           this.department.hod = this.hodList[i]
    //         }
    //       }
    //     })
    //   })
    //   .then(() => {
    //     this.getCollegeList().then(() => {
    //       for (let i = 0; i < this.collegeList.length; i++) {
    //         if (this.collegeList[i].id == this.department.college.id) {
    //           this.department.college = this.collegeList[i]
    //         }
    //       }
    //     })
    //   })
    //   .then(() => {
    //     this.loading = false
    //   })
  },
}
</script>

<style scoped></style>
