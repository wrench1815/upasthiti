<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">
          Add Department Type
        </h1>
        <h3 class="text-secondary text-capitalize">
          Add a New Department Type
        </h3>
      </div>
      <div class="card-body">
        <Lazy-LoadersForm :btnEnd="true" :btnColor="'info'" v-if="loading" />

        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- start:Department Type Add Form -->
          <form @submit.prevent="handleSubmit(addDepartmentType)">
            <!-- start:Department Name -->
            <Lazy-DashInput
              :label="'Department Name'"
              :validationRules="{ required: true, min: 3, capitalize: true }"
              :data.sync="departmentType.department_name"
              :type="'text'"
              :icon="'ri-hotel-fill'"
              isRequired
            />
            <!-- end:Department Name -->

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary btn-rounded mb-4">
                Add Department Type
              </button>
            </div>
          </form>
          <!-- End:Department Type Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentTypeAdd',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      departmentType: {
        department_name: '',
      },
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
        name: 'Add',
        url: '/dash/department/type/add',
      },
    ])
  },

  methods: {
    async addDepartmentType() {
      try {
        const departmentType = {
          department_name: this.departmentType.department_name.toUpperCase(),
        }

        await this.$swal({
          title: 'Adding Department Type',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Adding a New Department Type',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.department
              .typeCreate(departmentType)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'Department Type has been added Successfully',
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
                  html: `Failed to Add Department Type.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Add Department Type.<br/>Try Again`,
        })
      }
    },
  },

  mounted() {
    this.loading = false
  },
}
</script>

<style></style>
