<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-dark">Users</h1>
        <h3 class="text-secondary text-capitalize">lists all Registerd User</h3>
      </div>
      <div class="card-body">
        <LayoutDashUserTable />
        <!-- <section class="row">
          <LayoutDashUserCard class="col-3" v-for="card in 8" :key="card" />
        </section> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashIndex',
  layout: 'dash',
}
</script>

<style></style>
