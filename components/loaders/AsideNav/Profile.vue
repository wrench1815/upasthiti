<template>
  <div>
    <div
      class="d-flex align-items-center justify-content-between gap-2 placeholder-wave"
    >
      <!-- start:User Image -->
      <LoadersButton
        class="btn-floating"
        :btnColor="'btn-dark'"
        :rounded="true"
      />
      <!-- end:User Image -->

      <!-- start:User Info -->
      <div class="placeholder-wav w-100">
        <span class="placeholder placeholder-xs w-100"></span>
        <span class="placeholder placeholder-xs w-75"></span>
      </div>
      <!-- end:User Info -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
