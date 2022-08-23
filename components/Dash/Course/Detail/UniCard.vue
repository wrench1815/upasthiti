<template>
  <div>
    <div
      class="mb-3 shadow-3-strong d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row bg-light"
    >
      <div>
        <!-- start:Logo -->
        <!-- <img
          :data-src="logo"
          :alt="`${uniName}'s logo`"
          class="avatar avatar-xxl obj-fit-cover shadow-1-strong bg-white"
          v-lazy-load
        /> -->
        <img class="avatar avatar-xxl obj-fit-cover shadow-1-strong bg-white" alt="">
        <!-- end:Logo -->
      </div>

      <div
        class="d-flex flex-column justify-content-center align-content-start text-break"
      >
        <div class="fw-bold fs-5 text-primary text-gradient">
          <!-- start:University Link -->
          <!-- <NuxtLink
            :to="`/dash/university/detail?id=${college.university.id}`"
            class="fw-bolder mb-1 text-primary"
          >
            University Name
            <span class="better-underline">
              {{ university.name ? university.name : '----' }}
              ----
            </span>
            <i class="ri-link"></i>
          </NuxtLink> -->
          <!-- end:University Link -->
        </div>

        <!--- start:Email -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-mail-fill text-primary text-gradient"></i>
          <!-- {{ university.email ? university.email : '----' }} -->
          ----
        </div>
        <!--- end:Email -->

        <!--- start:Mobile -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-phone-fill text-primary text-gradient"></i>
          <!-- {{ university.mobile ? university.mobile : '----' }} -->
          ----
        </div>
        <!--- end:Mobile -->

        <!--- start:District -->
        <div class="text-muted small d-flex gap-1">
          <i class="ri-pin-distance-fill text-primary text-gradient"></i>
          <!-- {{ university.district ? university.district : '----' }} -->
          ----
        </div>
        <!--- end:District -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCourseDetailUniCard',

  props: {
    // university: {
    //   type: Object,
    //   required: true,
    // },

    // isUniversity: {
    //   type: Boolean,
    //   default: false,
    // },
  },


}
</script>

<style></style>
