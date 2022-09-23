<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <LoadersImage />
      </div>

      <div
        class="d-flex flex-column justify-content-center align-content-start text-break w-100"
      >
        <Lazy-LoadersText
          size="md"
          :length="12"
          class="text-primary text-gradient"
        />

        <div>
          <Lazy-LoadersText size="sm" para />
        </div>

        <!--- end:District -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadersDetailUniversityCard',
}
</script>

<style></style>
