<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Course</h1>
        <h3 class="text-secondary text-capitalize">
          Lists all Registerd Courses
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

          <!-- start:University Filter -->
          <div class="uni-filter-width mb-3 me-0 ms-auto">
            <v-select
              placeholder="Select Filter"
              :options="uniList.results"
              v-model="selectedUni"
              :clearable="false"
              label="alias"
              @option:selected="filterCourse"
            >
              <!-- options -->
              <template #option="{ alias }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                >
                  <span>{{ alias }}</span>
                </div>
              </template>

              <!-- selected -->
              <template #selected-option="{ alias }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1"
                >
                  <i class="text-primary text-gradient ri-bank-fill mt-n1"></i>
                  <span>{{ alias }}</span>
                </div>
              </template>

              <!-- footer for pagination -->
              <li
                slot="list-footer"
                class="d-flex gap-2 justify-content-center align-items-center my-2"
                v-if="uniList.pagination.count > 1"
              >
                <!-- previous button -->
                <button
                  class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                  :disabled="disableUniBtns || !uniList.pagination.previous"
                  @click="uniPaginatePrev"
                  data-mdb-ripple-color="primary"
                >
                  <i class="ri-arrow-left-s-line"></i>
                </button>

                <!-- next button -->
                <button
                  class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                  :disabled="disableUniBtns || !uniList.pagination.next"
                  @click="uniPaginateNext"
                  data-mdb-ripple-color="primary"
                >
                  <i class="ri-arrow-right-s-line"></i>
                </button>
              </li>
            </v-select>
          </div>
          <!-- end:University Filter -->
        </section>

        <LoadersTable v-if="loading.main" />
        <!-- <DashCourseTable  :courses.sync="courses.results" /> -->
        <Lazy-DashCourseTable :courses.sync="course.results" v-else />

        <Lazy-UtilsPagination
          class="mt-4"
          v-if="!loading.main && course.pagination.items != 0"
          :pagination.sync="course.pagination"
          @prevPage="onPaginated"
          @nextPage="onPaginated"
        />

        <div class="d-flex justify-content-end mt-3">
          <LoadersButton v-if="loading.main" :rounded="true" />
          <UtilsLinkButton :rounded="true" :link="'/dash/course/add'" v-else
            >Add new Course</UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCourseIndex',
  layout: 'dash',

  watch: {
    '$route.query'() {
      this.payloadWatch()
    },
  },

  data() {
    return {
      // colleges: [],
      loading: {
        main: true,
      },
      error: true,
      course: {},
      payload: {},
      uniList: {},
      uniPayload: {},
      disableUniBtns: true,
      selectedUni: { alias: 'All' },
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Course',
        url: '/dash/course',
      },
    ])
  },

  methods: {
    // on filter
    filterCourse() {
      this.payload = {}

      this.payload.university = this.selectedUni.id
      // this.payload.district = this.selectedDistrict

      this.$router.push({
        path: this.$route.path,
      })

      this.refreshCourse()
    },

    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = await '1'
      }
    },

    async getCourse() {
      this.loading.main = true

      if (this.payload.university) {
        if (this.payload.university == 'All') {
          this.payload.university = undefined
        }
      }

      return this.$api.course
        .list(this.payload)
        .then((response) => {
          this.course = response.data

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.course = {}

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

    // when Course is deleted
    deletedCourse() {
      if (this.course.results.length == 1) {
        if (this.payload.page && this.payload.page != 1) {
          this.onPaginated(this.payload.page - 1)
        } else {
          this.onPaginated(1)
        }
      }
      this.refreshCourse()
    },

    // refresh Course
    refreshCourse() {
      this.getCourse().then(() => {
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

    // fetch University data for filter
    async getUni() {
      this.disableUniBtns = true

      return this.$api.university.list(this.uniPayload).then((response) => {
        this.uniList = response.data

        // append a new option for All at start
        this.uniList.results.unshift({
          id: 'All',
          alias: 'All',
        })

        this.disableUniBtns = false
      })
    },

    // on Uni filter next
    uniPaginateNext() {
      if (this.uniList.pagination.next) {
        this.uniPayload.page = this.uniPayload.page + 1
        this.getUni()
      }
    },

    // on Uni filter previous
    uniPaginatePrev() {
      if (this.uniList.pagination.previous) {
        this.uniPayload.page = this.uniPayload.page - 1
        this.getUni()
      }
    },
  },

  mounted() {
    this.payload.page = this.$route.query.page
    // this.districtsList = ['All', ...this.districts]

    this.uniPayload.page = 1

    this.getUni()
      .then(() => {
        return this.getCourse()
      })
      .then(() => {
        if (!this.error) {
          this.loading.main = false
        }
      })
  },
}
</script>
<style scoped>
.filter-width {
  width: 10.5rem;
}

.uni-filter-width {
  width: 11.5rem;
}
</style>
