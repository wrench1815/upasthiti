<template>
   <section class="container-fluid my-4">
  </section>
</template>

<script>
export default {
name: 'PanelIndex',
  layout: 'panel',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Home',
        url: '/panel',
      },
    ])
  },
}
</script>

<style>

</style>
