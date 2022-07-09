<template>
  <nav aria-label="...">
    <ul class="pagination pagination-circle">
      <!-- start:first -->
      <li class="page-item">
        <a class="page-link text-primary">
          <i class="ri-rewind-fill"></i>
        </a>
      </li>
      <!-- end:first -->

      <!-- start:previous -->
      <li class="page-item">
        <a class="page-link">
          <i class="ri-arrow-left-s-line"></i>
        </a>
      </li>
      <!-- end:previous -->

      <li class="page-item"><a class="page-link">1</a></li>
      <li class="page-item active" aria-current="page">
        <a class="page-link"
          >2 <span class="visually-hidden">(current)</span></a
        >
      </li>
      <li class="page-item"><a class="page-link">3</a></li>
      <!-- start:next -->
      <li class="page-item">
        <a class="page-link"><i class="ri-arrow-right-s-line"></i></a>
      </li>
      <!-- end:next -->

      <!-- start:last -->
      <li class="page-item">
        <NuxtLink to="/dash/user?page=10" class="page-link text-primary">
          <i class="ri-speed-fill"></i>
        </NuxtLink>
      </li>
      <!-- end:last -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'UtilsPagination',
}
</script>

<style scoped></style>
