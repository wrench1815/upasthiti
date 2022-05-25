<template>
  <div class="container">
    <div class="row align-items-center justify-content-center min-vh-100">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <div
            class="bg-image hover-overlay ripple ratio ratio-4x3"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              class="img-fluid obj-fit-cover obj-pos-top"
            />
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.15)"
              ></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title text-primary">Hello MDB</h5>
            <p class="card-text">
              This is a Demo Card of <span class="text-info">MDB</span> in
              <span class="text-success">Nuxt</span>
            </p>
            <button type="button" class="btn btn-primary">
              Nice <i class="ri-thumb-up-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
