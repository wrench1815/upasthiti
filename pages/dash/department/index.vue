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
        <section
          class="d-flex align-items-center justify-content-center flex-wrap"
          v-if="!loading.main"
        >
          <!-- start:Search -->
          <div class="me-auto mb-3">
            <div
              class="btn btn-floating bg-gradient-primary text-white btn-s d-flex justify-content-center align-items-center"
            >
              <i class="ri-search-line ri-lg"></i>
            </div>
          </div>
          <!-- end:Search -->

          <!-- start:College Filter -->
          <div class="college-filter-width mb-3 me-0 ms-sm-0 ms-auto">
            <v-select
              placeholder="Select Filter"
              :options="collegeList.results"
              v-model="selectedCollege"
              :clearable="false"
              label="alias_name"
              @option:selected="filterDepartment"
              :loading="loading.paginateCollege"
            >
              <!-- spinner -->
              <template #spinner="{ loading }">
                <div
                  v-if="loading"
                  class="vs__spinner"
                  style="border-left-color: var(--mdb-primary)"
                >
                  loading...
                </div>
              </template>

              <!-- options -->
              <template #option="{ alias_name }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                >
                  <span>{{ alias_name }}</span>
                </div>
              </template>

              <!-- selected -->
              <template #selected-option="{ alias_name }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1"
                >
                  <i
                    class="text-primary text-gradient ri-government-fill mt-n1"
                  ></i>
                  <span>{{ alias_name }}</span>
                </div>
              </template>

              <!-- footer for pagination -->
              <li
                slot="list-footer"
                class="d-flex gap-2 justify-content-center align-items-center my-2"
                v-if="collegeList.pagination.count > 1"
              >
                <!-- previous button -->
                <button
                  class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                  :disabled="
                    disableCollegeBtns || !collegeList.pagination.previous
                  "
                  @click="collegePaginatePrev"
                  data-mdb-ripple-color="primary"
                >
                  <i class="ri-arrow-left-s-line"></i>
                </button>

                <!-- next button -->
                <button
                  class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                  :disabled="disableCollegeBtns || !collegeList.pagination.next"
                  @click="collegePaginateNext"
                  data-mdb-ripple-color="primary"
                >
                  <i class="ri-arrow-right-s-line"></i>
                </button>
              </li>
            </v-select>
          </div>
          <!-- end:College Filter -->
        </section>

        <LoadersTable v-if="loading.main" />
        <DashDepartmentTable
          v-else
          :departments.sync="departments.results"
          @update:departments="deletedDepartment"
        />

        <Lazy-UtilsPagination
          class="mt-4"
          v-if="!loading.main && departments.pagination.items != 0"
          :pagination.sync="departments.pagination"
          @prevPage="onPaginated"
          @nextPage="onPaginated"
        />

        <div class="d-flex justify-content-end mt-3">
          <LoadersButton v-if="loading.main" :rounded="true" />
          <UtilsLinkButton v-else :rounded="true" :link="'/dash/department/add'"
            >Add new Department</UtilsLinkButton
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

  watch: {
    '$route.query'() {
      this.payloadWatch()
      this.refreshDepartment()
    },
  },

  data() {
    return {
      loading: { main: true, paginateCollege: true },
      error: true,
      departments: {},
      payload: {},

      // college filter
      collegeList: { pagination: { count: 0 } },
      selectedCollege: { alias_name: 'All' },
      collegePayload: {},
      disableCollegeBtns: true,
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
    // when Department is deleted
    deletedDepartment() {
      if (this.departments.results.length == 0) {
        if (this.payload.page != 1) {
          this.onPaginated(this.payload.page - 1)
        } else {
          this.onPaginated(1)
        }
      }
      this.refreshDepartment()
    },

    // fetch list of departments
    async getDepartments() {
      this.loading.main = true

      if (this.payload.college) {
        if (this.payload.college == 'All') {
          this.payload.college = undefined
        }
      }

      return this.$api.department
        .list(this.payload)
        .then((response) => {
          this.departments = response.data

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.departments = []

            this.$nuxt.error({
              statusCode: 404,
              message: 'Page not Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    filterDepartment() {
      this.payload = {}

      this.payload.college = this.selectedCollege.id

      this.$router.push({
        path: this.$route.path,
      })

      this.refreshDepartment()
    },

    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = await '1'
      }
    },

    refreshDepartment() {
      this.getDepartments().then(() => {
        this.loading.main = false
      })
    },

    // on paginated
    onPaginated(pageNum) {
      this.payload.page = pageNum
      this.$router.push({
        path: this.$route.path,
        query: {
          page: pageNum,
        },
      })
    },

    // fetch college list for filter
    async fetchCollegeList() {
      this.disableCollegeBtns = true
      this.loading.paginateCollege = true

      return this.$api.college.list(this.collegePayload).then((res) => {
        this.collegeList = res.data

        // append a new option for All at start
        this.collegeList.results.unshift({
          id: 'All',
          alias_name: 'All',
        })

        this.disableCollegeBtns = false
        this.loading.paginateCollege = false
      })
    },

    // on College filter next
    collegePaginateNext() {
      if (this.collegeList.pagination.next) {
        this.collegePayload.page = this.collegePayload.page + 1
        this.fetchCollegeList()
      }
    },

    // on College filter previous
    collegePaginatePrev() {
      if (this.collegeList.pagination.previous) {
        this.collegePayload.page = this.collegePayload.page - 1
        this.fetchCollegeList()
      }
    },
  },

  mounted() {
    this.payload.page = this.$route.query.page
    this.collegePayload.page = 1

    this.getDepartments().then(() => {
      if (!this.error) {
        this.loading.main = false
      }
    })

    this.fetchCollegeList().then(() => {
      this.loading.paginateCollege = false
    })
  },
}
</script>

<style scoped>
.college-filter-width {
  width: 11.5rem;
}
</style>
