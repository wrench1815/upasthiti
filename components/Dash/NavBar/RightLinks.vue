<template>
  <!-- start:right links -->
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <div class="dropdown dropstart">
      <button
        class="btn btn-white btn-floating shadow-none"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="ri-user-line ri-2x text-primary"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <NuxtLink class="dropdown-item" to="/">Profile</NuxtLink>
        </li>
        <li>
          <NuxtLink class="dropdown-item" to="/">Main Site</NuxtLink>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <div class="dropdown-item text-danger pointer-pointer">Logout</div>
        </li>
      </ul>
    </div>
  </ul>
  <!-- start:right links -->
</template>

<script>
export default {
  name: 'DashNavBarRightLinks',
}
</script>

<style></style>
