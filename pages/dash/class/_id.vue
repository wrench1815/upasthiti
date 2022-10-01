<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Class Edit</h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-info fw-bold" v-if="loading.main">
            <lazy-LoadersText :length="2" size="xs" />
            <lazy-LoadersText :length="1" size="xs" />
          </span>
          <span class="text-info fw-bold" v-else>{{ classs.name }}</span>
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

          <!-- if not loading -->
          <!-- for Valdation -->
          <ValidationObserver v-slot="{ handleSubmit }" v-else>
            <!-- Start:Class Edit Form -->
            <form @submit.prevent="handleSubmit(updateClass)">
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
                      <i
                        class="ri-calendar-line text-primary text-gradient"
                      ></i>
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

                <!-- Start:Class College -->
                <div class="col-md-6 col-12">
                  <label class="form-label"
                    ><div class="d-flex justify-content-center gap-1">
                      <i
                        class="ri-government-fill text-primary text-gradient"
                      ></i>
                      <span class="required">College</span>
                    </div>
                  </label>
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
                <div class="col-md-6 col-12">
                  <label class="form-label"
                    ><div class="d-flex justify-content-center gap-1">
                      <i
                        class="ri-book-mark-fill text-primary text-gradient"
                      ></i>
                      <span class="required">Course</span>
                    </div>
                  </label>
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
                              disableCourseBtns ||
                              !courseList.pagination.previous
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
                <div class="col-md-6 col-12">
                  <label class="form-label"
                    ><div class="d-flex justify-content-center gap-1">
                      <i class="ri-user-2-fill text-primary text-gradient"></i>
                      <span class="required">Teacher</span>
                    </div>
                  </label>
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
                        @option:selected="teacherSelected"
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
                                  class="avatar avatar-sm border rounded-circle bg-white obj-fit-cover"
                                  :data-src="profile_image"
                                  :alt="`${full_name}'s profile image`"
                                  v-lazy-load
                                />
                              </span>
                              <span>{{ full_name }}</span>
                            </span>
                          </div>
                        </template>

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

                <!-- Start:Student -->
                <div class="col-md-6 col-12">
                  <label class="form-label"
                    ><div class="d-flex justify-content-center gap-1">
                      <i class="ri-user-2-fill text-primary text-gradient"></i>
                      <span>Student</span>
                    </div>
                  </label>
                  <div class="col">
                    <ValidationProvider
                      v-slot="{ errors }"
                      :rules="{}"
                      v-if="loading.teacherSelected"
                    >
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

                    <div v-else class="mt-n2 mb-3">
                      <LoadersText size="xs" :length="7" />
                      <LoadersText size="xs" :length="3" />
                      <LoadersText size="xs" :length="1" />
                      <LoadersText size="xs" :length="2" />
                      <LoadersText size="xs" :length="7" />
                    </div>
                  </div>
                </div>
                <!-- End:Student -->
              </div>

              <!-- Submit button -->
              <div class="d-flex justify-content-center gap-3 flex-wrap mt-2">
                <button
                  type="submit"
                  class="btn btn-rounded bg-gradient-info text-white"
                >
                  <span class="d-flex align-items-center gap-1">
                    <i class="ri-edit-2-fill ri-lg mt-n1"></i>
                    <span>Update Class</span>
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
            <!-- End:Class Edit Form -->
          </ValidationObserver>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'DashClassEdit',
  layout: 'dash',

  components: {
    DatePicker,
  },

  data() {
    return {
      loading: {
        main: true,

        // paginate
        paginateCollege: true,
        paginateDept: true,
        paginateCourse: true,
        paginateTeacher: true,
        paginateStudent: true,

        // data
        college: true,
        dept: true,
        course: true,
        teacher: true,
        student: true,

        // selected
        collegeSelected: false,
        deptSelected: false,
        courseSelected: false,
        teacherSelected: false,
        studentSelected: false,
      },
      error: true,

      classs: {},
      oldClasss: {},

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

      // Student related
      studentList: [],
      disableStudentBtns: true,
      studentPayload: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Class',
        url: '/dash/class',
      },
      {
        name: 'Edit',
      },
    ])
  },

  methods: {
    resetData() {
      this.resetClassData().then(() => {
        this.loading.collegeSelected = true
        this.loading.deptSelected = true
        this.loading.courseSelected = true
        this.loading.main = false
      })
    },

    async resetClassData() {
      this.loading.collegeSelected = false
      this.loading.deptSelected = false
      this.loading.courseSelected = false
      this.loading.main = true

      return new Promise((resolve, reject) => {
        this.classs = { ...this.oldClasss }

        resolve()
      })
    },

    // retrieve Class
    async retrieveClass() {
      this.loading.main = true

      return this.$api.class
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.classs = response.data
          this.classs.session_start = this.$moment().format('MMMM YYYY')

          this.oldClasss = { ...this.classs }

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.classs = {}

            this.$nuxt.error({
              statusCode: 404,
              message: 'No Classes Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    // send Class data to server to create a new Class
    async updateClass() {
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
          title: 'Updating Class',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Updating a New Class',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.class
              .update(classs.id, classs)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'Class has been Updated Successfully',
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
                  html: `Failed to Update Class.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Update Class.<br/>Try Again`,
        })
      }
    },

    //////////////////////////////////////////////////////////////////////
    // college
    //////////////////////////////////////////////////////////////////////

    // get list of College
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
    getTeachers() {
      this.disableTeacherBtns = true
      this.loading.paginateTeacher = true
      this.loading.teacher = true
      this.teacherPayload.college = this.classs.college.id

      return this.$api.user
        .listTeacher(this.teacherPayload)
        .then((response) => {
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

    // on selecting a college from collegeList
    collegeSelected() {
      this.loading.collegeSelected = false
      this.loading.deptSelected = false
      this.loading.courseSelected = false
      this.loading.teacherSelected = false
      this.classs.department = ''
      this.classs.course = ''
      this.classs.teacher = ''
      this.classs.student = []

      return this.getDepartments().then(() => {
        this.loading.collegeSelected = true
      })
    },

    // on selecting a department from departmentList
    deptSelected() {
      this.loading.deptSelected = false
      this.loading.courseSelected = false
      this.classs.course = ''
      this.classs.teacher = ''

      return this.getCourses().then(() => {
        this.loading.deptSelected = true
      })
    },

    // on selecting a course from courseList
    courseSelected() {
      this.loading.courseSelected = false
      this.classs.teacher = ''

      return this.getTeachers().then(() => {
        this.loading.courseSelected = true
      })
    },

    // on selecting a teacher from teacherList
    teacherSelected() {
      this.loading.teacherSelected = false

      return this.getStudents().then(() => {
        this.loading.teacherSelected = true
      })
    },
  },

  mounted() {
    this.deptPayload.page = 1
    this.collegePayload.page = 1
    this.coursePayload.page = 1
    this.teacherPayload.page = 1
    this.studentPayload.page = 1

    // fetch college
    this.retrieveClass()
      .then(() => {
        return this.getColleges()
      })
      .then(() => {
        return this.getDepartments()
      })
      .then(() => {
        return this.getCourses()
      })
      .then(() => {
        return this.getTeachers()
      })
      .then(() => {
        return this.getStudents()
      })
      .then(() => {
        if (this.error) {
          this.$nuxt.error({
            statusCode: 400,
            message: 'Something went Wrong',
          })
        } else {
          this.loading.collegeSelected = true
          this.loading.deptSelected = true
          this.loading.courseSelected = true
          this.loading.teacherSelected = true

          this.loading.main = false

          document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new this.$mdb.Input(formOutline).init()
          })
        }
      })
  },
}
</script>

<style scoped></style>
