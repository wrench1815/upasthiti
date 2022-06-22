<template>
  <div class="table-responsive">
    <table class="table table-hover table-bordered align-middle">
      <thead class="align-middle">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Created on</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="departmentTypes.length == 0">
          <td colspan="5" class="">
            <h4 class="text-center">Nothing to see here</h4>
          </td>
        </tr>
        <tr v-for="type in departmentTypes" v-else>
          <td>
            {{ type.department_name ? type.department_name : '----' }}
          </td>
          <td>
            {{
              type.created_on
                ? $nuxt.$utils.dateFormat(type.created_on)
                : '----'
            }}
          </td>
          <td>
            <div
              class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2"
            >
              <NuxtLink
                :to="`/dash/department/type/${type.id}`"
                class="btn btn-floating btn-info btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-edit-2-fill ri-lg"></i
              ></NuxtLink>
              <a
                @click="deleteDepartmentType(type.id)"
                class="btn btn-floating btn-danger btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-delete-bin-fill ri-lg"></i
              ></a>
            </div>
          </td>
        </tr>
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

<style></style>
