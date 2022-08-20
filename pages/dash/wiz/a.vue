<template>
  <section class="container-fluid my-4">
    <transition name="fade-y" mode="out-in">
      <div class="card" v-if="!steps.zero">
        <div class="card-body">
          <h3>Explain the function of this Wiz</h3>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary" @click="steps.zero = true">
              Start
            </button>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade-y" mode="out-in">
      <div class="card mt-4" v-if="steps.zero">
        <WizUserAdd
          userRole="admin"
          @userCreated="(data) => (createdPrincipal = data)"
        />
      </div>
    </transition>

    <div class="card card-body mt-4">
      {{ createdPrincipal }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashWizA',
  layout: 'dash',
  middleware: ['isAdmin'],

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Wiz',
        url: '/dash/wiz',
      },
      {
        name: 'a',
      },
    ])
  },

  data() {
    return {
      createdPrincipal: {},
      steps: {
        zero: false,
      },
    }
  },

  methods: {},
}
</script>

<style></style>
