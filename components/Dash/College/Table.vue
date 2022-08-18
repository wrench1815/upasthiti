<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <!-- start:Header -->
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Name</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Alias
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Address
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Contact info
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Affiliated University
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
        <template v-else>
          <tr v-for="college in colleges" :key="college.id">
            <!-- start:Name -->
            <td>
              <div class="d-flex align-items-center">
                <!-- Logo -->
                <div class="avatar rounded-circle">
                  <img
                    :data-src="`${college.logo}`"
                    class="avatar rounded-circle obj-pos-center obj-fit-cover shadow"
                    :alt="`${college.alias_name}'s logo`"
                    v-lazy-load
                  />
                </div>
                <!-- Name -->
                <div class="ms-3">
                  <NuxtLink
                    :to="`/dash/college/detail?id=${college.id}`"
                    class="fw-bold mb-1 text-primary w-10-rem text-wrap d-inline-block"
                  >
                    <span class="d-inline">
                      <span class="better-underline">
                        {{ college.name ? college.name : '----' }}
                      </span>
                      <span class="link"></span>
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </td>
            <!-- end:Name -->
            <!-- start:Alias -->
            <td>
              <div class="d-flex justify-content-center align-items center">
                <div
                  class="badge bg-gradient-warning badge-fs shadow-3-strong py-2 rounded-pill px-3"
                >
                  {{ college.alias_name ? college.alias_name : '----' }}
                </div>
              </div>
            </td>
            <!-- end:Alias -->
            <!-- start:Address-->
            <td>
              <p class="text-dark mb-0 text-wrap w-10-rem">
                {{ college.address ? college.address : '----' }}
              </p>
            </td>
            <!-- end:College Alias -->
            <!-- start:Contact-info -->
            <td>
              <div class="text-dark mb-0">
                {{ college.email ? college.email : '----' }}
                <br />
                {{ college.mobile ? college.mobile : '----' }}
              </div>
            </td>
            <!-- end:Contact-info -->
            <!-- start:Affiliated University-->
            <td>
              <div class="text-dark mb-0 text-capitalize text-wrap w-10-rem">
                {{ college.university.name ? college.university.name : '----' }}
              </div>
            </td>
            <!-- end:Affiliated University -->
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
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              >
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
        </template>
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
