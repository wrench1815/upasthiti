<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Name</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Hod</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            College
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
        <!-- start:no departments fallback -->
        <tr v-if="departments.length == 0">
          <td colspan="5" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Departments found" />
          </td>
        </tr>
        <!-- end:no departments fallback -->

        <!-- start:Departments -->
        <template v-else>
          <tr v-for="department in departments" :key="department.id">
            <!-- start:Department Name -->
            <td>
              <div class="w-10-rem text-wrap d-inline-block">
                <NuxtLink
                  :to="`/dash/department/detail?id=${department.id}`"
                  class="fw-bold mb-1 text-primary d-inline"
                >
                  <span class="better-underline">
                    {{ department.name ? department.name : '----' }}
                  </span>
                  <span class="link"></span>
                </NuxtLink>
              </div>
            </td>
            <!-- end:Department Name -->

            <!-- start:Department HOD -->
            <td>
              <div class="d-flex align-items-center">
                <!-- profile image -->
                <div class="avatar rounded-circle">
                  <img
                    :data-src="
                      department.hod.profile_image
                        ? department.hod.profile_image
                        : defaultHODProfileImage
                    "
                    class="avatar rounded-circle obj-pos-center obj-fit-cover shadow"
                    :alt="`${
                      department.hod.short_name
                        ? department.hod.short_name
                        : '----'
                    }'s profile image`"
                    v-lazy-load
                  />
                </div>

                <!-- Name -->
                <div class="ms-3">
                  <p class="fw-bold mb-0 text-dark text-nowrap">
                    {{
                      department.hod.full_name
                        ? department.hod.full_name
                        : '----'
                    }}
                  </p>
                </div>
              </div>
            </td>
            <!-- end:Department HOD -->

            <!-- start:Department College -->
            <td>
              <div class="d-flex align-items-center">
                <!-- Logo -->
                <div class="avatar rounded-circle">
                  <img
                    :data-src="`${department.college.logo}`"
                    class="avatar rounded-circle obj-pos-center obj-fit-cover shadow"
                    :alt="`${department.college.name}'s logo`"
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
                        department.college.name
                          ? department.college.name
                          : '----'
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <!-- end:Department College -->

            <!-- start:Date Created -->
            <td>
              <div class="text-dark mb-0 text-nowrap">
                {{
                  department.created_on
                    ? $nuxt.$utils.dateFormat(department.created_on)
                    : '----'
                }}
              </div>
            </td>
            <!-- end:Date Created -->

            <!-- start:Actions -->
            <td>
              <div
                class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2"
              >
                <NuxtLink
                  :to="`/dash/department/${department.id}`"
                  class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-edit-2-fill ri-lg"></i
                ></NuxtLink>
                <a
                  @click="deleteDepartment(department.id)"
                  class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-delete-bin-fill ri-lg"></i>
                </a>
              </div>
            </td>
            <!-- end:Actions -->
          </tr>
        </template>
        <!-- end:Departments -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentTable',

  props: {
    departments: {
      type: Array,
      required: true,
    },
  },

  computed: {
    defaultHODProfileImage() {
      return this.$config.defaultUserImage
    },
  },

  methods: {
    deleteDepartment(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this Department!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the Department',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()

              this.$api.department
                .destroy(id)
                .then(() => {
                  this.$swal.hideLoading()
                  this.$swal.close()

                  this.$swal({
                    title: 'Deleted!',
                    text: 'Department has been deleted.',
                    icon: 'success',
                    type: 'success',
                  }).then(() => {
                    let departmentList = this.departments.filter(
                      (department) => department.id !== id
                    )
                    this.$emit('update:departments', departmentList)
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
