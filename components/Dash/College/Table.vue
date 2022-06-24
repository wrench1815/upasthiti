<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <!-- start:Header -->
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Institute Name
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Alias
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Institute Address
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Email
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Created On
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Action
          </th>
        </tr>
      </thead>
      <!-- end:Header -->

      <!-- start:Body -->
      <tbody>
        <!-- start:Fallback if empty -->
        <tr v-if="colleges.length == 0">
          <td colspan="6" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Colleges found" />
          </td>
        </tr>
        <!-- end:Fallback if empty -->

        <!-- start:Display Colleges -->
        <tr v-for="college in colleges" v-else>
          <!-- start:Institute Name -->
          <td>
            <div class="d-flex align-items-center">
              <!-- Logo -->
              <div class="avatar rounded-circle">
                <img
                  :data-src="`${college.institute_logo}`"
                  class="avatar rounded-circle obj-pos-center obj-fit-cover shadow"
                  :alt="`${college.institute_alias_name}'s logo`"
                  v-lazy-load
                />
              </div>
              <!-- Name -->
              <div class="ms-3">
                <p class="fw-bolder mb-1 text-primary">
                  {{ college.institute_name ? college.institute_name : '----' }}
                </p>
              </div>
            </div>
          </td>
          <!-- end:Institute Name -->

          <!-- start:Institute Alias -->
          <td>
            <div class="d-flex justify-content-center align-items center">
              <div
                class="badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill px-3"
              >
                {{
                  college.institute_alias_name
                    ? college.institute_alias_name
                    : '----'
                }}
              </div>
            </div>
          </td>
          <!-- end:Institute Alias -->

          <!-- start:Institute Address-->
          <td>
            <div class="text-dark mb-0">
              {{
                college.institute_address ? college.institute_address : '----'
              }}
            </div>
          </td>
          <!-- end:College Alias -->

          <!-- start:Institute Email -->
          <td>
            <div class="text-dark mb-0">
              {{ college.institute_email ? college.institute_email : '----' }}
            </div>
          </td>
          <!-- end:Institute Email -->

          <!-- start:Created On -->
          <td>
            <div class="text-dark mb-0 text-nowrap">
              {{
                college.created_on
                  ? $nuxt.$utils.dateFormat(college.created_on)
                  : '----'
              }}
            </div>
          </td>
          <!-- end:Created On -->

          <!-- start:Actions -->
          <td>
            <div class="d-flex justify-content-center align-items-center gap-2">
              <!-- detail -->
              <NuxtLink
                :to="`/dash/college/detail?id=${college.id}`"
                class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-eye-fill ri-lg"></i
              ></NuxtLink>

              <!-- edit -->
              <NuxtLink
                :to="`/dash/college/${college.id}`"
                class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-edit-2-fill ri-lg"></i
              ></NuxtLink>

              <!-- destroy -->
              <a
                @click="deleteCollege(college.id)"
                class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-delete-bin-fill ri-lg"></i
              ></a>
            </div>
          </td>
          <!-- end:Actions -->
        </tr>
        <!-- end:Display Colleges -->
      </tbody>
      <!-- end:Body -->
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeTable',

  props: {
    // list of Colleges
    colleges: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteCollege(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this College!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the college',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()

              this.$api.college.destroy(id).then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Deleted!',
                  text: 'College has been deleted.',
                  icon: 'success',
                  type: 'success',
                })
                  .then(() => {
                    let collegeList = this.colleges.filter(
                      (college) => college.id !== id
                    )
                    this.$emit('update:colleges', collegeList)
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
