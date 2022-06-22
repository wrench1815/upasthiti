<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>Users</h2>
        <p>lists all Registerd User</p>
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
