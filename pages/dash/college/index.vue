<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-body">College Index</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeIndex',
  layout: 'dash',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'College',
        url: '/college',
      },
    ])
  },
}
</script>

<style></style>
