<template>
  <section class="container-fluid my-4">
    <!-- <Lazy-DashUserCard v-if="!loading" :user="user" /> -->
    <div class="card">
      <div class="card-header">
        <h2 class="text-primary text-gradient">University Details</h2>
      </div>
      <!-- start:University Info -->
      <div class="card-body">
        <!-- start:University Info Card -->
        <div
          class="mb-3 shadow-5 d-flex card-header gap-3 rounded-5 align-items-center flex-column flex-md-row"
        >
          <div>
            <img
              v-lazy-load
              class="avatar avatar-xxl obj-fit-cover shadow-1-strong"
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-content-start text-break"
          >
            <div class="fw-bold fs-5 text-primary text-gradient">
              <!-- {{ college.university_name }} -->
             University Name
            </div>
            <div class="text-muted small d-flex gap-1">
              <i class="ri-mail-fill text-primary text-gradient"></i>
              <!-- {{ college.university_email }} -->
             Email
            </div>
            <div class="text-muted small d-flex gap-1">
              <i class="ri-phone-fill text-primary text-gradient"></i>
              <!-- {{ college.university_mobile }} -->
              Phone number
            </div>
          </div>
        </div>
        <!-- end:user Info Card -->

        <!-- start:University Alias -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 mt-lg-4 mt-sm-4 d-flex">
            <label class="text-muted fw-bold-500">University Alias</label>
          </div>
          <div class="col d-flex mt-lg-4 mt-sm-4">
            <span class="fw-bold-600 fs-6">
              <!-- {{
              college.university_alias_name
            }} -->
            </span>
          </div>
        </div>
        <!-- end:University Alias -->

        <!-- start:University Principal  -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">Vice Chancellor</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6">
              <!-- {{ principal.first_name }} {{ principal.last_name }} -->
            </span>
          </div>
        </div>
        <!-- end:University Principal -->

        <!-- start:University Website -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">University Website</label>
          </div>
          <div class="col d-flex">
            <!-- <a
              :href="college.institute_website"
              target="_blank"
              class="text-gradient text-primary"
              >
              {{ college.institute_website }}
              <i class="ri-external-link-fill"></i
            ></a> -->
          </div>
        </div>
        <!-- end:University Website -->

        <!-- start:University Address -->
        <div class="row mb-3">
          <div class="col-12 col-md-4 d-flex">
            <label class="text-muted fw-bold-500">University Address</label>
          </div>
          <div class="col d-flex">
            <span class="fw-bold-600 fs-6">
              <!-- {{
              college.university_address
            }} -->
            </span>
          </div>
        </div>
        <!-- end:University Address -->
      </div>
      <!-- end:University Info -->
    </div>
     <!-- start:Colleges -->
    <div class="card mt-4">
      <div class="card-header">
        <h2 class="text-primary text-gradient">Colleges</h2>
      </div>

      <h1 class="d-flex justify-content-center">To-Do</h1>
    </div>
    <!-- end:Colleges  -->
  </section>
</template>

<script>
export default {
  name: 'DashUniversityDetail',
  layout: 'dash',

  data() {
    return {
      university: {},
      loading: true,
    }
  },
}
</script>

<style>

</style>
