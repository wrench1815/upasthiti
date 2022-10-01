<template>
  <section>
    <transition name="scale-in" mode="out-in">
      <div v-if="loading">
        <div class="row">
          <div
            class="col-12 col-md-6 col-xxl-4"
            v-for="(item, index) in 5"
            :key="index"
          >
            <LoadersDetailClassStudentCard />
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div
            class="col-12 col-md-6 col-xxl-4"
            v-for="stud in studentList.results"
            :key="stud.id"
          >
            <Lazy-DashClassDetailStudentCard :student="stud" />
          </div>
        </div>
        <Lazy-UtilsPagination
          class="mt-4"
          v-if="!loading && studentList.pagination.items != 0"
          :pagination.sync="studentList.pagination"
          :scroll="false"
          @prevPage="onPaginated"
          @nextPage="onPaginated"
        />
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'DashClassDetailStudentIndex',

  props: {
    classId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      studentList: {},
      loading: true,
      payload: {},
    }
  },

  methods: {
    getStudents() {
      this.loading = true
      this.payload.classs = this.classId

      return this.$api.student
        .list(this.payload)
        .then((resp) => {
          this.studentList = resp.data
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

    // on paginated
    onPaginated(pageNum) {
      this.payload.page = pageNum
      this.refreshStudents()
    },

    // refresh Students
    refreshStudents() {
      this.getStudents().then(() => {
        this.loading = false
      })
    },
  },

  mounted() {
    this.payload.page = 1

    this.getStudents().then(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
