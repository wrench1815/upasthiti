<template>
  <div>
    <!-- start:Input Element -->
    <ValidationProvider v-slot="{ errors }" :rules="validationRules">
      <div class="form-outline">
        <input
          :type="type"
          :id="randomUUID"
          class="form-control mb-0"
          :class="{ 'form-icon-trailing': isTrail }"
          v-model="inputData"
          :placeholder="placeholder"
          @keyup="$emit('update:data', inputData)"
        />
        <!-- trailing Icon -->
        <i class="trailing" :class="[icon, iconClasses]" v-if="isTrail"></i>
        <!-- label -->
        <label class="form-label" :for="randomUUID" v-if="label">
          <div class="d-flex justify-content-center gap-1">
            <i
              v-if="icon && !isTrail"
              class="text-primary text-gradient d-block-inline"
              :class="[icon, iconClasses]"
            ></i>
            <span :class="{ required: isRequired }">{{ label }}</span>
          </div>
        </label>
      </div>
      <!-- Valdation Errors -->
      <div
        class="text-danger transition-all-ease-out-sine"
        :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
      >
        {{ errors[0] }}
      </div>
    </ValidationProvider>
    <!-- end:Input Element -->
  </div>
</template>

<script>
export default {
  name: 'DashInput',

  data() {
    return {
      inputData: this.data,
      randomUUID: this.uuidGenerator(),
    }
  },

  props: {
    label: {
      type: String,
    },
    validationRules: {
      type: Object,
      default: () => ({ required: true }),
    },
    data: {
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    icon: {
      type: String,
      default: '',
    },
    iconClasses: {
      type: String,
      default: 'text-primary text-gradient',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    isTrail: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  methods: {
    uuidGenerator() {
      // Generate uuid
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
          return v.toString(16)
        }
      )
    },
  },

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style></style>
