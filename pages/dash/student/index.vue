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

        <Lazy-DashStudentTable />

        <!-- <Lazy-UtilsPagination
          class="mt-4"
          v-if="!loading.main && course.pagination.items != 0"
          :pagination.sync="course.pagination"
          @prevPage="onPaginated"
          @nextPage="onPaginated"
        /> -->

        <div class="d-flex justify-content-end mt-3">
          <!-- <LoadersButton v-if="loading.main" :rounded="true" /> -->
          <!-- <UtilsLinkButton :rounded="true" :link="'/dash/student/add'" v-else
            >Add new Student</UtilsLinkButton
          > -->
          <UtilsLinkButton :rounded="true" :link="'/dash/student/add'"
            >Add new Student</UtilsLinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashStudentIndex',
  layout: 'dash',

  data() {
    return {
      loading: {
        main: true,
      },
      error: true,

      // payload: {},
      // uniList: {},
      // uniPayload: {},
      // disableUniBtns: true,
      // selectedUni: { alias: 'All' },
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
  // methods: {

  // },
  // mounted() {
  //   this.payload.page = this.$route.query.page

  //   this.uniPayload.page = 1
  //   this.getUni()
  //     .then(() => {
  //       return this.getCourse()
  //     })
  //     .then(() => {
  //       if (!this.error) {
  //         this.loading.main = false
  //       }
  //     })
  // },
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
