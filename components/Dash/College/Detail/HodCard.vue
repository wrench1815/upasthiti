<template>
  <div>
    <div class="card-body">
      <div class="card hover-shadow card-hover border mt-5">
        <!-- start:Profile Image -->
        <div class="d-flex justify-content-center">
          <img
            :data-src="profileImage"
            :alt="`${name}'s profile image`"
            class="img-fluid avatar avatar-xl mt-n5 bg-white border"
            v-lazy-load
          />
        </div>
        <!-- end:Profile Image -->

        <div class="card-body pt-2">
          <!-- start:Name -->
          <div class="card-title fw-bold fs-5 text-primary text-gradient">
            <NuxtLink
              :to="`/dash/user/detail?id=${hod.id}`"
              class="fw-bolder mb-1 text-primary"
            >
              <span class="better-underline">
                {{ name }}
              </span>
              <i class="ri-link"></i>
            </NuxtLink>
          </div>
          <!-- end:Name -->

          <!-- start:Email -->
          <div>
            <label class="text-muted fw-bold-500">Email :</label>
            <span class="fw-bold-600 text-dark fs-6 card-text">
              {{ email }}
            </span>
          </div>
          <!-- end:Email -->

          <!-- start:Mobile -->
          <div>
            <label class="text-muted fw-bold-500">Mobile:</label>
            <span class="fw-bold-600 text-dark fs-6">
              {{ mobile }}
            </span>
          </div>
          <!-- end:Mobile -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeDetailHodCard',

  props: {
    hod: {
      type: Object,
      required: true,
    },
  },

  computed: {
    profileImage() {
      return this.hod.profile_image
        ? this.hod.profile_image
        : this.$config.defaultUserImage
    },

    name() {
      return this.hod.full_name ? this.hod.full_name : '----'
    },

    email() {
      return this.hod.email ? this.hod.email : '----'
    },

    mobile() {
      return this.hod.mobile ? this.hod.mobile : '----'
    },
  },
}
</script>

<style scoped>
.card-hover div > img {
  box-shadow: none;
  transition: all 0.3s ease-in-out;
}

.card-hover:hover div > img {
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.16),
    0 10px 20px -2px rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
</style>
