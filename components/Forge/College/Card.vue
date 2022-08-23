<template>
  <!-- start:College Info -->
  <div class="card-body">
    <!-- start:College Info Card -->
    <ForgeCollegeInfoCard :data="college" />
    <!-- end:College Info Card -->

    <!-- start:College Alias -->
    <div class="row mb-3">
      <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
        <label class="text-muted fw-bold-500">Alias</label>
      </div>
      <div class="col d-flex mt-lg-4 mt-sm-4">
        <span class="fw-bold-600 fs-6">{{ college.alias_name }}</span>
      </div>
    </div>
    <!-- end:College Alias -->

    <!-- start:College Website -->
    <div class="row mb-3">
      <div class="col-12 col-md-4 d-flex">
        <label class="text-muted fw-bold-500"> Website</label>
      </div>
      <div class="col d-flex">
        <a
          :href="college.website"
          target="_blank"
          class="text-gradient text-primary"
          >{{ college.website }} <i class="ri-external-link-fill"></i
        ></a>
      </div>
    </div>
    <!-- end:College Website -->

    <!-- start:College Address -->
    <div class="row mb-3">
      <div class="col-12 col-md-4 d-flex">
        <label class="text-muted fw-bold-500">Address</label>
      </div>
      <div class="col d-flex">
        <span class="fw-bold-600 fs-6">{{ college.address }}</span>
      </div>
    </div>
    <!-- end:College Address -->
  </div>
  <!-- end:College Info -->
</template>

<script>
export default {
  name: 'ForgeCollegeCard',

  props: {
    college: {
      type: Object,
      required: true,
    },
  },

  methods: {},
}
</script>

<style></style>
