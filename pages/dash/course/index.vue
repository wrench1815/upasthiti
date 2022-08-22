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

        <!-- start:College Filter -->
        <!-- <div class="college-filter-width mb-3 me-0 ms-sm-0 ms-auto">
            <v-select
              placeholder="Select Filter"
              :options="collegeList.results"
              v-model="selectedCollege"
              :clearable="false"
              label="alias_name"
              @option:selected="filterDepartment"
              :loading="loading.paginateCollege"
            > -->
        <!-- spinner -->
        <!-- <template #spinner="{ loading }">
                <div
                  v-if="loading"
                  class="vs__spinner"
                  style="border-left-color: var(--mdb-primary)"
                >
                  loading...
                </div>
              </template> -->

        <!-- options -->
        <!-- <template #option="{ alias_name }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                >
                  <span>{{ alias_name }}</span>
                </div>
              </template> -->

        <!-- selected -->
        <!-- <template #selected-option="{ alias_name }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1"
                >
                  <i
                    class="text-primary text-gradient ri-government-fill mt-n1"
                  ></i>
                  <span>{{ alias_name }}</span>
                </div>
              </template> -->

        <!-- footer for pagination -->
        <!-- <li
                slot="list-footer"
                class="d-flex gap-2 justify-content-center align-items-center my-2"
                v-if="collegeList.pagination.count > 1"
              > -->
        <!-- previous button -->
        <!-- <button
                  class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                  :disabled="
                    disableCollegeBtns || !collegeList.pagination.previous
                  "
                  @click="collegePaginatePrev"
                  data-mdb-ripple-color="primary"
                >
                  <i class="ri-arrow-left-s-line"></i>
                </button> -->

        <!-- next button -->
        <!-- <button
                  class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                  :disabled="disableCollegeBtns || !collegeList.pagination.next"
                  @click="collegePaginateNext"
                  data-mdb-ripple-color="primary"
                >
                  <i class="ri-arrow-right-s-line"></i>
                </button>
              </li>
            </v-select>
          </div> -->
        <!-- end:College Filter -->
        <!-- </section> -->

        <!-- <LoadersTable v-if="loading.main" /> -->
        <!-- <DashCourseTable  :courses.sync="courses.results" /> -->
        <Lazy-DashCourseTable />

        <!-- <Lazy-UtilsPagination
          class="mt-4"
          v-if="!loading.main && departments.pagination.items != 0"
          :pagination.sync="departments.pagination"
          @prevPage="onPaginated"
          @nextPage="onPaginated"
        /> -->

        <div class="d-flex justify-content-end mt-3">
          <!-- <LoadersButton v-if="loading.main" :rounded="true" /> -->
          <UtilsLinkButton :rounded="true" :link="'/dash/course/add'"
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

  data() {
    return {
      // loading: { main: true, paginateCollege: true },
      error: true,
      course: {},
      // payload: {},

      // college filter
      // collegeList: { pagination: { count: 0 } },
      // selectedCollege: { alias_name: 'All' },
      // collegePayload: {},
      // disableCollegeBtns: true,
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
}
</script>

<style scoped></style>
