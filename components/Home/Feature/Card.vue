<template>
  <div class="card">
    <div class="card-body">
      <span
        class="card-title fs-5 px-4 py-1 fw-bold rounded-pill text-white"
        :class="headingColor"
        >{{ headingText }}</span
      >
      <p class="card-text mt-3">
        {{ paraText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFeatureCard',

  props: {
    headingColor: {
      type: String,
      default: '',
    },
    headingText: {
      type: String,
      default: '',
    },
    paraText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
