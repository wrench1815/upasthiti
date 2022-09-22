<template>
  <div class="container-fluid">
    <div class="card card-body pb-0 pt-3">
      <h5>{{ lastElement.name }}</h5>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link :to="'/dash'">Dash</nuxt-link>
          </li>
          <li
            class="breadcrumb-item"
            v-for="(crumb, index) in breadCrumbs"
            :key="index"
          >
            <NuxtLink :to="crumb.url" v-if="crumb.name != lastElement.name">{{
              crumb.name
            }}</NuxtLink>
            <span v-else>
              {{ crumb.name }}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashNavToolBar',

  computed: {
    ...mapGetters('breadCrumbs', ['breadCrumbs', 'lastElement']),
  },
}
</script>

<style scoped></style>
