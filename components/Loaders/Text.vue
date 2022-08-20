<template>
  <span class="placeholder-wave">
    <template v-if="para">
      <span class="col-7 placeholder" :class="placeholderSize"></span>
      <span class="col-3 placeholder" :class="placeholderSize"></span>
      <span class="col-3 placeholder" :class="placeholderSize"></span>
      <span class="col-5 placeholder" :class="placeholderSize"></span>
      <span class="col-4 placeholder" :class="placeholderSize"></span>
      <span class="col-6 placeholder" :class="placeholderSize"></span>
      <span class="col-12 placeholder" :class="placeholderSize"></span>
      <span class="col-2 placeholder" :class="placeholderSize"></span>
    </template>
    <template v-else>
      <span
        class="placeholder"
        :class="[`col-${length}`, placeholderSize]"
      ></span>
    </template>
  </span>
</template>

<script>
export default {
  name: 'LoadersText',

  props: {
    para: {
      type: Boolean,
      default: false,
    },
    length: {
      type: Number,
      default: 1,
    },
    size: {
      type: String,
      default: 'md',
    },
  },

  computed: {
    placeholderSize() {
      if (this.size == 'xs') {
        return 'placeholder-xs'
      } else if (this.size == 'sm') {
        return 'placeholder-sm'
      } else if (this.size == 'lg') {
        return 'placeholder-lg'
      } else {
        return ''
      }
    },
  },
}
</script>

<style></style>
