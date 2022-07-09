<template>
  <div>
    <NuxtLink :to="link" class="btn btn-primary" :class="classes">
      <slot />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'LinkButton',

  props: {
    link: {
      type: String,
      default: '/',
    },

    rounded: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: 'btn-primary',
    },
  },

  data() {
    return {
      classes: '',
    }
  },

  created() {
    this.classes = `${this.color}`
    if (this.rounded) {
      this.classes += ' btn-rounded'
    }
  },
}
</script>

<style></style>
