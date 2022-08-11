<template>
  <div>
    <div class="card-body">
      <div class="card hover-shadow card-hover border mt-5">
        <div
          class="bg-image hover-overlay ripple d-flex justify-content-center mt-n5 z-index-5"
          data-mdb-ripple-color="light"
        >
          <img
            :data-src="hod.profile_image"
            :alt="`${hod.short_name}'s profile image`"
            class="img-fluid avatar avatar-xl shadow"
            v-lazy-load
          />
        </div>
        <div class="card-body">
          <div class="card-title fw-bold fs-5 text-primary text-gradient">
            <NuxtLink
              :to="`/dash/user/detail?id=${hod.id}`"
              class="fw-bolder mb-1 text-primary"
            >
              <span class="better-underline">
                {{ hod.full_name }}
              </span>
              <i class="ri-link"></i>
            </NuxtLink>
          </div>
          <div>
            <label class="text-muted fw-bold-500">Email :</label>
            <span class="fw-bold-600 text-dark fs-6 card-text">
              {{ hod.email }}
            </span>
          </div>

          <div>
            <label class="text-muted fw-bold-500">Mobile:</label>
            <span class="fw-bold-600 text-dark fs-6">
              {{ hod.mobile ? hod.mobile : '----' }}
            </span>
          </div>
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
}
</script>

<style></style>
