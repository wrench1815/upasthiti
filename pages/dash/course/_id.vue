<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Course Edit</h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-info fw-bold" v-if="loading.main">
            <lazy-LoadersText :length="2" size="xs" />
            <lazy-LoadersText :length="1" size="xs" />
          </span>
          <span class="text-info fw-bold" v-else
            >{{ course.code }}
            <!-- <span class="text-dark text-lowercase px-2">of</span
            >{{ course.college.name }} -->
          </span>
        </h3>
      </div>

      <div class="card-body">
        <transition name="scale-in" mode="out-in">
          <LoadersForm
            :inputCount="3"
            :btnColor="'primary'"
            btnCenter
            v-if="loading.main"
          />
          <!-- for Valdation -->
          <ValidationObserver v-slot="{ handleSubmit }" v-else>
            <!-- start:Course Add Form -->
            <form @submit.prevent="handleSubmit(addCourse)">
              <div class="row">
                <!-- start:Course Title -->
                <div class="col">
                  <Lazy-DashInput
                    :label="'Title'"
                    :validationRules="{
                      required: true,
                      min: 3,
                    }"
                    :data.sync="course.title"
                    :type="'text'"
                    :icon="'ri-font-size'"
                    isRequired
                  />
                </div>
              </div>

              <!-- start:Course Code -->
              <div class="row">
                <div class="col">
                  <Lazy-DashInput
                    :label="'Code'"
                    :validationRules="{
                      required: true,
                      min: 3,
                      max: 15,
                      capitalizeOrNum: true,
                    }"
                    :data.sync="course.code"
                    :type="'text'"
                    :icon="'ri-font-size'"
                    isRequired
                  />
                </div>
              </div>
              <!-- end:Course Code -->

              <!--Start:University -->
              <div class="col-12">
                <label class="form-label required"
                  ><i class="ri-government-fill text-primary text-gradient"></i>
                  University</label
                >
                <div class="col">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :rules="{ required: true }"
                  >
                    <v-select
                      placeholder="Select University"
                      :options="universityList.results"
                      v-model="course.university"
                      label="alias"
                      :loading="loading.paginateUni"
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
                      <template #option="{ alias, logo }">
                        <div
                          class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                        >
                          <span class="d-flex align-items-center gap-2">
                            <span>
                              <img
                                class="avatar avatar-sm border rounded-circle bg-white"
                                :data-src="logo"
                                :alt="`${alias}'s logo`"
                                v-lazy-load
                              />
                            </span>
                            <span>{{ alias }}</span>
                          </span>
                        </div>
                      </template>

                      <!-- footer for pagination -->
                      <li
                        slot="list-footer"
                        class="d-flex gap-2 justify-content-center align-items-center my-2"
                        v-if="universityList.pagination.count > 1"
                      >
                        <!-- previous button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableUniBtns ||
                            !universityList.pagination.previous
                          "
                          @click.prevent="uniPaginatePrev"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>

                        <!-- next button -->
                        <button
                          class="btn btn-sm btn-floating border border-primary btn-rounded text-primary ripple d-flex justify-content-center align-items-center"
                          :disabled="
                            disableUniBtns || !universityList.pagination.next
                          "
                          @click.prevent="uniPaginateNext"
                          data-mdb-ripple-color="primary"
                        >
                          <i class="ri-arrow-right-s-line"></i>
                        </button>
                      </li>
                    </v-select>
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
              <!-- end:University-->

              <!-- Submit button -->
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn bg-gradient-info text-white btn-rounded mb-4"
                >
                  Update Course
                </button>
              </div>
            </form>
            <!-- End:Course Add Form -->
          </ValidationObserver>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCourseEdit',
  layout: 'dash',

  data() {
    return {
      loading: {
        main: true,
        paginateUni: true,
      },

      course: {
        title: '',
        code: '',
        university: '',
      },

      // universty related
      disableUniBtns: true,
      universityList: [],
      uniPayload: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Course',
        url: '/dash/course',
      },
      {
        name: 'Edit',
      },
    ])
  },

  methods: {
    // fetch universities for select
    async getUniversities() {
      this.disableUniBtns = true
      this.loading.paginateUni = true

      return this.$api.university.list(this.uniPayload).then((response) => {
        this.universityList = response.data

        this.disableUniBtns = false
        this.loading.paginateUni = false
      })
    },

    // on Uni select next
    uniPaginateNext() {
      if (this.universityList.pagination.next) {
        this.uniPayload.page = this.uniPayload.page + 1
        this.getUniversities()
      }
    },

    // on Uni select previous
    uniPaginatePrev() {
      if (this.universityList.pagination.previous) {
        this.uniPayload.page = this.uniPayload.page - 1
        this.getUniversities()
      }
    },
  },

  mounted() {
    this.uniPayload.page = 1

    this.getUniversities().then(() => {
      this.loading.main = false

      document.querySelectorAll('.form-outline').forEach((formOutline) => {
        new this.$mdb.Input(formOutline).init()
      })
    })
  },
}
</script>

<style></style>
