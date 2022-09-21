<template>
  <section class="container-fluid my-4">
    <div class="card">
      <h2 class="card-header">List of all available Blueprints</h2>

      <div v-for="(item, index) in forgeList" :key="index">
        <div class="card">
          <div class="card-body">
            <h4 class="text-primary fw-bold">{{ item.name }}</h4>
            <p>{{ item.description }}</p>
            <NuxtLink class="btn btn-primary btn-rounded" :to="item.url"
              >start</NuxtLink
            >
          </div>
        </div>
      </div>
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
          name: 'Blueprint 1',
          description:
            'Creates a College, Principal, Departments and their HODS',
          url: '/dash/forge/blueprint/1',
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
