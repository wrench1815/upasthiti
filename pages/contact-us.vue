<template>
  <section class="container my-4 card p-3">
    <div class="row mb-2">
      <div class="col-md-6 col-lg-6 col-12 ps-md-5 mb-4">
        <!-- https://storyset.com/illustration/contact-us/pana -->
        <img
          src="~/assets/svg/Contact_us.svg"
          class="img-fluid"
          alt="Contact Us illustration"
        />
      </div>

      <div
        class="row col-md-6 col-lg-6 col-12 d-flex justify-content-center p-4"
      >
        <h1 class="text-primary ms-3 lh-2">We'd love to hear from you</h1>
        <div>
          <label for="exampleFormControlInput1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label for="exampleFormControlTextarea1" class="form-label"
            >Your message</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Type your message here.."
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact-Us',
}
</script>

<style></style>
