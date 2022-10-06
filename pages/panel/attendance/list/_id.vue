<template>
  <section class="container-fluid my-4">
    <div
      class="card card-body bg-transparent d-flex justify-content-end pt-0 align-items-end"
    >
      <transition name="fade-x" mode="out-in" appear>
        <Lazy-LoadersButton btnColor="btn-primary" rounded v-if="loading" />

        <NuxtLink
          class="btn btn-rounded bg-gradient-primary text-white"
          :to="`/panel/attendance/mark/${$route.params.id}`"
          v-else
        >
          <span class="d-flex align-items-center gap-1">
            <i class="ri-add-line ri-lg mt-n1"></i>
            <span>Mark Attendance</span>
          </span>
        </NuxtLink>
      </transition>
    </div>
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">
          Attendance List
        </h1>
        <h4 class="text-secondary">
          All Attendances for
          <span class="text-warning fw-bold" v-if="loading">
            <lazy-LoadersText :length="2" size="xs" />
            <lazy-LoadersText :length="1" size="xs" />
          </span>
          <span class="text-warning fw-bold" v-else>{{ classs.name }}</span>
        </h4>
      </div>

      <div class="card-body">
        <transition name="scale-in" mode="out-in">
          <LoadersTable v-if="loading" />
          <div v-else>
            <ValidationObserver v-slot="{ handleSubmit }">
              <form
                class="row"
                @submit.prevent="handleSubmit(filterAttendance)"
              >
                <transition name="fade-x" mode="out-in">
                  <div class="col-12" v-if="toggleSearch">
                    <Lazy-DashInput
                      :validationRules="{
                        required: false,
                        min: 3,
                      }"
                      :data.sync="filter.search"
                      :type="'text'"
                      :icon="'ri-search-line'"
                      :placeholder="'Search'"
                      isTrail
                    />
                  </div>
                </transition>

                <div class="col-12">
                  <section
                    class="d-flex align-items-center justify-content-center flex-wrap"
                  >
                    <!-- start:Search -->
                    <div class="me-auto mb-3">
                      <div
                        class="btn btn-floating bg-gradient-primary text-white btn-s d-flex justify-content-center align-items-center"
                        @click="toggleSearchBar"
                      >
                        <i class="ri-search-line ri-lg"></i>
                      </div>
                    </div>
                    <!-- end:Search -->

                    <!-- start:Role Filter -->
                    <div class="w-10-rem mb-3">
                      <v-select
                        placeholder="Select Status"
                        :options="attendanceStatus"
                        v-model="filter.status"
                      >
                        <!-- selected -->
                        <template #selected-option="{ label }">
                          <div
                            class="d-flex justify-content-start align-items-center gap-1"
                          >
                            <i
                              class="text-primary text-gradient ri-filter-line mt-n1"
                            ></i>
                            <span>{{ label }}</span>
                          </div>
                        </template>
                      </v-select>
                    </div>
                    <!-- end:Role Filter -->

                    <!-- start:Filter -->
                    <div class="filter-widt mb-3 me-0 ms-aut">
                      <div class="d-block">
                        <DatePicker
                          v-model="filter.date"
                          type="date"
                          placeholder="Select Date Range"
                          valueType="format"
                          prefix-class="up"
                          format="DD-MMM-YYYY"
                          range
                        >
                        </DatePicker>
                      </div>
                    </div>
                    <!-- end:Filter -->
                  </section>

                  <div class="d-flex justify-content-end mb-3 gap-2">
                    <button
                      type="submit"
                      class="btn text-white bg-gradient-primary btn-rounded btn-sm"
                    >
                      Filter
                    </button>

                    <div
                      class="btn text-white bg-gradient-danger btn-rounded btn-sm"
                      @click="resetFilters"
                    >
                      Reset
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>

            <PanelAttendanceTable :attendances="attendances.results" />
          </div>
        </transition>

        <transition name="fade-x" mode="out-in">
          <Lazy-UtilsPagination
            class="mt-4"
            v-if="!loading && attendances.pagination.items != 0"
            :pagination.sync="attendances.pagination"
            @prevPage="onPaginated"
            @nextPage="onPaginated"
          />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'PanelAttendanceList',
  layout: 'panel',

  components: {
    DatePicker,
  },

  watch: {
    '$route.query'() {
      this.payloadWatch()
      this.refreshAttendance()
    },
  },

  data() {
    return {
      loading: true,
      error: true,

      classs: {},
      attendances: {},
      payload: {},
      filter: {
        date: [],
        status: '',
        search: '',
      },
      toggleSearch: false,

      attendanceStatus: ['Present', 'Late', 'Absent'],
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Attendance',
        url: '/panel/attendance',
      },
      {
        name: 'List',
        url: '/panel/attendance/list',
      },
    ])
  },

  methods: {
    resetFilters() {
      this.filter.date = []
      this.filter.status = ''
      this.filter.search = ''
      this.payload.is_present = undefined
      this.payload.is_late = undefined
      this.payload.is_absent = undefined
      this.payload.date_after = undefined
      this.payload.date_before = undefined
      this.payload.search = undefined

      this.payload.page = 1
      this.$router.push({
        path: this.$route.path,
      })

      return this.refreshAttendance()
    },

    toggleSearchBar() {
      this.toggleSearch
        ? ((this.toggleSearch = false), (this.filter.search = undefined))
        : (this.toggleSearch = true)
    },

    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = '1'
      }
    },

    // refresh Attendance
    async refreshAttendance() {
      return this.getAttendances().then(() => {
        this.loading = false
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

    async getClass() {
      let id = this.$route.params.id

      return this.$api.class
        .retrieve(id)
        .then((response) => {
          this.classs = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'Class does not Exist',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    async getAttendances() {
      this.loading = true

      this.payload.classs = this.$route.params.id
      this.payload.size = 20

      return this.$api.attendance
        .list(this.payload)
        .then((response) => {
          this.attendances = response.data
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.$nuxt.error({
              statusCode: 404,
              message: 'No Attendances found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    async filterAttendance() {
      if (this.filter.status == 'Present') {
        this.payload.is_present = true
        this.payload.is_late = undefined
        this.payload.is_absent = undefined
      } else if (this.filter.status == 'Late') {
        this.payload.is_present = undefined
        this.payload.is_late = true
        this.payload.is_absent = undefined
      } else if (this.filter.status == 'Absent') {
        this.payload.is_present = undefined
        this.payload.is_late = undefined
        this.payload.is_absent = true
      } else {
        this.payload.is_present = undefined
        this.payload.is_late = undefined
        this.payload.is_absent = undefined
      }

      if (this.filter.date[0] || this.filter.date[0] != null) {
        this.payload.date_after = this.$moment(this.filter.date[0]).format(
          'YYYY-MM-DD'
        )
        this.payload.date_before = this.$moment(this.filter.date[1]).format(
          'YYYY-MM-DD'
        )
      } else {
        this.payload.date_after = undefined
        this.payload.date_before = undefined
      }

      if (this.filter.search) {
        this.payload.search = this.filter.search
      } else {
        this.payload.search = undefined
      }

      this.payload.page = 1
      this.$router.push({
        path: this.$route.path,
      })

      return this.refreshAttendance()
    },
  },

  mounted() {
    this.payload.page = this.$route.query.page

    this.getClass()
      .then(() => {
        return this.getAttendances()
      })
      .then(() => {
        this.loading = false

        document.querySelectorAll('.form-outline').forEach((formOutline) => {
          new this.$mdb.Input(formOutline).init()
        })
      })
  },
}
</script>

<style scoped>
.filter-width {
  width: 10.5rem;
}
</style>
