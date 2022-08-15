<template>
  <div class="form-outline ">
    <input :type="inputtype" :id="idname" class="form-control" />
    <label class="form-label" :for="idname">
      <div class="d-flex justify-content-center gap-1">
        <i class="text-primary text-gradient d-block-inline" :class="icon"></i>
        <span>{{ label }}</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormsInput',

  props: {
    inputtype: {
      type: String,
      default: '',
    },

    idname: {
      type: String,
      default: '',
    },

    label: {
      type: String,
    },

    icon: {
      type: String,
      default: '',
    },
  },
  mounted() {
    // initialize form elements
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style></style>
