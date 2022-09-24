<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Add Class</h1>
        <h3 class="text-secondary text-capitalize">Add a New Class</h3>
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
          <!-- start:Class Add Form -->
          <form @submit.prevent="handleSubmit(addClass)">
            <!-- start:Class name -->
            <Lazy-DashInput
              :label="'Name'"
              :validationRules="{
                required: true,
                min: 3,
              }"
              :data.sync="classs.name"
              :type="'text'"
              :icon="'ri-phone-fill'"
              isRequired
            />
            <!-- End:Class name -->

            <div class="row">
              <!-- start:Class College -->
              <div class="col-md-6 col-12">
                <label class="form-label required"
                  ><i class="ri-admin-fill text-primary text-gradient"></i>
                  College</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      id="college"
                      placeholder="Select College"
                      :options="collegeList.results"
                      v-model="classs.college"
                      label="alias_name"
                      :loading="loading.paginateCollege"
                      :clearable="false"
                      @option:selected="collegeSelected"
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
                                class="avatar avatar-sm border rounded-circle bg-white obj-fit-cover"
                                :data-src="logo"
                                :alt="`${alias_name}'s Logo`"
                                v-lazy-load
                              />
                            </span>
                            <span class="text-capitalize">{{
                              alias_name
                            }}</span>
                          </span>
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
              <!--End:Class College  -->

              <!-- Start:Department -->
              <div class="col-lg-6 col-md-6 col-12">
                <label class="form-label required"
                  ><i class="ri-government-fill text-primary text-gradient"></i>
                  Department</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                    v-if="loading.collegeSelected"
                  >
                    <v-select
                      id="departments"
                      placeholder="Select Department"
                      :options="departmentList.results"
                      v-model="classs.department"
                      label="name"
                      :loading="loading.dept"
                      :clearable="false"
                      @option:selected="deptSelected"
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
                      <!-- <template #option="{ name, logo }">
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
                      </template> -->

                      <!-- footer for pagination -->
                      <li
                        slot="list-footer"
                        class="d-flex gap-2 justify-content-center align-items-center my-2"
                        v-if="departmentList.pagination.count > 1"
                      >
                        <!-- previous button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableDeptBtns ||
                            !departmentList.pagination.previous
                          "
                          @click.prevent="deptPaginatePrev"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>

                        <!-- next button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableDeptBtns || !departmentList.pagination.next
                          "
                          @click.prevent="deptPaginateNext"
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

                  <div v-else class="mt-n2 mb-3">
                    <LoadersText size="xs" :length="7" />
                    <LoadersText size="xs" :length="3" />
                    <LoadersText size="xs" :length="1" />
                    <LoadersText size="xs" :length="2" />
                    <LoadersText size="xs" :length="7" />
                  </div>
                </div>
              </div>
              <!-- End:Department -->

              <!-- Start:Course -->
              <div class="col-lg-6 col-md-6 col-12">
                <label class="form-label required"
                  ><i class="ri-government-fill text-primary text-gradient"></i>
                  Course</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                    v-if="loading.deptSelected"
                  >
                    <v-select
                      id="courses"
                      placeholder="Select Course"
                      :options="courseList.results"
                      v-model="classs.course"
                      label="code"
                      :loading="loading.course"
                      :clearable="false"
                      @option:selected="courseSelected"
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
                      <!-- <template #option="{ name, logo }">
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
                      </template> -->

                      <!-- footer for pagination -->
                      <li
                        slot="list-footer"
                        class="d-flex gap-2 justify-content-center align-items-center my-2"
                        v-if="courseList.pagination.count > 1"
                      >
                        <!-- previous button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableCourseBtns || !courseList.pagination.previous
                          "
                          @click.prevent="coursePaginatePrev"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>

                        <!-- next button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableCourseBtns || !courseList.pagination.next
                          "
                          @click.prevent="coursePaginateNext"
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

                  <div v-else class="mt-n2 mb-3">
                    <LoadersText size="xs" :length="7" />
                    <LoadersText size="xs" :length="3" />
                    <LoadersText size="xs" :length="1" />
                    <LoadersText size="xs" :length="2" />
                    <LoadersText size="xs" :length="7" />
                  </div>
                </div>
              </div>
              <!-- End:Course -->

              <!-- Start:Teacher -->
              <div class="col-lg-6 col-md-6 col-12">
                <label class="form-label required"
                  ><i class="ri-government-fill text-primary text-gradient"></i>
                  Teacher</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                    v-if="loading.courseSelected"
                  >
                    <v-select
                      id="teachers"
                      placeholder="Select Teacher"
                      :options="teacherList.results"
                      v-model="classs.teacher"
                      label="full_name"
                      :loading="loading.teacher"
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
                      <!-- <template #option="{ name, logo }">
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
                      </template> -->

                      <!-- footer for pagination -->
                      <li
                        slot="list-footer"
                        class="d-flex gap-2 justify-content-center align-items-center my-2"
                        v-if="teacherList.pagination.count > 1"
                      >
                        <!-- previous button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableTeacherBtns ||
                            !teacherList.pagination.previous
                          "
                          @click.prevent="teacherPaginatePrev"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>

                        <!-- next button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableTeacherBtns || !teacherList.pagination.next
                          "
                          @click.prevent="teacherPaginateNext"
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

                  <div v-else class="mt-n2 mb-3">
                    <LoadersText size="xs" :length="7" />
                    <LoadersText size="xs" :length="3" />
                    <LoadersText size="xs" :length="1" />
                    <LoadersText size="xs" :length="2" />
                    <LoadersText size="xs" :length="7" />
                  </div>
                </div>
              </div>
              <!-- End:Teacher -->
            </div>

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-rounded bg-gradient-primary text-white mb-4"
              >
                Add Class
              </button>
            </div>
          </form>
          <!-- End:Class Add Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashClassAdd',
  layout: 'dash',

  data() {
    return {
      loading: {
        main: true,

        // paginate
        paginateCollege: true,
        paginateDept: true,
        paginateCourse: true,
        paginateTeacher: true,

        // data
        college: true,
        dept: true,
        course: true,
        teacher: true,

        // selected
        collegeSelected: false,
        deptSelected: false,
        courseSelected: false,
        teacherSelected: false,
      },
      error: true,

      classs: {
        name: '',
        code: '',
        session_start: '',
        session_end: '',
        college: '',
        department: '',
        course: '',
        teacher: '',
        student: '',
      },

      // Department related
      disableDeptBtns: true,
      departmentList: [],
      deptPayload: {},

      // College related
      collegeList: [],
      disableCollegeBtns: true,
      collegePayload: {},

      // Course related
      courseList: [],
      disableCourseBtns: true,
      coursePayload: {},

      // Teacher related
      teacherList: [],
      disableTeacherBtns: true,
      teacherPayload: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Class',
        url: '/dash/class',
      },
      {
        name: 'Add',
      },
    ])
  },

  methods: {
    // send Class data to server to create a new Class
    async addClass() {
      try {
        let classs = this.classs
        classs.college = classs.college.id
        classs.department = classs.department.id

        this.$swal({
          title: 'Adding Class',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Adding a New Class',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.class
              .create(classs)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'Class has been added Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/class'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Add Class.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Add Class.<br/>Try Again`,
        })
      }
    },

    //////////////////////////////////////////////////////////////////////
    // college
    //////////////////////////////////////////////////////////////////////

    // fetch colleges for select
    async getColleges() {
      this.disableCollegeBtns = true
      this.loading.paginateCollege = true

      return this.$api.college.list(this.collegePayload).then((response) => {
        this.collegeList = response.data

        this.disableCollegeBtns = false
        this.loading.paginateCollege = false
      })
    },

    // on college select next
    collegePaginateNext() {
      if (this.collegeList.pagination.next) {
        this.collegePayload.page = this.collegePayload.page + 1

        this.getColleges()
      }
    },

    // on college select previous
    collegePaginatePrev() {
      if (this.collegeList.pagination.previous) {
        this.collegePayload.page = this.collegePayload.page - 1

        this.getColleges()
      }
    },

    //////////////////////////////////////////////////////////////////////
    // department
    //////////////////////////////////////////////////////////////////////

    // fetch Departments for select
    async getDepartments() {
      this.disableDeptBtns = true
      this.loading.paginateDept = true
      this.loading.dept = true
      this.deptPayload.college = this.classs.college.id

      return this.$api.department.list(this.deptPayload).then((response) => {
        this.departmentList = response.data

        this.disableDeptBtns = false
        this.loading.paginateDept = false
        this.loading.dept = false
      })
    },

    // on Department select next
    deptPaginateNext() {
      if (this.departmentList.pagination.next) {
        this.deptPayload.page = this.deptPayload.page + 1
        this.getDepartments()
      }
    },

    // on Department select previous
    deptPaginatePrev() {
      if (this.departmentList.pagination.previous) {
        this.deptPayload.page = this.deptPayload.page - 1
        this.getDepartments()
      }
    },

    //////////////////////////////////////////////////////////////////////
    // course
    //////////////////////////////////////////////////////////////////////

    getCourses() {
      this.disableCourseBtns = true
      this.loading.paginateCourse = true
      this.loading.course = true
      this.coursePayload.university = this.classs.college.university.id

      return this.$api.course.list(this.coursePayload).then((response) => {
        this.courseList = response.data

        this.disableCourseBtns = false
        this.loading.paginateCourse = false
        this.loading.course = false
      })
    },

    // on Course select next
    coursePaginateNext() {
      if (this.courseList.pagination.next) {
        this.coursePayload.page = this.coursePayload.page + 1
        this.getCourses()
      }
    },

    // on Course select previous
    coursePaginatePrev() {
      if (this.courseList.pagination.previous) {
        this.coursePayload.page = this.coursePayload.page - 1
        this.getCourses()
      }
    },

    //////////////////////////////////////////////////////////////////////
    // teacher
    //////////////////////////////////////////////////////////////////////

    getTeachers() {
      this.disableTeacherBtns = true
      this.loading.paginateTeacher = true
      this.loading.teacher = true
      this.teacherPayload.college = this.classs.college.id

      return this.$api.user.list(this.teacherPayload).then((response) => {
        this.teacherList = response.data

        this.disableTeacherBtns = false
        this.loading.paginateTeacher = false
        this.loading.teacher = false
      })
    },

    // on Teacher select next
    teacherPaginateNext() {
      if (this.teacherList.pagination.next) {
        this.teacherPayload.page = this.teacherPayload.page + 1
        this.getTeachers()
      }
    },

    // on Teacher select previous
    teacherPaginatePrev() {
      if (this.teacherList.pagination.previous) {
        this.teacherPayload.page = this.teacherPayload.page - 1
        this.getTeachers()
      }
    },

    //////////////////////////////////////////////////////////////////////
    // selected
    //////////////////////////////////////////////////////////////////////

    collegeSelected() {
      this.loading.collegeSelected = false
      this.loading.deptSelected = false
      this.loading.courseSelected = false
      this.classs.department = ''
      this.classs.course = ''
      this.classs.teacher = ''

      return this.getDepartments().then(() => {
        this.loading.collegeSelected = true
      })
    },

    deptSelected() {
      this.loading.deptSelected = false
      this.loading.courseSelected = false
      this.classs.course = ''
      this.classs.teacher = ''

      return this.getCourses().then(() => {
        this.loading.deptSelected = true
      })
    },

    courseSelected() {
      this.loading.courseSelected = false
      this.classs.teacher = ''

      return this.getTeachers().then(() => {
        this.loading.courseSelected = true
      })
    },
  },

  mounted() {
    this.deptPayload.page = 1
    this.collegePayload.page = 1
    this.coursePayload.page = 1
    this.teacherPayload.page = 1

    this.getColleges().then(() => {
      this.loading.main = false

      document.querySelectorAll('.form-outline').forEach((formOutline) => {
        new this.$mdb.Input(formOutline).init()
      })
    })
  },
}
</script>

<style scoped></style>
