<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-body">HOD Index</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashHodIndex',
  layout: 'dash',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Hod',
        url: '/hod',
      },
    ])
  },
}
</script>

<style></style>
