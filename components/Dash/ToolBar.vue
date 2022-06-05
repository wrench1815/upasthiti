<template>
  <div class="container">
    <div class="card card-body pb-0 pt-3">
      <h5>{{ lastElement.name }}</h5>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link :to="'/dash'">Dash</nuxt-link>
          </li>
          <li class="breadcrumb-item" v-for="crumb in breadCrumbs">
            {{ crumb.name }}
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashToolBar',

  computed: {
    ...mapGetters('breadCrumbs', ['breadCrumbs', 'lastElement']),
  },
}
</script>

<style scoped></style>
