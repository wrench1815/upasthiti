<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Class Name
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Class Code
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Session Start
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Session End
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
        <!-- start:no Classes -->
        <tr v-if="classes.length == 0">
          <td colspan="6" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Classes found" />
          </td>
        </tr>
        <!-- end:no Classes -->

        <!-- start:has Classes -->
        <template>
          <tr v-for="item in classes" :key="item.id">
            <!-- start:Class Name -->
            <td>
              <div class="d-flex align-items-center">
                <NuxtLink
                  :to="`/dash/class/detail?id=${item.id}`"
                  class="fw-bolder mb-1 text-primary w-10-rem d-inline-block"
                >
                  <span>
                    <span class="better-underline d-inline">{{
                      item.name ? item.name : '----'
                    }}</span>
                    <span class="link"></span>
                  </span>
                </NuxtLink>
              </div>
            </td>
            <!-- end:Class Name -->

            <!-- start:Class Code -->
            <td>
              <div class="d-flex align-items-center">
                <p class="fw-bold mb-0 text-dark text-nowrap">
                  {{ item.code ? item.code : '----' }}
                </p>
              </div>
            </td>
            <!-- end:Class Code -->

            <!-- start:Class session_start -->
            <td>
              <div class="text-dark mb-0 text-nowrap">
                {{
                  item.session_start
                    ? $nuxt.$utils.dateFormatNoTimeDay(item.session_start)
                    : '----'
                }}
              </div>
            </td>
            <!-- end:Class session_start -->

            <!-- start:Class session_end -->
            <td>
              <div class="text-dark mb-0 text-nowrap">
                {{
                  item.session_end
                    ? $nuxt.$utils.dateFormatNoTimeDay(item.session_end)
                    : '----'
                }}
              </div>
            </td>
            <!-- end:Class session_end -->

            <!-- start:Date Created -->
            <td>
              <div class="text-dark mb-0 text-nowrap">
                {{
                  item.created_on
                    ? $nuxt.$utils.dateFormat(item.created_on)
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
                  :to="`/dash/class/detail?id=${item.id}`"
                  class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-eye-fill ri-lg"></i
                ></NuxtLink>
                <!-- edit -->
                <NuxtLink
                  :to="`/dash/class/${item.id}`"
                  class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-edit-2-fill ri-lg"></i
                ></NuxtLink>
                <!-- destroy -->
                <a
                  @click="deleteClass(item.id)"
                  class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
                  ><i class="ri-delete-bin-fill ri-lg"></i>
                </a>
              </div>
            </td>
            <!-- end:Actions -->
          </tr>
        </template>
        <!-- end:has Classes -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashClassTable',

  props: {
    classes: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteClass(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this Class!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the Class',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()
              this.$api.class
                .destroy(id)
                .then(() => {
                  this.$swal.hideLoading()
                  this.$swal.close()
                  this.$swal({
                    title: 'Deleted!',
                    text: 'Class has been deleted.',
                    icon: 'success',
                    type: 'success',
                  }).then(() => {
                    let classesList = this.classes.filter(
                      (item) => item.id !== id
                    )
                    this.$emit('update:classes', classesList)
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
