<template>
  <div>
    <header class="container my-5">
      <div class="row">
        <div
          class="col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center"
        >
          <div>
            <h3 class="my-1">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </h3>
            <h4 class="my-2">Lorem ipsum dolor sit amet.</h4>
            <button type="button" class="btn text-white col-3 my-2">
              Click Here
            </button>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-12 ps-5">
          <img src="~/assets/images/header.jpg" class="header-img" alt="" />
        </div>
      </div>
    </header>
    <section class="container my-4">
      <div class="d-flex justify-content-center">
        <div class="row my-4 py-5">
          <div class="col-12">
            <h2>WHAT WE DO</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            quae.
          </p>
        </div>
        <div class="col-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            cumque culpa aperiam.
          </p>
        </div>
        <div class="col-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi
            laudantium eos.
          </p>
        </div>
        <div class="col-md col-sm">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ipsa corrupti quam!
          </p>
        </div>
      </div>
    </section>
    <section class="container my-4">
      <div class="d-flex justify-content-center">
        <div class="row my-5 py-5">
          <div class="col-12">
            <h2>FEATURES</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col mb-5">
          <div class="card" style="width: 18rem">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
              class="card-img-top"
              alt="Sunset Over the Sea"
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
              class="card-img-top"
              alt="Sunset Over the Sea"
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
              class="card-img-top"
              alt="Sunset Over the Sea"
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.header-img {
  width: 27rem;
  height: 27rem;
}
h4 {
  color: #757575 !important;
}
button {
  background-color: #da652a;
}
</style>
