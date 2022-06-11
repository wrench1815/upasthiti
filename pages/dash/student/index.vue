<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-body">Student Index</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashStudentIndex',
  layout: 'dash',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Student',
        url: '/student',
      },
    ])
  },
}
</script>

<style></style>
