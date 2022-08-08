<template>
  <span class="placeholder-wave">
    <template v-if="para">
      <span
        class="col-7 placeholder"
        :class="{
          'placeholder-sm': size == 'zs',
          'placeholder-sm': size == 'sm',
          '': size == 'md',
          'placeholder-lg': size == 'lg',
        }"
      ></span>
      <span
        class="col-3 placeholder"
        :class="{
          'placeholder-sm': size == 'zs',
          'placeholder-sm': size == 'sm',
          '': size == 'md',
          'placeholder-lg': size == 'lg',
        }"
      ></span>
      <span
        class="col-3 placeholder"
        :class="{
          'placeholder-sm': size == 'zs',
          'placeholder-sm': size == 'sm',
          '': size == 'md',
          'placeholder-lg': size == 'lg',
        }"
      ></span>
      <span
        class="col-5 placeholder"
        :class="{
          'placeholder-sm': size == 'zs',
          'placeholder-sm': size == 'sm',
          '': size == 'md',
          'placeholder-lg': size == 'lg',
        }"
      ></span>
      <span
        class="col-4 placeholder"
        :class="{
          'placeholder-sm': size == 'zs',
          'placeholder-sm': size == 'sm',
          '': size == 'md',
          'placeholder-lg': size == 'lg',
        }"
      ></span>
      <span
        class="col-6 placeholder"
        :class="{
          'placeholder-sm': size == 'zs',
          'placeholder-sm': size == 'sm',
          '': size == 'md',
          'placeholder-lg': size == 'lg',
        }"
      ></span>
      <span
        class="col-12 placeholder"
        :class="{
          'placeholder-sm': size == 'zs',
          'placeholder-sm': size == 'sm',
          '': size == 'md',
          'placeholder-lg': size == 'lg',
        }"
      ></span>
      <span
        class="col-2 placeholder"
        :class="{
          'placeholder-sm': size == 'zs',
          'placeholder-sm': size == 'sm',
          '': size == 'md',
          'placeholder-lg': size == 'lg',
        }"
      ></span>
    </template>
    <template v-else>
      <span
        class="placeholder"
        :class="[
          `col-${length}`,
          {
            'placeholder-xs': size == 'xs',
            'placeholder-sm': size == 'sm',
            '': size == 'md',
            'placeholder-lg': size == 'lg',
          },
        ]"
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
}
</script>

<style></style>
