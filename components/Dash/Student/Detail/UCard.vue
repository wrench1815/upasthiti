<template>
  <div
    class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
  >
    <!-- Profile Image -->
    <div>
      <img
        class="avatar avatar-xxl obj-fit-cover shadow-2-strong bg-white"
        :data-src="
          student.profile_image ? student.profile_image : defaultProfileImage
        "
        :alt="`${fullName}'s Profile Image`"
        v-lazy-load
      />
    </div>

    <div
      class="d-flex flex-column justify-content-center align-content-start text-break"
    >
      <div class="d-flex flex-column-reverse flex-md-column">
        <!-- Full Name -->
        <div class="fw-bold fs-5 text-primary text-gradient">
          {{ student.first_name ? fullName : '----' }}
        </div>
      </div>

      <!-- Email -->
      <div class="text-muted small d-flex gap-1">
        <i class="ri-mail-fill text-primary text-gradient"></i>
        {{ student.email ? student.email : '----' }}
      </div>

      <!-- Mobile -->
      <div class="text-muted small d-flex gap-1">
        <i class="ri-phone-fill text-primary text-gradient"></i>
        {{ student.mobile ? student.mobile : '----' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashStudentDetailUCard',

  props: {
    student: {
      type: Object,
      required: true,
    },
  },

  computed: {
    defaultProfileImage() {
      return this.$config.defaultStudentImage
    },
    fullName() {
      return `${this.student.first_name} ${this.student.last_name}`
    },
  },
}
</script>

<style scoped></style>
