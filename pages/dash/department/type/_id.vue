<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h2>Department Type Edit</h2>
        <p>
          Editing Department Type:
          <span class="text-info fw-bold">{{ departmentType.id }}</span>
        </p>
      </div>
      <div class="card-body">
        <Lazy-LoadersForm :btnEnd="true" :btnColor="'success'" v-if="loading" />

        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- start:Department Type Edit Form -->
          <form @submit.prevent="handleSubmit(updateDepartmentType)">
            <!-- start:Department Name -->
            <Lazy-DashInput
              :label="'Department Name'"
              :validationRules="{ required: true, min: 3, capitalize: true }"
              :data.sync="departmentType.department_name"
              :type="'text'"
            />
            <!-- end:Department Name -->

            <!-- Submit button -->
            <div class="d-flex justify-content-end">
              <button
                type="submit"
                class="btn btn-success fw-bold btn-rounded mb-4"
              >
                Update Department Type
              </button>
            </div>
          </form>
          <!-- End:Department Type Edit Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentTypeEdit',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      departmentType: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Department',
        url: '/dash/department',
      },
      {
        name: 'Type',
        url: '/dash/department/type',
      },
      {
        name: 'Edit',
        url: `/dash/department/type/${this.$route.params.id}`,
      },
    ])
  },

  methods: {
    async fetchDepartmentType() {
      this.loading = true

      const response = await this.$api.department
        .typeRetrieve(this.$route.params.id)
        .then((response) => {
          this.departmentType = response.data
          this.error = false
        })
        .catch((error) =>
          this.$swal({
            title: 'Error',
            icon: 'error',
            type: 'error',
            text: `${
              response.data.detail
                ? error.response.data.detail
                : 'An error has occured'
            }`,
            confirmButtonText: 'Refresh',
            showCancelButton: true,
            cancelButtonText: 'To Dash Home',
            confirmButtonClass: 'btn btn-info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.fetchDepartmentType()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        )
    },

    async updateDepartmentType() {
      try {
        const department = {
          department_name: this.departmentType.department_name.toUpperCase(),
        }

        this.$swal({
          title: 'Updating Department Type',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are updating the Department Type',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.department
              .typeUpdate(this.$route.params.id, department)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Update Successful',
                  icon: 'success',
                  type: 'success',
                  text: 'Department Type has been updated Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/department/type'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Update Department Type.`,
                })
              })
          },
        })
      } catch (error) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to update Department Type.<br/>Try Again`,
        })
      }
    },
  },

  mounted() {
    this.fetchDepartmentType()
      .then(() => {
        this.loading = false
      })
      .finally(() => {
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
          new this.$mdb.Input(formOutline).init()
        })
      })
  },
}
</script>

<style scoped></style>
