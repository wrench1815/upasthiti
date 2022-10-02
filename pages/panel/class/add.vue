<template>
  <section class="container-fluid my-4">
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
          btnCenter
          v-if="loading.main"
        />

        <!-- if not loading -->
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- Start:Class Add Form -->
          <form @submit.prevent="handleSubmit(addClass)">
            <!-- Start:Class name -->
            <Lazy-DashInput
              :label="'Name'"
              :validationRules="{
                required: true,
                min: 3,
              }"
              :data.sync="classs.name"
              :type="'text'"
              :icon="'ri-font-size'"
              isRequired
            />

            <div class="row">
              <!-- Start:Class Session Start -->
              <div class="col-md-6 col-12">
                <label class="form-label"
                  ><div class="d-flex justify-content-center gap-1">
                    <i class="ri-calendar-line text-primary text-gradient"></i>
                    <span class="required">Session Start</span>
                  </div>
                </label>
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <DatePicker
                      v-model="classs.session_start"
                      type="month"
                      placeholder="Select Month"
                      valueType="format"
                      prefix-class="up"
                      format="MMMM YYYY"
                    ></DatePicker>
                    <div
                      class="text-danger transition-all-ease-out-sine"
                      :class="{ 'mb-3': !errors[0], 'mb-1': errors[0] }"
                    >
                      {{ errors[0] }}
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!--End:Class Session Start  -->

              <!-- Start:Department -->
              <div class="col-md-6 col-12">
                <label class="form-label"
                  ><div class="d-flex justify-content-center gap-1">
                    <i
                      class="ri-building-4-fill text-primary text-gradient"
                    ></i>
                    <span class="required">Department</span>
                  </div>
                </label>
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
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
                </div>
              </div>
              <!-- End:Department -->

              <!-- Start:Course -->
              <div class="col-md-6 col-12">
                <label class="form-label"
                  ><div class="d-flex justify-content-center gap-1">
                    <i class="ri-book-mark-fill text-primary text-gradient"></i>
                    <span class="required">Course</span>
                  </div>
                </label>
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      id="courses"
                      placeholder="Select Course"
                      :options="courseList.results"
                      v-model="classs.course"
                      label="code"
                      :loading="loading.course"
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
                </div>
              </div>
              <!-- End:Course -->

              <!-- Start:Student -->
              <div class="col-md-6 col-12">
                <label class="form-label"
                  ><div class="d-flex justify-content-center gap-1">
                    <i class="ri-user-2-fill text-primary text-gradient"></i>
                    <span>Student</span>
                  </div>
                </label>
                <div class="col">
                  <ValidationProvider v-slot="{ errors }" :rules="{}">
                    <v-select
                      id="students"
                      placeholder="Select Students"
                      :options="studentList.results"
                      v-model="classs.student"
                      label="first_name"
                      :loading="loading.student"
                      :closeOnSelect="false"
                      multiple
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
                                :alt="`${first_name}'s profile image`"
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
              <!-- End:Student -->
            </div>

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-rounded bg-gradient-primary text-white mb-4"
              >
                <span class="d-flex align-items-center gap-1">
                  <i class="ri-add-line ri-lg mt-n1"></i>
                  <span>Add Class</span>
                </span>
              </button>
            </div>
          </form>
          <!-- End:Class Add Form -->
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import { mapGetters } from 'vuex'

export default {
  name: 'PanelClassAdd',
  layout: 'panel',

  components: {
    DatePicker,
  },

  data() {
    return {
      loading: {
        main: true,

        // paginate
        paginateDept: true,
        paginateCourse: true,
        paginateStudent: true,

        // data
        dept: true,
        course: true,
        student: true,

        // selected
        deptSelected: false,
        courseSelected: false,
        studentSelected: false,
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
        student: [],
      },

      // Department related
      disableDeptBtns: true,
      departmentList: [],
      deptPayload: {},

      // Course related
      courseList: [],
      disableCourseBtns: true,
      coursePayload: {},

      // Student related
      studentList: [],
      disableStudentBtns: true,
      studentPayload: {},
    }
  },

  computed: {
    ...mapGetters(['loggedInUser']),
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Class',
        url: '/panel/class',
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
        let classs = { ...this.classs }
        classs.college = classs.college.id
        classs.department = classs.department.id
        classs.course = classs.course.id
        classs.teacher = classs.teacher.id
        classs.session_start = this.$moment(classs.session_start).format(
          'YYYY-MM-DD'
        )

        let studentList = []
        if (classs.student && classs.student.length != 0) {
          classs.student.forEach((stud) => {
            studentList.push(stud.id)
          })

          classs.student = studentList
        }

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
                }).then(() => this.$router.push('/panel/class'))
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

    // get College
    async getCollege() {
      if (this.loggedInUser.college_teacher.length != 0) {
        this.college = this.loggedInUser.college_teacher[0]
        this.classs.college = this.loggedInUser.college_teacher[0]
      }
    },

    //////////////////////////////////////////////////////////////////////
    // department
    //////////////////////////////////////////////////////////////////////

    // get list of Departments
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

    // get list of Courses
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

    // get list of Teachers
    getTeacher() {
      this.classs.teacher = this.loggedInUser
    },

    //////////////////////////////////////////////////////////////////////
    // student
    //////////////////////////////////////////////////////////////////////

    // get list of Students
    getStudents() {
      this.disableStudentBtns = true
      this.loading.paginateStudent = true
      this.loading.student = true
      this.studentPayload.college = this.classs.college.id

      return this.$api.student.list(this.studentPayload).then((response) => {
        this.studentList = response.data

        this.disableStudentBtns = false
        this.loading.paginateStudent = false
        this.loading.student = false
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

    //////////////////////////////////////////////////////////////////////
    // selected
    //////////////////////////////////////////////////////////////////////

    // on selecting a department from departmentList
    deptSelected() {
      this.classs.course = ''
    },
  },

  mounted() {
    this.deptPayload.page = 1
    this.coursePayload.page = 1
    this.studentPayload.page = 1

    this.getTeacher()
    this.getCollege()

    this.classs.session_start = this.$moment().format('MMMM YYYY')

    this.getDepartments()
      .then(() => {
        return this.getCourses()
      })
      .then(() => {
        return this.getStudents()
      })
      .then(() => {
        this.loading.deptSelected = true
        this.loading.courseSelected = true

        this.loading.main = false
      })
  },
}
</script>

<style></style>
