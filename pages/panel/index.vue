<template>
  <section class="container-fluid my-4">
    <section class="card card-body">
      <div class="container">
        <div class="row mb-3">
          <div class="col-sm-12 col-md-4 col-lg-4 col-12 py-3">
            <div class="card shadow vh-45">
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 col-12 py-3">
            <div class="card shadow vh-45">
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 col-12 py-3">
            <div class="card shadow vh-45">
              <div class="card-body"></div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-sm-12 col-md-4 col-lg-4 col-12 py-3">
            <div class="card shadow vh-45">
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 col-12 py-3">
            <div class="card shadow vh-45">
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 col-12 py-3">
            <div class="card shadow vh-45">
              <div class="card-body"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 col-12 py-3">
              <div class="card shadow vh-45">
                <div class="card-body"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'PanelIndex',
  layout: 'panel',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Home',
        url: '/panel',
      },
    ])
  },
}
</script>

<style></style>
