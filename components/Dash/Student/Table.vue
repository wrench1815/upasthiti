<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Roll No.
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Name</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Contact
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
        <!-- start:no users -->
        <!-- <tr v-if="users.length == 0">
          <td colspan="6" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Users found" />
          </td>
        </tr> -->
        <!-- end:no users -->

        <!-- start:has users -->
        <template>
          <tr v-for="student in 6" :key="student">
            <!-- start:Roll no. -->
            <td>
              <div class="d-flex align-items-center">
                <p class="fw-bold mb-0 text-dark text-nowrap">
                  {{ student.class_rollno ? student.class_rollno : '----' }}
                </p>
              </div>
            </td>
            <!-- end:Roll no. -->

            <!-- start:name -->
            <td>
              <div class="d-flex align-items-center">
                <div class="avatar rounded-circle">
                  <!-- profile image -->
                  <img
                    :data-src="
                      student.profile_image
                        ? student.profile_image
                        : defaultProfileImage
                    "
                    class="avatar rounded-circle shadow obj-fit-cover obj-pos-center"
                    v-lazy-load
                  />
                </div>
                <!-- full name -->
                <div class="ms-3">
                  <NuxtLink
                    :to="`/dash/student/detail?id=${student.id}`"
                    class="fw-bolder mb-1 text-primary w-10-rem d-inline-block"
                  >
                    <span>
                      <span class="better-underline d-inline">{{
                        student.first_name ? student.first_name : '----'
                      }}</span>
                      <span class="better-underline d-inline">{{
                        student.last_name ? student.last_name : '----'
                      }}</span>
                      <span class="link"></span>
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </td>
            <!-- end:name -->

            <!-- start:Contact Us -->
            <td>
              <div class="text-dark mb-0">
                <!-- email -->
                <div class="d-flex justify-content-start gap-1">
                  <i class="ri-mail-fill text-primary fs-6"></i
                  >{{ student.email ? student.email : '----' }}
                </div>
                <!-- email -->

                <!-- mobile -->
                <div class="d-flex justify-content-start gap-1">
                  <i class="ri-phone-fill text-primary fs-6"></i
                  >{{ student.phone_no ? student.phone_no : '----' }}
                </div>
                <!-- mobile -->
              </div>
            </td>
            <!-- end:Contact Us -->

            <!-- start:Date Created -->
            <td>
              <div class="text-dark mb-0 text-nowrap">
                {{
                  student.created_on
                    ? $nuxt.$utils.dateFormat(student.created_on)
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
                  :to="`/dash/student/detail?id=${student}`"
                  class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-eye-fill ri-lg"></i
                ></NuxtLink>
                <!-- edit -->
                <NuxtLink
                  :to="`/dash/student/${student}`"
                  class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-edit-2-fill ri-lg"></i
                ></NuxtLink>
                <!-- destroy -->
                <a
                  @click="deleteStudent(student)"
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
  name: 'DashStudentTable',
  props: {
    student: {
      type: Array,
      required: true,
    },
  },
  computed: {
    // defaultteacherProfileImage() {
    //   return this.$config.defaultUserImage
    // },
  },
  methods: {
    // deleteCourse(id) {
    //   this.$swal({
    //     title: 'Are you sure?',
    //     text: 'You will not be able to recover this Course!',
    //     icon: 'warning',
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: 'Yes, delete it!',
    //     cancelButtonText: 'No, keep it',
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       this.$swal({
    //         title: 'Processing...',
    //         text: 'Please wait a moment while we are deleting the Course',
    //         icon: 'info',
    //         type: 'info',
    //         didOpen: () => {
    //           this.$swal.showLoading()
    //           this.$api.course
    //             .destroy(id)
    //             .then(() => {
    //               this.$swal.hideLoading()
    //               this.$swal.close()
    //               this.$swal({
    //                 title: 'Deleted!',
    //                 text: 'Course has been deleted.',
    //                 icon: 'success',
    //                 type: 'success',
    //               }).then(() => {
    //                 let courseList = this.courses.filter(
    //                   (course) => course.id !== id
    //                 )
    //                 this.$emit('update:courses', courseList)
    //               })
    //             })
    //             .catch((err) => {
    //               this.$swal.close()
    //               this.$swal({
    //                 title: 'Error',
    //                 text: err.response.data.detail,
    //                 icon: 'error',
    //                 type: 'error',
    //               })
    //             })
    //         },
    //       })
    //     }
    //   })
    // },
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
