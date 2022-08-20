<template>
  <section>
    <transition name="scale-in" mode="out-in">
      <div v-if="loading">
        <Lazy-LoadersDetailUserDeptCard :count="3" />
      </div>

      <div v-else>
        <div class="row" v-if="depts.pagination.items > 0">
          <div
            class="col-sm-6 col-lg-4 col-md-6 col-12"
            v-for="dept in depts.results"
            :key="dept.id"
          >
            <Lazy-DashUserDetailDeptCard :dept="dept" />
          </div>
        </div>

        <div v-else>
          <Lazy-UtilsNoData />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'UserDetailDept',

  props: {
    uId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      depts: [],
      loading: true,
    }
  },

  methods: {
    fetchDepartments() {
      this.loading = true
      let payload = {
        hod: this.uId,
        size: 100,
      }

      return this.$api.department.list(payload).then((resp) => {
        this.depts = resp.data
      })
    },
  },

  mounted() {
    this.fetchDepartments().then(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
