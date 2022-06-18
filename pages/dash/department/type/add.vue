<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h2>Add Department Type</h2>
        <p>Add a New Department Type</p>
      </div>
      <div class="card-body">
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <!-- start:Department Type Add Form -->
          <form @submit.prevent="handleSubmit(addDepartmentType)">
            <!-- start:Department Name -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="department_name"
                  >Department Name</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{
                    required: true,
                    min: 3,
                    capitalize: true,
                  }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="department_name"
                      class="form-control"
                      v-model="departmentType.department_name"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Department Name -->

            <!-- Submit button -->
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-info btn-rounded mb-4">
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

        this.$swal({
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
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style></style>
