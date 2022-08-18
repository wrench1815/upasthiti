<template>
  <section class="container fixed-bottom" v-if="!isPrivacyAccepted">
    <div class="mb-3 d-flex justify-content-center">
      <div
        class="bg-white border border-primary border-2 p-3 d-inline-flex align-items-center justify-content-center rounded-5 shadow"
      >
        <p class="my-0 mx-1 py-2">
          Please read the
          <NuxtLink to="/privacy-policy" class="link-primary fw-bold">
            Privacy Policy
          </NuxtLink>
          to know how we collect and use your personal data.
        </p>
        <div class="d-flex align-items-center">
          <button
            class="btn btn-primary text-uppercase btn-rounded ms-0 ms-md-5"
            type="button"
            @click="acceptPrivacy"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'UtilsPrivacyPolicy',

  computed: {
    ...mapGetters(['isPrivacyAccepted']),
  },

  methods: {
    ...mapMutations(['acceptPrivacy', 'statusPrivacy']),
  },

  mounted() {
    this.statusPrivacy()
  },
}
</script>

<style></style>
