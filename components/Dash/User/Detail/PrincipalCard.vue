<template>
  <div>
    <div class="card border hover-shadow card-hover mt-4 mb-4">
      <div class="d-flex justify-content-start">
        <!-- start:Profile Image -->
        <!-- <img
          :data-src="profileImage"
          :alt="`${name}'s profile image`"
          class="img-fluid avatar avatar-xl ms-4 mt-n4 bg-white"
          v-lazy-load
        /> -->
        <img class="img-fluid avatar avatar-xl ms-4 mt-n4 bg-white" alt="" />
        <!-- end:Profile Image -->

        <div
          class="d-flex flex-column justify-content-center align-content-start text-break"
        >
          <!-- start:Name -->
          <div
            class="card-title fw-bold fs-5 text-primary text-gradient pt-3 px-2"
          >
            <!-- link -->
            <!-- <NuxtLink
              :to="`/dash/user/detail?id=${principal.id}`"
              class="fw-bolder mb-1 text-primary"
            >
              <span class="better-underline">
                {{ name }}
              </span>
              <i class="ri-link"></i>
            </NuxtLink> -->
            Name
          </div>
          <!-- start:Name -->
        </div>
      </div>

      <div class="card-body pt-2">
        <!-- start:Email -->
        <label class="text-muted">Email:</label>
        <span class="text-dark fs-6">
          <!-- {{ email }} -->
        </span>
        <!-- end:Email -->

        <br />

        <!-- start:Mobile -->
        <label class="text-muted">Mobile:</label>
        <span class="text-dark fs-6">
          <!-- {{ mobile }} -->
        </span>
        <!-- end:Mobile -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashUserDetailPrincipalCard',
}
</script>

<style></style>
