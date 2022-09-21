<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Students</h1>
        <h3 class="text-secondary text-capitalize">
          Lists All Registered Student
        </h3>
      </div>
      <div class="card-body">
        <!-- <section
          class="d-flex align-items-center justify-content-center flex-wrap"
          v-if="!loading.main"
        > -->
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
        <!-- <div class="uni-filter-width mb-3 me-0 ms-auto">
            <v-select
              placeholder="Select Filter"
              :options="uniList.results"
              v-model="selectedUni"
              :clearable="false"
              label="alias"
              @option:selected="filterCollege"
            > -->
        <!-- options -->
        <!-- <template #option="{ alias }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                >
                  <span>{{ alias }}</span>
                </div>
              </template> -->

        <!-- selected -->
        <!-- <template #selected-option="{ alias }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1"
                >
                  <i class="text-primary text-gradient ri-bank-fill mt-n1"></i>
                  <span>{{ alias }}</span>
                </div>
              </template> -->

        <!-- footer for pagination -->
        <!-- <li
                slot="list-footer"
                class="d-flex gap-2 justify-content-center align-items-center my-2"
                v-if="uniList.pagination.count > 1"
              > -->
        <!-- previous button -->
        <!-- <button
                  class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                  :disabled="disableUniBtns || !uniList.pagination.previous"
                  @click="uniPaginatePrev"
                  data-mdb-ripple-color="primary"
                >
                  <i class="ri-arrow-left-s-line"></i>
                </button> -->

        <!-- next button -->
        <!-- <button
                  class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                  :disabled="disableUniBtns || !uniList.pagination.next"
                  @click="uniPaginateNext"
                  data-mdb-ripple-color="primary"
                >
                  <i class="ri-arrow-right-s-line"></i>
                </button>
              </li>
            </v-select>
          </div> -->
        <!-- end:University Filter -->
        <!-- </section> -->

        <!-- <LoadersTable v-if="loading.main" /> -->
        <transition name="scale-in" mode="out-in">
          <LoadersTable v-if="loading.main" />
          <DashStudentTable
            v-else
            :students.sync="students.results"
            @update:students="deletedStudent()"
          />
        </transition>

        <transition name="scale-in" mode="out-in">
          <Lazy-UtilsPagination
            class="mt-4"
            v-if="!loading.main && students.pagination.items != 0"
            :pagination.sync="students.pagination"
            @prevPage="onPaginated"
            @nextPage="onPaginated"
          />
        </transition>

        <div class="d-flex justify-content-end mt-3">
          <transition name="scale-in" mode="out-in">
            <Lazy-LoadersButton v-if="loading.main" :rounded="true" />

            <UtilsLinkButton :rounded="true" :link="'/dash/student/add'" v-else
              >Add new Student</UtilsLinkButton
            >
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashStudentIndex',
  layout: 'dash',

  watch: {
    '$route.query'() {
      this.payloadWatch()
      this.refreshStudents()
    },
  },

  data() {
    return {
      loading: {
        main: true,
      },
      error: true,

      students: {},

      payload: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Student',
        url: '/dash/student',
      },
    ])
  },

  methods: {
    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = await '1'
      }
    },

    async getStudents() {
      this.loading.main = true

      // if (this.payload.district) {
      //   if (this.payload.district == 'All') {
      //     this.payload.district = undefined
      //   }
      // }

      // if (this.payload.university) {
      //   if (this.payload.university == 'All') {
      //     this.payload.university = undefined
      //   }
      // }

      return this.$api.student
        .list(this.payload)
        .then((response) => {
          this.students = response.data

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.students = {}

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

    // refresh Students
    refreshStudents() {
      this.getStudents().then(() => {
        this.loading.main = false
      })
    },

    // when Student is deleted
    deletedStudent() {
      if (this.students.results.length == 0) {
        if (this.payload.page != 1) {
          this.onPaginated(this.payload.page - 1)
        } else {
          this.onPaginated(1)
        }
      }

      this.refreshStudents()
    },
  },

  mounted() {
    this.payload.page = this.$route.query.page
    this.payload.size = 1

    this.getStudents().then(() => {
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
