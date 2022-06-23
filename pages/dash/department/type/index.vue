<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h2>Department Type</h2>
        <p>lists all Registerd Department Types</p>
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
        <Lazy-DashDepartmentTypeTable
          v-if="!loading"
          :departmentTypes.sync="departmentTypes"
        />

        <div class="d-flex justify-content-end">
          <Lazy-LoadersButton v-if="loading" :rounded="true" />
          <Lazy-UtilsLinkButton
            v-if="!loading"
            :rounded="true"
            :link="'/dash/department/type/add'"
            >Add new Department Type</Lazy-UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashDepartmentTypeIndex',
  layout: 'dash',

  data() {
    return {
      departmentTypes: [],
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
      {
        name: 'Type',
        url: '/dash/department/type',
      },
    ])
  },

  methods: {
    async getDepartmentTypes() {
      this.loading = true
      let requestUrl = this.$api.department.typeList()

      const response = await requestUrl
        .then(
          (response) => (
            (this.departmentTypes = response.data), (this.error = false)
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
              this.getDepartmentTypes()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        })
    },

    refreshDepartmentTypes() {
      this.loading = true
      this.getDepartmentTypes().then(() => (this.loading = false))
    },
  },

  mounted() {
    this.getDepartmentTypes().finally(() => {
      if (!this.error) {
        this.loading = false
      }
    })
  },
}
</script>

<style></style>
