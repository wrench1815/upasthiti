<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Department</h1>
        <h3 class="text-secondary text-capitalize">
          lists all Registerd Departments
        </h3>
      </div>
      <div class="card-body">
        <!-- <section class="d-flex justify-content-end">
          <div class="w-10-rem mb-3">
            <v-select
              placeholder="Select Filter"
              :options="userFilters"
              v-model="selectedUserFilter"
              :clearable="false"
              @option:selected="refreshUsers"
            >
            </v-select>
          </div>
        </section> -->
        <Lazy-LoadersTable v-if="loading" />
        <Lazy-DashDepartmentTable v-else :departments.sync="departments" />

        <div class="d-flex justify-content-end mt-3">
          <Lazy-LoadersButton v-if="loading" :rounded="true" />
          <Lazy-UtilsLinkButton
            v-else
            :rounded="true"
            :link="'/dash/department/add'"
            >Add new Department</Lazy-UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentIndex',
  layout: 'dash',

  data() {
    return {
      departments: [],
      loading: true,
      error: true,
      userFilters: ['All', 'Admin', 'Principal', 'HOD', 'Teacher'],
      selectedUserFilter: 'All',
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Department',
        url: '/dash/department',
      },
    ])
  },

  methods: {
    async getDepartments() {
      this.loading = true
      let requestUrl = this.$api.department.list()

      const response = await requestUrl
        .then(
          (response) => (
            (this.departments = response.data), (this.error = false)
          )
        )
        .catch((error) => {
          this.$swal({
            title: 'Error',
            icon: 'error',
            type: 'error',
            html: `${
              error.response.data.detail
                ? error.response.data.detail
                : 'Something went wrong'
            }`,
            confirmButtonText: 'Refresh',
            showCancelButton: true,
            cancelButtonText: 'To Dash Home',
            confirmButtonClass: 'btn btn-info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.getDepartments()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        })
    },

    refreshDepartments() {
      this.loading = true
      this.getDepartments().then(() => (this.loading = false))
    },
  },

  mounted() {
    this.getDepartments().finally(() => {
      if (!this.error) {
        this.loading = false
      }
    })
  },
}
</script>

<style scoped></style>
