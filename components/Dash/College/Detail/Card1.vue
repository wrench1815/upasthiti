<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <img
          :data-src="isCollege ? college.logo : college.university.logo"
          :alt="`${isCollege ? college.name : college.university.name} logo`"
          v-lazy-load
          class="avatar avatar-xxl obj-fit-cover shadow-1-strong bg-white"
        />
      </div>
      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <NuxtLink :to="detailPath" class="fw-bolder mb-1 text-primary">
            <span class="better-underline"> </span>
            <i class="ri-link"></i>
            {{ isCollege ? college.name : college.university.name }}
          </NuxtLink>
        </div>
        <div class="text-muted small d-flex gap-1">
          <i class="ri-mail-fill text-primary text-gradient"></i>
          {{ isCollege ? college.email : college.university.email }}
        </div>
        <div class="text-muted small d-flex gap-1">
          <i class="ri-phone-fill text-primary text-gradient"></i>
          {{ isCollege ? college.mobile : college.university.phone_number }}
        </div>
        <div class="text-muted small d-flex gap-1" v-if="isUniversity">
          <i class="ri-phone-fill text-primary text-gradient"></i>
          {{ college.university.district }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
export default {
  name: 'DashCollegeDetailCard1',

  props: {
    college: {
      type: Object,
      required: true,
    },
    isCollege: {
      type: Boolean,
      default: false,
    },
    isUniversity: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    detailPath() {
      // return path to detail page for college or university
      if (this.isCollege) {
        return `/dash/college/detail?id=${this.college.id}`
      } else {
        return `/dash/university/detail?id=${this.college.university.id}`
      }
    },
  },
}
</script>

<style></style>
