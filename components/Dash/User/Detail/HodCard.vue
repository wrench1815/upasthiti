<template>
  <div>
    <div class="card-body">
      <div class="card hover-shadow card-hover border mt-5">
        <!-- start:Profile Image -->
        <div class="d-flex justify-content-center">
          <!-- <img
            :data-src="profileImage"
            :alt="`${name}'s profile image`"
            class="img-fluid avatar avatar-xl mt-n5 bg-white border"
            v-lazy-load
          /> -->
          <img
            class="img-fluid avatar avatar-xl mt-n5 bg-white border"
            alt=""
          />
        </div>
        <!-- end:Profile Image -->

        <div class="card-body pt-2">
          <!-- start:Name -->
          <div class="card-title fw-bold fs-5 text-primary text-gradient">
            <!-- <NuxtLink
              :to="`/dash/user/detail?id=${hod.id}`"
              class="fw-bolder mb-1 text-primary"
            >
              <span class="better-underline">
                {{ name }}
              </span>
              <i class="ri-link"></i>
            </NuxtLink> -->
            Name
          </div>
          <!-- end:Name -->

          <!-- start:Email -->
          <div>
            <label class="text-muted fw-bold-500">Email :</label>
            <span class="fw-bold-600 text-dark fs-6 card-text">
              <!-- {{ email }} -->
            </span>
          </div>
          <!-- end:Email -->

          <!-- start:Mobile -->
          <div>
            <label class="text-muted fw-bold-500">Mobile:</label>
            <span class="fw-bold-600 text-dark fs-6">
              <!-- {{ mobile }} -->
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
  name: 'DashUserDetailHodCard',
}
</script>

<style></style>
