<template>
  <div>
    <header class="container-fluid my-5">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-12 my-2 ps-md-5">
          <img
            data-src="~/assets/svg/attendance1.svg"
            class="img-fluid ps-md-5"
            alt="attendance confirmed illustration"
            v-lazy-load
          />
        </div>
        <div
          class="col-md-6 col-lg-6 col-12 p-5 d-flex justify-content-center align-items-center"
        >
          <div class="card bg-transparen shadow-non">
            <div class="card-body">
              <h4 class="card-title">Mark your attendance here.</h4>
              <h5 class="card-text text-muted">Lorem ipsum dolor sit amet.</h5>
              <nuxt-link to="/" class="btn btn-primary btn-rounded">
                Mark Attendance
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style></style>
