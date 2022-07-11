<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">
          Department Edit
        </h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-info fw-bold">{{ department.id }}</span>
        </h3>
      </div>
      <!-- Loader Form-->
      <Lazy-LoadersForm
        v-if="loading"
        class="card-body"
        :inputCount="3"
        :btnCenter="true"
      />

      <div class="card-body" v-else>
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <!-- start:Department Edit Form -->
          <form @submit.prevent="handleSubmit(updateDepartment)">
            <!-- start:Department Name -->
            <div class="row">
              <div class="col-12">
                <label class="form-label" for="department_name"
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
                <label class="form-label" for="hod">HOD</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    placeholder="Select HOD"
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
                <label class="form-label" for="hod">College</label>
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
                class="btn btn-rounded bg-gradient-success text-white text-white mb-4"
              >
                Update Department
              </button>
            </div>
          </form>
          <!-- End:Department Edit Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentEdit',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      hodList: [],
      departmentNameList: [],
      collegeList: [],
      department: {
        id: '',
        department_name: '',
        hod: '',
        college: '',
        created_on: '',
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
        name: 'Edit',
      },
    ])
  },

  methods: {
    async fetchDepartment() {
      this.loading = true

      const response = await this.$api.department
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.department = response.data

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
              this.fetchDepartment()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        )
    },

    async updateDepartment() {
      try {
        const department = {
          department_name: this.department.department_name.id,
          hod: this.department.hod.id,
          college: this.department.college.id,
        }

        this.$swal({
          title: 'Updating Department',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are updating the Department',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.department
              .update(this.$route.params.id, department)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Update Successful',
                  icon: 'success',
                  type: 'success',
                  text: 'Department has been updated Successfully',
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
                  html: `Failed to Update Department`,
                })
              })
          },
        })
      } catch (error) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to update Department.<br/>Try Again`,
        })
      }
    },

    async getHodList() {
      await this.$api.user.listHod().then((response) => {
        // set first_name and last_name as label and id as value for v-select
        this.hodList = response.data.results.map((hod) => {
          return {
            id: hod.id,
            label: `${hod.full_name}`,
          }
        })
      })
    },

    async getDepartmentNameList() {
      await this.$api.department.typeList().then((response) => {
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
      await this.$api.college.list().then((response) => {
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
    this.fetchDepartment()
      .then(() => {
        this.getDepartmentNameList().then(() => {
          for (let i = 0; i < this.departmentNameList.length; i++) {
            if (
              this.departmentNameList[i].label ==
              this.department.department_name
            ) {
              this.department.department_name = this.departmentNameList[i]
            }
          }
        })
      })
      .then(() => {
        this.getHodList().then(() => {
          for (let i = 0; i < this.hodList.length; i++) {
            if (this.hodList[i].id == this.department.hod) {
              this.department.hod = this.hodList[i]
            }
          }
        })
      })
      .then(() => {
        this.getCollegeList().then(() => {
          for (let i = 0; i < this.collegeList.length; i++) {
            if (this.collegeList[i].id == this.department.college.id) {
              this.department.college = this.collegeList[i]
            }
          }
        })
      })
      .then(() => {
        this.loading = false
      })
  },
}
</script>

<style scoped></style>
