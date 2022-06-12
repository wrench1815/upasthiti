<template>
  <section class="container my-4 card p-3">
    <div class="row mb-2">
      <div class="col-md-6 col-lg-6 col-12 ps-md-5 mb-4">
        <!-- https://storyset.com/illustration/accept-terms/amico  -->
        <img
          src="~/assets/svg/terms_of_services.svg"
          class="img-fluid sticky-lg-top"
          alt="Terms of services illustration"
        />
      </div>

      <div
        class="row col-md-6 col-lg-6 col-12 d-flex justify-content-center p-4"
      >
        <h1 class="mb-3">Terms Of Services</h1>
        <p class="fs-5">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum obcaecati consequuntur consectetur autem eius explicabo dolore
          numquam ducimus quae! Et, earum atque! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt officia numquam expedita
          corporis! Dolorum veniam, voluptatum deserunt, nam vero repellendus
          nobis quas eaque ipsum non quibusdam possimus vitae necessitatibus
          rerum dol Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laborum rerum maxime porro voluptatibus quo earum, asperiores rem
          eaque dolore ipsum. Quae, facilis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Autem ipsa illo eaque hic blanditiis ex
          reprehenderit labore voluptatum dolore, in enim inventore.
        </p>
        <div class="row">
          <div class="col-lg-6 text-primary">
            <nuxt-link to="/">
              <p><i class="ri-arrow-left-s-fill"></i>BACK</p></nuxt-link
            >
          </div>
          <div class="col-lg-6 text-end">
            <button type="button" class="btn btn-primary btn-rounded">
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Terms-Of-Services',
}
</script>

<style >

</style>
