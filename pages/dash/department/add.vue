<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">
          Add Department
        </h1>
        <h3 class="text-secondary text-capitalize">Add a New Department</h3>
      </div>
      <div class="card-body">
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <!-- start:Department Add Form -->
          <form @submit.prevent="handleSubmit(addDepartment)">
            <!-- start:Department Name -->
            <div class="row">
              <div class="col-12">
                <label class="form-label required" for="department_name"
                  >Department Name</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    placeholder="Select Department"
                    :options="departmentNameList"
                    v-model="department.department_name"
                  ></v-select>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger transition-all-ease-out-sine"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Department Name -->

            <!-- start:HoD -->
            <div class="row">
              <div class="col-12">
                <label class="form-label required" for="hod">HoD</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    placeholder="Select HoD"
                    :options="hodList"
                    v-model="department.hod"
                  ></v-select>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger transition-all-ease-out-sine"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:HoD -->

            <!-- start:College -->
            <div class="row">
              <div class="col-12">
                <label class="form-label required" for="hod">College</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    placeholder="Select College"
                    :options="collegeList"
                    v-model="department.college"
                  ></v-select>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger transition-all-ease-out-sine"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:College -->

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn bg-gradient-primary text-white btn-rounded mb-4"
              >
                Add Department
              </button>
            </div>
          </form>
          <!-- End:Department Add Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentAdd',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      hodList: [],
      departmentNameList: [],
      collegeList: [],
      department: {
        department_name: '',
        hod: '',
        college: '',
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
        name: 'Add',
      },
    ])
  },

  methods: {
    async addDepartment() {
      try {
        const department = {
          department_name: this.department.department_name.id,
          hod: this.department.hod.id,
          college: this.department.college.id,
        }

        this.$swal({
          title: 'Adding Department',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Adding a New Department',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.department
              .create(department)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'Department has been added Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/department'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Add Department.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Add Department.<br/>Try Again`,
        })
      }
    },

    async getHodList() {
      this.$api.user.listHod().then((response) => {
        // set first_name and last_name as label and id as value for v-select
        this.hodList = response.data.results.map((hod) => {
          return {
            id: hod.id,
            label: `${hod.first_name} ${hod.last_name}`,
          }
        })
      })
    },

    async getDepartmentNameList() {
      this.$api.department.typeList().then((response) => {
        // set department_name as label and id as value for v-select
        this.departmentNameList = response.data.map((name) => {
          return {
            id: name.id,
            label: name.department_name,
          }
        })
      })
    },

    async getCollegeList() {
      this.$api.college.list().then((response) => {
        this.collegeList = response.data.map((college) => {
          return {
            id: college.id,
            label: college.institute_name,
          }
        })
      })
    },
  },

  mounted() {
    this.getDepartmentNameList()
      .then(() => {
        this.getHodList()
      })
      .then(() => {
        this.getCollegeList()
      })
      .then(() => {
        this.loading = false
      })
  },
}
</script>

<style></style>
