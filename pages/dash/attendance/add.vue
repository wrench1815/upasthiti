<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">
          Add Attendance
        </h1>
        <h3 class="text-secondary text-capitalize">Add a New Attendance</h3>
      </div>

      <div class="card-body">
        <!-- if loading -->
        <Lazy-LoadersForm
          :inputCount="6"
          :btnColor="'primary'"
          showImage
          btnCenter
          v-if="loading.main"
        />

        <!-- if not loading -->
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- start:Attendance Add Form -->
          <form @submit.prevent="handleSubmit(addAttendance)">
            <div class="row">
              <!--Start:Class -->
              <div class="col-lg-6 col-md-6 col-12">
                <label class="form-label required"
                  ><i class="ri-database-fill text-primary text-gradient"></i>
                  Class</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      id="classes"
                      placeholder="Select Class"
                      :options="classList.results"
                      v-model="attendance.class"
                      label="name"
                      :loading="loading.paginateClass"
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
                      <template #option="{ name, college }">
                        <div
                          class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                        >
                          <span class="d-flex align-items-center gap-2">
                            <span>
                              {{ name }}
                            </span>
                            <span>({{ college.alias_name }})</span>
                          </span>
                        </div>
                      </template>

                      <!-- footer for pagination -->
                      <li
                        slot="list-footer"
                        class="d-flex gap-2 justify-content-center align-items-center my-2"
                        v-if="classList.pagination.count > 1"
                      >
                        <!-- previous button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableClassBtns || !classList.pagination.previous
                          "
                          @click.prevent="classPaginatePrev"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>

                        <!-- next button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableClassBtns || !classList.pagination.next
                          "
                          @click.prevent="classPaginateNext"
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
              <!-- end:Class-->

              <!--Start:Class -->
              <div class="col-lg-6 col-md-6 col-12">
                <label class="form-label required"
                  ><i class="ri-government-fill text-primary text-gradient"></i>
                  Student</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      id="classes"
                      placeholder="Select Student"
                      :options="studentList.results"
                      v-model="attendance.student"
                      label="first_name"
                      :loading="loading.paginateStudent"
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
                      <template
                        #option="{ first_name, last_name, profile_image }"
                      >
                        <div
                          class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                        >
                          <span class="d-flex align-items-center gap-2">
                            <span>
                              <img
                                class="avatar avatar-sm border rounded-circle bg-white obj-fit-cover"
                                :data-src="profile_image"
                                :alt="`${first_name}'s logo`"
                                v-lazy-load
                              />
                            </span>
                            <span>{{ first_name }} {{ last_name }}</span>
                          </span>
                        </div>
                      </template>

                      <!-- footer for pagination -->
                      <li
                        slot="list-footer"
                        class="d-flex gap-2 justify-content-center align-items-center my-2"
                        v-if="studentList.pagination.count > 1"
                      >
                        <!-- previous button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableStudentBtns ||
                            !studentList.pagination.previous
                          "
                          @click.prevent="studentPaginatePrev"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>

                        <!-- next button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableStudentBtns || !studentList.pagination.next
                          "
                          @click.prevent="studentPaginateNext"
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
              <!-- end:Class-->
            </div>

            <div class="row justify-content-center g-3 pb-4">
              <div class="col-12 d-flex justify-content-center">
                <span> Attendance Status </span>
              </div>
              <!-- start:is_present -->
              <div
                class="col-6 col-lg-3 col-md-3 d-flex justify-content-end justify-content-md-center align-items-center"
              >
                <label
                  class="form-check-label ripple"
                  data-mdb-ripple-unbound="true"
                  data-mdb-ripple-radius="40"
                  data-mdb-ripple-color="primary"
                  for="is_present"
                >
                  <div
                    class="d-flex justify-content-center align-items-center gap-2 badge badge-fs py-2 rounded-pill border user-select-none"
                    :class="{
                      'border-transparent bg-gradient-success text-white shadow-3-strong':
                        attendance.is_present,
                      'border-success text-success text-gradient bg-white fw-bolder':
                        !attendance.is_present,
                    }"
                  >
                    <i class="ri-check-double-fill no-transition"></i>
                    Present
                  </div>
                </label>
                <input
                  class="form-check-input me-2 d-none"
                  type="checkbox"
                  id="is_present"
                  v-model="attendance.is_present"
                />
              </div>
              <!-- end:is_present -->

              <!-- start:is_late -->
              <div
                class="col-6 col-lg-3 col-md-3 d-flex justify-content-end justify-content-md-center align-items-center"
              >
                <label
                  class="form-check-label ripple"
                  data-mdb-ripple-unbound="true"
                  data-mdb-ripple-radius="40"
                  data-mdb-ripple-color="primary"
                  for="is_late"
                >
                  <div
                    class="d-flex justify-content-center align-items-center gap-2 badge badge-fs py-2 rounded-pill border user-select-none"
                    :class="{
                      'border-transparent bg-gradient-warning text-white shadow-3-strong':
                        attendance.is_late,
                      'border-warning text-warning text-gradient bg-white fw-bolder':
                        !attendance.is_late,
                    }"
                  >
                    <i class="ri-check-fill no-transition"></i>
                    Late
                  </div>
                </label>
                <input
                  class="form-check-input me-2 d-none"
                  type="checkbox"
                  id="is_late"
                  v-model="attendance.is_late"
                />
              </div>
              <!-- end:is_late -->

              <!-- start:is_absent -->
              <div
                class="col-6 col-lg-3 col-md-3 d-flex justify-content-end justify-content-md-center align-items-center"
              >
                <label
                  class="form-check-label ripple"
                  data-mdb-ripple-unbound="true"
                  data-mdb-ripple-radius="40"
                  data-mdb-ripple-color="primary"
                  for="is_absent"
                >
                  <div
                    class="d-flex justify-content-center align-items-center gap-2 badge badge-fs py-2 rounded-pill border user-select-none"
                    :class="{
                      'border-transparent bg-gradient-danger text-white shadow-3-strong':
                        attendance.is_absent,
                      'border-danger text-danger text-gradient bg-white fw-bolder':
                        !attendance.is_absent,
                    }"
                  >
                    <i class="ri-close-fill no-transition"></i>
                    Absent
                  </div>
                </label>
                <input
                  class="form-check-input me-2 d-none"
                  type="checkbox"
                  id="is_absent"
                  v-model="attendance.is_absent"
                />
              </div>
              <!-- end:is_absent -->
            </div>

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-rounded bg-gradient-primary text-white mb-4"
              >
                Add Attendance
              </button>
            </div>
          </form>
          <!-- End:Attendance Add Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeAdd',
  layout: 'dash',

  watch: {
    'attendance.is_late'() {
      if (this.attendance.is_late) {
        this.attendance.is_present = true
        this.attendance.is_absent = false
      }
    },
    'attendance.is_absent'() {
      if (this.attendance.is_absent) {
        this.attendance.is_present = false
        this.attendance.is_late = false
      }
    },
    'attendance.is_present'() {
      if (this.attendance.is_present) {
        this.attendance.is_absent = false
      }
    },
  },

  data() {
    return {
      loading: {
        main: true,
        paginateClass: true,
        paginateStudent: true,
      },
      error: true,

      attendance: {
        college: '',
        class: '',
        date: '',
        is_present: false,
        is_late: false,
        is_absent: true,
      },

      // class related
      disableClassBtns: true,
      classList: [],
      classPayload: {},

      // student related
      studentList: [],
      disableStudentBtns: true,
      studentPayload: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Attendance',
        url: '/dash/attendance',
      },
      {
        name: 'Add',
      },
    ])
  },

  methods: {
    // add Attendance
    async addAttendance() {
      try {
        let attendance = this.attendance
        attendance.college = attendance.college.id
        attendance.student = attendance.student.id

        this.$swal({
          title: 'Adding Attendance',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Adding Attendance',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.attendance
              .create(attendance)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'Attendance has been added Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/attendance'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Add Attendance.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Add Attendance.<br/>Try Again`,
        })
      }
    },

    // fetch students for select
    async getStudents() {
      this.disableStudentBtns = true
      this.loading.paginateStudent = true

      return this.$api.student.list(this.studentPayload).then((response) => {
        this.studentList = response.data

        this.disableStudentBtns = false
        this.loading.paginateStudent = false
      })
    },

    // on student select next
    studentPaginateNext() {
      if (this.studentList.pagination.next) {
        this.studentPayload.page = this.studentPayload.page + 1

        this.getStudents()
      }
    },

    // on student select previous
    studentPaginatePrev() {
      if (this.studentList.pagination.previous) {
        this.studentPayload.page = this.studentPayload.page - 1

        this.getStudents()
      }
    },

    // fetch classes for select
    async getClasses() {
      this.disableClassBtns = true
      this.loading.paginateClass = true

      return this.$api.class.list(this.classPayload).then((response) => {
        this.classList = response.data

        this.disableClassBtns = false
        this.loading.paginateClass = false
      })
    },

    // on class select next
    classPaginateNext() {
      if (this.classList.pagination.next) {
        this.classPayload.page = this.classPayload.page + 1
        this.getClasses()
      }
    },

    // on class select previous
    classPaginatePrev() {
      if (this.classList.pagination.previous) {
        this.classPayload.page = this.classPayload.page - 1
        this.getClasses()
      }
    },
  },

  mounted() {
    this.classPayload.page = 1
    this.studentPayload.page = 1

    this.getClasses()
      .then(() => {
        return this.getStudents()
      })
      .then(() => {
        this.loading.main = false

        document.querySelectorAll('.form-outline').forEach((formOutline) => {
          new this.$mdb.Input(formOutline).init()
        })
      })
  },
}
</script>

<style scoped>
.badge-fs {
  font-size: 0.9rem !important;
}

.border-transparent {
  border-color: transparent !important;
}
</style>
