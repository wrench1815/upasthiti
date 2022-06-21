<template>
  <div
    class="btn placeholder placeholder-wave col-4 col-md-2 col-lg-1"
    :class="classes"
  ></div>
</template>

<script>
export default {
  name: 'LoadersButton',

  props: {
    btnColor: {
      type: String,
      default: 'btn-primary',
    },

    rounded: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      classes: '',
    }
  },

  created() {
    this.classes = `${this.btnColor}`
    if (this.rounded) {
      this.classes += ' btn-rounded'
    }
  },
}
</script>

<style></style>
