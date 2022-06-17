<template>
  <div class="table-responsive">
    <table class="table table-hover table-bordered align-middle">
      <thead class="align-middle">
        <tr>
          <th scope="col">Logo</th>
          <th scope="col">Institute Name</th>
          <th scope="col">Alias</th>
          <th scope="col">Institute Address</th>
          <th scope="col">Created On</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="colleges.length == 0">
          <td colspan="6" class="">
            <h4 class="text-center">Nothing to see here</h4>
          </td>
        </tr>
        <tr v-for="college in colleges" v-else>
          <td>
            <img
              :data-src="`${college.institute_logo}`"
              :alt="`${college.institute_name} logo`"
              class="avatar avatar-lg rounded-circle obj-fit-cover shadow"
              v-lazy-load
            />
          </td>
          <td>
            {{ college.institute_name ? college.institute_name : '----' }}
          </td>
          <td>
            {{
              college.institute_alias_name
                ? college.institute_alias_name
                : '----'
            }}
          </td>
          <td>
            {{ college.institute_address ? college.institute_address : '----' }}
          </td>
          <td class="text-nowrap">
            {{
              college.created_on
                ? $nuxt.$utils.dateFormat(college.created_on)
                : '----'
            }}
          </td>
          <td>
            <div class="d-flex justify-content-center align-items-center gap-2">
              <NuxtLink
                :to="`/dash/college/detail?id=${college.id}`"
                class="btn btn-floating btn-success btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-eye-fill ri-lg"></i
              ></NuxtLink>
              <NuxtLink
                :to="`/dash/college/${college.id}`"
                class="btn btn-floating btn-info btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-edit-2-fill ri-lg"></i
              ></NuxtLink>
              <a
                @click="deleteCollege(college.id)"
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
  name: 'DashCollegeTable',

  props: {
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
                    this.colleges = this.colleges.filter(
                      (college) => college.id !== id
                    )
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
.logo-img {
  /* width: 100px; */
  /* height: 100px; */
}
</style>
