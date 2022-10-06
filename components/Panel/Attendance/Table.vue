<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Student
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Date</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Present
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Late</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Absent
          </th>
          <!-- <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Actions
          </th> -->
        </tr>
      </thead>
      <tbody>
        <!-- start:no Attendances -->
        <tr v-if="attendances.length == 0">
          <td colspan="8" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Attendance found" />
          </td>
        </tr>
        <!-- end:no Attendances -->

        <!-- start:has Attendances -->
        <template>
          <tr v-for="item in attendances" :key="item.id">
            <!-- start:Student -->
            <td>
              <div class="d-flex align-items-center">
                <div>
                  <!-- <NuxtLink
                    :to="`/dash/attendance/detail?id=${item.id}`"
                    class="fw-bolder mb-1 text-primary w-10-rem d-inline-block"
                  >
                    <span>
                      <span class="better-underline d-inline"
                        >{{ item.student ? item.student.first_name : '----' }}
                        {{
                          item.student ? item.student.last_name : '----'
                        }}</span
                      >
                      <span class="link"></span>
                    </span>
                  </NuxtLink> -->
                  <span class="d-inline pb-2"
                    >{{ item.student ? item.student.first_name : '----' }}
                    {{ item.student ? item.student.last_name : '----' }}</span
                  >
                  <br />
                  <span class="fw-bold">{{
                    item.student ? item.student.university_roll_no : '----'
                  }}</span>
                </div>
              </div>
            </td>
            <!-- end:Student -->

            <!-- start:Date -->
            <td>
              <div class="text-dark mb-0 text-nowrap">
                {{
                  item.date ? $nuxt.$utils.dateFormatNoTime(item.date) : '----'
                }}
              </div>
            </td>
            <!-- end:Date -->

            <!-- start:is present -->
            <td>
              <div
                class="text-dark mb-0 d-flex justify-content-center align-items-center"
              >
                <span v-if="item.is_present"
                  ><i class="ri-checkbox-circle-fill text-success ri-lg"></i
                ></span>
                <span v-else
                  ><i class="ri-close-circle-fill text-danger ri-lg"></i
                ></span>
              </div>
            </td>
            <!-- end:is present -->

            <!-- start:is late -->
            <td>
              <div
                class="text-dark mb-0 d-flex justify-content-center align-items-center"
              >
                <span v-if="item.is_late"
                  ><i class="ri-checkbox-circle-fill text-success ri-lg"></i
                ></span>
                <span v-else
                  ><i class="ri-close-circle-fill text-danger ri-lg"></i
                ></span>
              </div>
            </td>
            <!-- end:is late -->

            <!-- start:is absent -->
            <td>
              <div
                class="text-dark mb-0 d-flex justify-content-center align-items-center"
              >
                <span v-if="item.is_absent"
                  ><i class="ri-checkbox-circle-fill text-success ri-lg"></i
                ></span>
                <span v-else
                  ><i class="ri-close-circle-fill text-danger ri-lg"></i
                ></span>
              </div>
            </td>
            <!-- end:is absent -->

            <!-- start:Actions -->
            <!-- <td>
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              > -->
            <!-- detail -->
            <!-- <NuxtLink
                  :to="`/dash/attendance/detail?id=${item.id}`"
                  class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-eye-fill ri-lg"></i
                ></NuxtLink> -->
            <!-- edit -->
            <!-- <NuxtLink
                  :to="`/dash/attendance/${item.id}`"
                  class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-edit-2-fill ri-lg"></i
                ></NuxtLink> -->
            <!-- </div>
            </td> -->
            <!-- end:Actions -->
          </tr>
        </template>
        <!-- end:has Attendances -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashAttendanceTable',

  props: {
    attendances: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteAttendance(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this Attendance!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the Attendance',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()
              this.$api.attendance
                .destroy(id)
                .then(() => {
                  this.$swal.hideLoading()
                  this.$swal.close()
                  this.$swal({
                    title: 'Deleted!',
                    text: 'Attendance has been deleted.',
                    icon: 'success',
                    type: 'success',
                  }).then(() => {
                    let attendancesList = this.attendances.filter(
                      (item) => item.id !== id
                    )
                    this.$emit('update:attendances', attendancesList)
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
