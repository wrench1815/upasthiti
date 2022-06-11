<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-body">Teacher Index</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashTeacherIndex',
  layout: 'dash',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Teacher',
        url: '/teacher',
      },
    ])
  },
}
</script>

<style></style>
