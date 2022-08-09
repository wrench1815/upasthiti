<template>
  <div class="row placeholder-wave">
    <div class="mb-2 d-none" :class="classes">
      <span class="placeholder placeholder-sm w-100"></span>
      <span class="placeholder placeholder-sm w-75"></span>
    </div>
    <div class="col">
      <div class="mb-4">
        <span class="placeholder placeholder-sm w-100"></span>
        <span class="placeholder placeholder-sm w-75"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadersFormInput',

  computed: {
    classes() {
      // return col-md-6 or col-md-12 randomly
      const val = [6, 12]
      const random = Math.floor(Math.random() * val.length)
      console.log(random)
      if (val[random] == 12) {
        return 'col-md-12'
      } else {
        return 'col-md-6 d-md-block'
      }
      // return `col-md-${val[Math.floor(Math.random() * val.length)]}`
    },
  },
}
</script>

<style></style>
