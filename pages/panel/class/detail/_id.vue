<template>
  <section class="container-fluid my-4">
    <div class="card">
      <div class="card-body">
        <NuxtLink
          class="text-wrap d-inline-block"
          :to="`/panel/class/edit/${id}`"
        >
          <span class="d-inline">
            <span class="better-underline"> Edit Class </span>
            <span class="link"></span>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PanelClassDetail',
  layout: 'panel',

  computed: {
    id() {
      return this.$route.params.id
    },
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Class',
        url: '/panel/class',
      },
      {
        name: 'Detail',
      },
    ])
  },
}
</script>

<style></style>
