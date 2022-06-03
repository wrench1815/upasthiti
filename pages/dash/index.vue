<template>
  <section class="container my-4">
    <section v-for="iter in 5" class="card card-body">
      <h1 class="mb-3 h1">Main website heading</h1>
      <h4 class="mb-3 h4 text-muted">Website subheading</h4>
      <hr class="my-4" />
      <h3 class="mb-3 h3">Section heading</h3>
      <p class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt
        vel, voluptas eaque ratione nam provident repellendus saepe cum! Minima,
        laudantium sit. Architecto velit laboriosam ullam aspernatur cupiditate
        doloribus provident. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Laudantium ipsam nihil temporibus asperiores at esse aperiam
        corrupti magnam impedit delectus obcaecati, dolorum perferendis unde
        quia hic nostrum nobis, repellendus eligendi.
      </p>
      <hr class="my-4" />
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4">
          <h5 class="mb-3 h5">Component heading</h5>
          <p class="text-muted">Component subheading</p>
          <p class="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo
            commodi odio veniam nisi? Cupiditate nobis doloremque unde in ut,
            consequatur reprehenderit saepe iure perspiciatis, veniam facilis
            asperiores deleniti at?
          </p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="mb-3 h5">Component heading</h5>
          <p class="text-muted">Component subheading</p>
          <p class="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo
            commodi odio veniam nisi? Cupiditate nobis doloremque unde in ut,
            consequatur reprehenderit saepe iure perspiciatis, veniam facilis
            asperiores deleniti at?
          </p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="mb-3 h5">Component heading</h5>
          <p class="text-muted">Component subheading</p>
          <p class="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo
            commodi odio veniam nisi? Cupiditate nobis doloremque unde in ut,
            consequatur reprehenderit saepe iure perspiciatis, veniam facilis
            asperiores deleniti at?
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'DashIndex',
  layout: 'dash',

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Home',
        url: '/dash',
      },
    ])
  },
}
</script>

<style></style>
