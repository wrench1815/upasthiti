<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <!-- start:Header -->
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            University Name
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Alias
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            University Address
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Contact Info
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
      <tbody>
        <!-- start: Body -->
        <!-- start:No Universities -->
        <tr v-if="universities.length == 0">
          <td colspan="6" class="bg-white">
            <UtilsNoData class="mx-auto" message="No Universities to list" />
          </td>
        </tr>
        <!-- end:No Universities -->

        <!-- start:Display Universities -->
        <template v-else>
          <tr v-for="uni in universities" :key="uni.id">
            <td>
              <!-- start:University Name -->
              <div class="d-flex align-items-center">
                <!-- logo -->
                <div class="avatar rounded-circle">
                  <img
                    :data-src="uni.logo"
                    alt=""
                    class="avatar rounded-circle obj-pos-center obj-fit-cover shadow"
                    v-lazy-load
                  />
                </div>
                <!-- Name -->
                <div class="ms-3">
                  <NuxtLink
                    to="/"
                    class="fw-bold mb-1 text-primary hover-underline-animation"
                  >
                    <span>{{ uni.name ? uni.name : '----' }}</span>
                  </NuxtLink>
                </div>
              </div>
            </td>
            <!-- end: University Name -->

            <!-- University Alias -->
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <div
                  class="badge bg-gradient-warning badge-fs shadow-3-strong py-2 rounded-pill px-3"
                >
                  <span>{{ uni.alias ? uni.alias : '----' }}</span>
                </div>
              </div>
            </td>
            <!-- end: University Alias -->

            <!-- start: University Address -->
            <td>
              <div class="text-dark">
                <p class="mb-0">{{ uni.address ? uni.address : '----' }}</p>
              </div>
            </td>
            <!-- end:University Address -->

            <!-- start:University contact-info-->
            <td>
              <div class="text-dark mb-0">
                <p class="fw-normal mb-1">
                  {{ uni.email ? uni.email : '----' }}
                </p>
                <p class="mb-0">
                  {{ uni.phone_number ? uni.phone_number : '----' }}
                </p>
              </div>
            </td>
            <!-- end:University contact-info -->

            <!-- start:Created On -->
            <td>
              <div class="text-dark mb-0 text-nowrap">
                <p class="mb-0">
                  {{
                    uni.date_added
                      ? $nuxt.$utils.dateFormat(uni.date_added)
                      : '----'
                  }}
                </p>
              </div>
            </td>
            <!-- end:Created on-->

            <!-- start:Actions -->
            <td>
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              >
                <!-- Detail -->

                <NuxtLink
                  :to="`/dash/university/detail?id=${uni.id}`"
                  class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
                >
                  <i class="ri-eye-fill ri-lg"></i>
                </NuxtLink>
                <!-- Edit -->
                <NuxtLink
                  :to="`/dash/university/${uni.id}`"
                  class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
                >
                  <i class="ri-edit-2-fill ri-lg"></i>
                </NuxtLink>
                <!-- Destroy -->
                <div
                  @click="deleteUni(uni.id)"
                  class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
                >
                  <i class="ri-delete-bin-fill ri-lg"></i>
                </div>
              </div>
            </td>
            <!-- end:Actions-->
          </tr>
        </template>
        <!-- end:Display Universities -->
      </tbody>
      <!-- end: Body -->
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashUniversityTable',

  props: {
    universities: {
      type: Array,
      required: true,
    },
  },

  methods: {
    async deleteUni(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this University!',
        icon: 'warning',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: 'Processing...',
            text: 'Please wait a moment while we are deleting the University',
            icon: 'info',
            type: 'info',
            didOpen: () => {
              this.$swal.showLoading()

              this.$api.university
                .destroy(id)
                .then(() => {
                  this.$swal.hideLoading()
                  this.$swal.close()

                  this.$swal({
                    title: 'Deleted!',
                    text: 'University has been deleted.',
                    icon: 'success',
                    type: 'success',
                  }).then(() => {
                    this.$emit('deletedUni')
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
