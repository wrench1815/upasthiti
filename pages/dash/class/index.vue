<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-body">Class Index</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashClassIndex',
  layout: 'dash',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Class',
        url: '/class',
      },
    ])
  },
}
</script>

<style></style>
