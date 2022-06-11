<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-body">Attendance Index</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashAttendanceIndex',
  layout: 'dash',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Attendance',
        url: '/attendance',
      },
    ])
  },
}
</script>

<style></style>
