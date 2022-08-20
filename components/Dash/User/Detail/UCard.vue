<template>
  <div
    class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
  >
    <!-- Profile Image -->
    <div>
      <img
        class="avatar avatar-xxl obj-fit-cover shadow-2-strong bg-white"
        :data-src="
          user.profile_image ? user.profile_image : defaultProfileImage
        "
        :alt="`${user.full_name}'s Profile Image`"
        v-lazy-load
      />
    </div>

    <div
      class="d-flex flex-column justify-content-center align-content-start text-break"
    >
      <div class="d-flex flex-column-reverse flex-md-column">
        <!-- Full Name -->
        <div class="fw-bold fs-5 text-primary text-gradient">
          {{ user.full_name ? user.full_name : '----' }}
        </div>

        <!-- Roles -->
        <div
          class="d-flex justify-content-center align-items-center justify-content-md-start flex-wrap gap-2 py-2"
        >
          <!-- if Admin -->
          <div
            class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill"
            v-if="user.is_admin"
          >
            <i class="ri-shield-user-fill"></i>
            <div class="">Admin</div>
          </div>

          <!-- if Principal -->
          <div
            class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-info badge-fs shadow-3-strong py-2 rounded-pill"
            v-if="user.is_principal"
          >
            <i class="ri-admin-fill"></i>
            <div class="">Principal</div>
          </div>

          <!-- if HOD -->
          <div
            class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-primary badge-fs shadow-3-strong py-2 rounded-pill"
            v-if="user.is_hod"
          >
            <i class="ri-user-star-fill"></i>
            <div class="">HOD</div>
          </div>

          <!-- if Teacher -->
          <div
            class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-warning badge-fs shadow-3-strong py-2 rounded-pill"
            v-if="user.is_teacher"
          >
            <i class="ri-user-2-fill"></i>
            <div class="">Teacher</div>
          </div>
        </div>
      </div>

      <!-- Email -->
      <div class="text-muted small d-flex gap-1">
        <i class="ri-mail-fill text-primary text-gradient"></i>
        {{ user.email ? user.email : '----' }}
      </div>

      <!-- Mobile -->
      <div class="text-muted small d-flex gap-1">
        <i class="ri-phone-fill text-primary text-gradient"></i>
        {{ user.mobile ? user.mobile : '----' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserDetailUCard',

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  computed: {
    defaultProfileImage() {
      return this.$config.defaultUserImage
    },
  },
}
</script>

<style scoped>
.badge-fs {
  font-size: 0.9rem !important;
}
</style>
