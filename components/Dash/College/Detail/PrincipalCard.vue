<template>
  <div>
    <div class="card border hover-shadow card-hover mt-4 mb-4">
      <div class="d-flex justify-content-start">
        <img
          :data-src="principal.profile_image"
          :alt="`${principal.short_name}'s profile image`"
          class="img-fluid avatar avatar-xl ms-4 mt-n4 bg-white"
          v-lazy-load
        />

        <div
          class="d-flex flex-column justify-content-center align-content-start text-break"
        >
          <div
            class="card-title fw-bold fs-5 text-primary text-gradient pt-3 px-2"
          >
            <NuxtLink
              :to="`/dash/user/detail?id=${principal.id}`"
              class="fw-bolder mb-1 text-primary"
            >
              <span class="better-underline">
                {{ principal.full_name }}
              </span>
              <i class="ri-link"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="card-body pt-2">
        <label class="text-muted">Email:</label>
        <span class="text-dark fs-6">
          {{ principal.email }}
        </span>
        <br />
        <label class="text-muted">Mobile:</label>
        <span class="text-dark fs-6">
          {{ principal.mobile ? principal.mobile : '----' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeDetailPrincipalCard',

  props: {
    principal: {
      type: Object,
      required: true,
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
