<template>
  <div class="card-body">
    <UserData :user="user"></UserData>
    <section>
      <!-- start:District -->
      <div class="row mb-3">
        <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
          <label class="text-muted fw-bold-500">District</label>
        </div>
        <div class="col d-flex mt-lg-4 mt-sm-4">
          <span class="fw-bold-600 fs-6">{{
            user.district ? user.district : '----'
          }}</span>
        </div>
      </div>
      <!-- end:User District -->

      <!-- start:User Address -->
      <div class="row mb-3">
        <div class="col-12 col-md-4 d-flex">
          <label class="text-muted fw-bold-500"> Address</label>
        </div>
        <div class="col d-flex">
          <span class="fw-bold-600 fs-6">{{
            user.address ? user.address : '---'
          }}</span>
        </div>
      </div>
      <!-- end:User Address -->

      <!-- start:User Gender -->
      <div class="row mb-3">
        <div class="col-12 col-md-4 d-flex">
          <label class="text-muted fw-bold-500">Gender</label>
        </div>
        <div class="col d-flex">
          <span class="fw-bold-600 fs-6">
            <i class="text-primary" :class="genderIcon(user.gender)"></i>
            {{ user.gender }}</span
          >
        </div>
      </div>
      <!-- end:User Gender -->
    </section>
  </div>
</template>

<script>
import UserData from '~/components/Dash/User/Detail/UCard.vue'

export default {
  name: 'ForgeUserCard',

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  components: {
    UserData,
  },

  methods: {
    genderIcon(gen) {
      if (gen == 'Male') {
        // if Male
        return 'ri-men-fill'
      } else if (gen == 'Female') {
        // if Female
        return 'ri-women-fill'
      } else {
        // if unspecified
        return 'ri-genderless-fill'
      }
    },
  },
}
</script>

<style></style>
