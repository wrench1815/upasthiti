<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            University Roll No.
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Class Roll No.
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Name</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Contact
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Address Block
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
        <!-- start:no students -->
        <tr v-if="students.length == 0">
          <td colspan="6" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Students found" />
          </td>
        </tr>
        <!-- end:no students -->

        <!-- start:has Students -->
        <template>
          <tr v-for="student in students" :key="student.id">
            <!-- start:University Roll no. -->
            <td>
              <div class="d-flex align-items-center">
                <NuxtLink
                  :to="`/dash/student/detail?id=${student.id}`"
                  class="fw-bolder mb-1 text-primary w-10-rem d-inline-block"
                >
                  <span>
                    <span class="better-underline d-inline">{{
                      student.university_rollno
                        ? student.university_rollno
                        : '----'
                    }}</span>
                    <span class="link"></span>
                  </span>
                </NuxtLink>
              </div>
            </td>
            <!-- end:University Roll no. -->

            <!-- start:class Roll no. -->
            <td>
              <div class="d-flex align-items-center">
                <p class="fw-bold mb-0 text-dark text-nowrap">
                  {{ student.class_rollno ? student.class_rollno : '----' }}
                </p>
              </div>
            </td>
            <!-- end:class Roll no. -->

            <!-- start:name -->
            <td>
              <div class="d-flex align-items-center">
                <div class="avatar rounded-circle shadow">
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
                      <span class="better-underline d-inline"
                        >{{ student.first_name ? student.first_name : '----' }}
                        {{
                          student.last_name ? student.last_name : '----'
                        }}</span
                      >
                      <span class="link"></span>
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </td>
            <!-- end:name -->

            <!-- start:Contact -->
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
                  >{{ student.mobile ? student.mobile : '----' }}
                </div>
                <!-- mobile -->
              </div>
            </td>
            <!-- end:Contact -->

            <!-- start:Address -->
            <td>
              <div class="text-dark mb-0 w-10-rem">
                <!-- Address -->
                <div class="d-flex justify-content-start gap-1">
                  <i class="ri-map-pin-2-fill text-primary fs-6"></i
                  >{{ student.address ? student.address : '----' }}
                </div>
                <!-- Address -->

                <!-- District -->
                <div class="d-flex justify-content-start gap-1">
                  <i class="ri-pin-distance-fill text-primary fs-6"></i
                  >{{ student.district ? student.district : '----' }}
                </div>
                <!-- District -->
              </div>
            </td>
            <!-- end:Address -->

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
                  :to="`/dash/student/detail?id=${student.id}`"
                  class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-eye-fill ri-lg"></i
                ></NuxtLink>
                <!-- edit -->
                <NuxtLink
                  :to="`/dash/student/${student.id}`"
                  class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-edit-2-fill ri-lg"></i
                ></NuxtLink>
                <!-- destroy -->
                <a
                  @click="deleteStudent(student.id)"
                  class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-delete-bin-fill ri-lg"></i>
                </a>
              </div>
            </td>
            <!-- end:Actions -->
          </tr>
        </template>
        <!-- end:has Students -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashStudentTable',

  props: {
    students: {
      type: Array,
      required: true,
    },
  },

  computed: {
    defaultProfileImage() {
      return this.$config.defaultUserImage
    },
  },

  methods: {
    deleteStudent(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this Student!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the Student',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()
              this.$api.student
                .destroy(id)
                .then(() => {
                  this.$swal.hideLoading()
                  this.$swal.close()
                  this.$swal({
                    title: 'Deleted!',
                    text: 'Student has been deleted.',
                    icon: 'success',
                    type: 'success',
                  }).then(() => {
                    let studentList = this.students.filter(
                      (student) => student.id !== id
                    )
                    this.$emit('update:students', studentList)
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
table th:first-child {
  border-radius: 10px 0 0 10px !important;
}
table th:last-child {
  border-radius: 0 10px 10px 0 !important;
}
</style>
