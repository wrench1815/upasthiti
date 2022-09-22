<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Title
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Code</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            University
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Practical
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Created on
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- start:no courses fallback -->
        <tr v-if="courses.length == 0">
          <td colspan="5" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Courses found" />
          </td>
        </tr>
        <!-- end:no courses fallback -->

        <!-- start:course -->
        <template>
          <tr v-for="course in courses" :key="course.id">
            <!-- start:Course Title -->
            <td>
              <div class="w-10-rem text-wrap d-inline-block">
                <NuxtLink
                  :to="`/dash/course/detail?id=${course.id}`"
                  class="fw-bold mb-1 text-primary d-inline"
                >
                  <span class="better-underline">
                    {{ course.title ? course.title : '----' }}
                  </span>
                  <span class="link"></span>
                </NuxtLink>
              </div>
            </td>
            <!-- end:Course Title -->

            <!-- start:course Code -->
            <td>
              <div class="d-flex align-items-center">
                <p class="fw-bold mb-0 text-dark text-nowrap">
                  {{ course.code ? course.code : '----' }}
                </p>
              </div>
            </td>
            <!-- end:course Code -->

            <!-- start:Course University -->
            <td>
              <div class="d-flex align-items-center">
                <!-- Logo -->
                <div class="avatar rounded-circle">
                  <img
                    :data-src="`${
                      course.university.logo
                        ? course.university.logo
                        : defaultUniversityImage
                    }`"
                    class="avatar rounded-circle obj-pos-center obj-fit-cover shadow"
                    :alt="`${course.university.logo}'s logo`"
                    v-lazy-load
                  />
                </div>

                <!-- Name -->
                <div class="ms-3">
                  <div
                    class="fw-bold mb-0 text-dark w-10-rem text-wrap d-inline-block"
                  >
                    <span class="d-inline">
                      {{
                        course.university.name ? course.university.name : '----'
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <!-- end:Course University -->

            <!-- start:course Code -->
            <td>
              <div class="d-flex align-items-center justify-content-center">
                <i
                  class="ri-checkbox-circle-fill text-success ri-lg"
                  v-if="course.is_practical"
                ></i>
                <i class="ri-close-circle-fill text-danger ri-lg" v-else></i>
              </div>
            </td>
            <!-- end:course Code -->

            <!-- start:Date Created -->
            <td>
              <div class="text-dark mb-0 text-nowrap">
                {{
                  course.created_on
                    ? $nuxt.$utils.dateFormat(course.created_on)
                    : '----'
                }}
              </div>
            </td>
            <!-- end:Date Created -->

            <!-- start:Actions -->
            <td>
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              >
                <!-- detail -->
                <NuxtLink
                  :to="`/dash/course/detail?id=${course.id}`"
                  class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-eye-fill ri-lg"></i
                ></NuxtLink>
                <!-- edit -->
                <NuxtLink
                  :to="`/dash/course/${course.id}`"
                  class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-edit-2-fill ri-lg"></i
                ></NuxtLink>
                <!-- destroy -->
                <a
                  @click="deleteCourse(course.id)"
                  class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-delete-bin-fill ri-lg"></i>
                </a>
              </div>
            </td>
            <!-- end:Actions -->
          </tr>
        </template>
        <!-- end:course -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashCourseTable',

  props: {
    courses: {
      type: Array,
      required: true,
    },
  },

  computed: {
    defaultUniversityImage() {
      return this.$config.defaultUniversityImage
    },
  },

  methods: {
    deleteCourse(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this Course!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the Course',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()
              this.$api.course
                .destroy(id)
                .then(() => {
                  this.$swal.hideLoading()
                  this.$swal.close()
                  this.$swal({
                    title: 'Deleted!',
                    text: 'Course has been deleted.',
                    icon: 'success',
                    type: 'success',
                  }).then(() => {
                    let courseList = this.courses.filter(
                      (course) => course.id !== id
                    )
                    this.$emit('update:courses', courseList)
                  })
                })
                .catch((err) => {
                  this.$swal.close()
                  this.$swal({
                    title: 'Error',
                    text: err.response.data.detail,
                    icon: 'error',
                    type: 'error',
                  })
                })
            },
          })
        }
      })
    },
  },
}
</script>

<style scoped>
.badge-fs {
  font-size: 0.9rem !important;
}

table th:first-child {
  border-radius: 10px 0 0 10px !important;
}

table th:last-child {
  border-radius: 0 10px 10px 0 !important;
}
</style>
