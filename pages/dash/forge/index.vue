<template>
  <section class="container-fluid my-4">
    <div class="card">
      <h2 class="card-header">List of all available Items</h2>
      <ul class="list-group list-unstyled">
        <li
          class="list-group-item"
          v-for="(forge, index) in forgeList"
          :key="index"
        >
          <div class="card-body px-0">
            <div class="mb-2">
              {{ forge.description }}
            </div>
            <NuxtLink :to="forge.url" class="btn btn-primary btn-rounded">
              {{ forge.name }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashForgeIndex',
  layout: 'dash',

  data() {
    return {
      forgeList: [
        {
          name: 'Item a',
          description:
            'Item for creating a Principal, its college and its department',
          url: '/dash/forge/a',
        },
      ],
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Forge',
        url: '/dash/forge',
      },
    ])
  },
}
</script>
