<template>
  <section class="container-fluid my-4">
    <div
      class="card card-body bg-transparent d-flex justify-content-end pt-0 align-items-end"
    >
      <button class="btn btn-rounded bg-gradient-primary text-white">
        <span class="d-flex align-items-center gap-1">
          <i class="ri-add-line ri-lg mt-n1"></i>
          <span>Add Class</span>
        </span>
      </button>
    </div>

    <transition name="scale-in" mode="out-in" appear>
      <div class="card card-body" v-if="loading.main">
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="item in 6" :key="item">
            <div class="card card-body shadow-0 border">
              <LoadersText size="xs" para />
            </div>
          </div>
        </div>
      </div>

      <div class="card" v-else>
        <div class="card-header">
          <h1 class="text-gradient text-primary d-inline-block">Class List</h1>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div
              class="col-12 col-md-6 col-lg-4"
              v-for="item in classes.results"
              :key="item.id"
            >
              <PanelClassCard :classs="item" />
            </div>

            <div class="col-12">
              <transition name="fade-x" mode="out-in">
                <Lazy-UtilsPagination
                  class="mt-1"
                  v-if="!loading.main && classes.pagination.items != 0"
                  :pagination.sync="classes.pagination"
                  @prevPage="onPaginated"
                  @nextPage="onPaginated"
                />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'PanelClassIndex',
  layout: 'panel',

  watch: {
    '$route.query'() {
      this.payloadWatch()
      this.refreshClasses()
    },
  },

  data() {
    return {
      loading: {
        main: true,
      },
      error: true,

      classes: {},
      payload: {},
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Class',
        url: '/panel/class',
      },
    ])
  },

  methods: {
    // watcher for route query
    async payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = await this.$route.query.page
      } else {
        this.payload.page = '1'
      }
    },

    async getClasses() {
      this.loading.main = true

      // if (this.payload.university) {
      //   if (this.payload.university == 'All') {
      //     this.payload.university = undefined
      //   }
      // }

      return this.$api.class
        .list(this.payload)
        .then((response) => {
          this.classes = response.data

          this.error = false
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.error = true
            this.classes = {}

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

    // refresh Classes
    refreshClasses() {
      this.getClasses().then(() => {
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
  },

  mounted() {
    this.payload.page = this.$route.query.page

    this.getClasses().then(() => {
      if (!this.error) {
        this.loading.main = false
      }
    })
  },
}
</script>

<style></style>
