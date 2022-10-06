<template>
  <section class="container-fluid my-4">
    <section class="card card-body">
      <h1 class="mb-3 h1 text-primary text-gradient">Upasthiti Dash</h1>

      <hr class="my-4" />

      <div class="h4">Welcome {{ loggedInUser.full_name }}</div>
      <div class="h5 text-muted">
        Logged in as <span class="text-capitalize">{{ loggedInUserRole }}</span>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashIndex',
  layout: 'dash',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Home',
        url: '/dash',
      },
    ])
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser', 'loggedInUserRole']),
  },
  data() {
    return { user: {} }
  },
}
</script>

<style></style>
