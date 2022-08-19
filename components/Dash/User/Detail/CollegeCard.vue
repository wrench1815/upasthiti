<template>
  <div
    class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
  >
    <div>
      <!-- <img
        class="avatar avatar-xxl obj-fit-cover shadow-1-strong"
        :data-src="
          user.profile_image ? user.profile_image : defaultProfileImage
        "
        :alt="`${user.full_name}'s Profile Image`"
        v-lazy-load
      /> -->
      <img class="avatar avatar-xxl obj-fit-cover shadow-1-strong" alt="" />
    </div>
    <div
      class="d-flex flex-column justify-content-center align-content-start text-break"
    >
      <div class="fw-bold fs-5 text-primary text-gradient">
        <!-- {{ user.full_name ? user.full_name : '----' }} -->College name
      </div>
      <div class="text-muted small d-flex gap-1">
        <i class="ri-mail-fill text-primary text-gradient"></i>
        <!-- {{ user.email ? user.email : '----' }} -->
        Email
      </div>
      <div class="text-muted small d-flex gap-1">
        <i class="ri-phone-fill text-primary text-gradient"></i>

        Mobile
      </div>
      <div class="text-muted small d-flex gap-1">
        <i class="ri-pin-distance-fill text-primary text-gradient"></i>

        District
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserDetailCollegeCard',
}
</script>

<style></style>
