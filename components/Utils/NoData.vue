<template>
  <div class="d-flex flex-column align-items-center">
    <!-- Error Background -->
    <div class="position-relative">
      <!-- Error Image -->
      <img
        class="img-fluid"
        src="~/assets/svg/no_data.svg"
        alt="Nothing to see here"
      />

      <!-- Error Message -->
      <div class="text-center position-absolute top error-pos">
        <h4 class="text-gradient text-primary d-inline-block">
          {{ message }}
        </h4>
      </div>
    </div>
    <!-- Error Background -->
  </div>
</template>

<script>
export default {
  name: 'UtilsNoData',

  props: {
    message: {
      type: String,
      default: 'Nothing to see here',
    },
  },
}
</script>

<style scoped>
.error-pos {
  left: 40%;
  right: 6%;
}

.top {
  top: 55%;
}
</style>
