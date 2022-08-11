<template>
  <div>
    <Lazy-LoadersImage class="mb-4" v-if="showImage" />
    <Lazy-LoadersFormInput v-for="item in inputCount" :key="item" />

    <div
      class="d-flex placeholder-wave"
      :class="{
        'justify-content-end': btnEnd,
        'justify-content-center': btnCenter,
        'justify-content-start': btnStart,
      }"
    >
      <button
        class="btn btn-rounded mb-4 px-5 placeholder"
        :class="`btn-${btnColor}`"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadersFormIndex',

  props: {
    inputCount: {
      type: Number,
      default: 1,
    },
    btnStart: {
      type: Boolean,
      default: true,
    },
    btnEnd: {
      type: Boolean,
      default: false,
    },
    btnCenter: {
      type: Boolean,
      default: false,
    },
    btnColor: {
      type: String,
      default: 'primary',
    },
    showImage: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
