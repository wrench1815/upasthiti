<template>
  <div>
    <!-- Input placeholder -->
    <Lazy-LoadersFormInput v-if="loading" />

    <!-- start:Input Element -->
    <div class="row" v-else>
      <div class="col-12 col-md-4">
        <label class="form-label" :for="randomUUID">{{ label }} </label>
      </div>
      <div class="col">
        <ValidationProvider v-slot="{ errors }" :rules="validationRules">
          <div class="form-outline">
            <input
              :type="type"
              :id="randomUUID"
              class="form-control"
              v-model="inputData"
              @keyup="$emit('update:data', inputData)"
            />
          </div>
          <!-- Validation Errors -->
          <div
            class="text-danger"
            :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
          >
            {{ errors[0] }}
          </div>
        </ValidationProvider>
      </div>
    </div>
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
      loading: true,
    }
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    validationRules: {
      type: Object,
      default: { required: true },
    },
    data: {
      required: true,
    },
    type: {
      type: String,
      default: 'text',
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

    async unsetLoading() {
      this.loading = await false
    },
  },

  mounted() {
    this.unsetLoading().then(() => {
      document.querySelectorAll('.form-outline').forEach((formOutline) => {
        new this.$mdb.Input(formOutline).init()
      })
    })
  },
}
</script>

<style></style>
