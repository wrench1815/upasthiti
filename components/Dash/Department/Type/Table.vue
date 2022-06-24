<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <!-- start:Header -->
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Name</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Created on
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Actions
          </th>
        </tr>
      </thead>
      <!-- end:Header -->
      <tbody>
        <!-- start:no data fallback -->
        <tr v-if="departmentTypes.length == 0">
          <td colspan="3" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Department Types found" />
          </td>
        </tr>
        <!-- end:no data fallback -->

        <!-- start:Department Types -->
        <tr v-for="type in departmentTypes" v-else>
          <!-- start:Department Name -->
          <td>
            <div class="text-primary fw-bold mb-0">
              {{ type.department_name ? type.department_name : '----' }}
            </div>
          </td>
          <!-- end:Department Name -->

          <!-- start:Created On -->
          <td>
            <div class="text-dark mb-0 text-nowrap">
              {{
                type.created_on
                  ? $nuxt.$utils.dateFormat(type.created_on)
                  : '----'
              }}
            </div>
          </td>
          <!-- end:Created On -->

          <!-- start:Actions-->
          <td>
            <div
              class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2"
            >
              <NuxtLink
                :to="`/dash/department/type/${type.id}`"
                class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-edit-2-fill ri-lg"></i
              ></NuxtLink>
              <a
                @click="deleteDepartmentType(type.id)"
                class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-delete-bin-fill ri-lg"></i
              ></a>
            </div>
          </td>
          <!-- end:Actions-->
        </tr>
        <!-- end:Department Types -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentTypeTable',

  props: {
    departmentTypes: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteDepartmentType(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this Department Type!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the Department Type',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()

              this.$api.department.typeDestroy(id).then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Deleted!',
                  text: 'Department Type has been deleted.',
                  icon: 'success',
                  type: 'success',
                })
                  .then(() => {
                    let departmentTypeList = this.departmentTypes.filter(
                      (type) => type.id !== id
                    )
                    this.$emit('update:departmentTypes', departmentTypeList)
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
