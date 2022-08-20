<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <Lazy-LoadersImage />
      </div>

      <div
        class="d-flex flex-column justify-content-center align-content-start w-100"
      >
        <Lazy-LoadersText size="sm" para />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadersDetailUserCollegeCard',
}
</script>

<style></style>
