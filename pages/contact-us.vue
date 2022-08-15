<template>
  <section class="container card my-4 p-3">
    <div class="row">
      <!-- Start : Left Side of Page -->
      <div class="col-lg-4 col-md-5 col-12">
        <div class="card bg-gradient-primary p-4 h-100">
          <div class="ms-2">
            <h2 class="text-white">Get In Touch</h2>
            <p class="text-dark ms-2">
              Fill up the form. Our friendly team is always here to help you.
            </p>
            <div class="text-muted small d-flex mt-lg-5 mt-2 mx-3">
              <i class="ri-mail-line text-white fs-3"></i>
              <span class="text-white fs-3 ms-2">Chat to Us</span>
            </div>
            <div class="ms-4">
              <p class="text-dark">
                Our friendly team is always here to chat with you.
              </p>
              <a href="mailto:upasthiti.app@gmail.com">
                <span class="text-white text-break better-underline ms-3">
                  upasthiti.app@gmail.com
                  <i class="ri-external-link-fill text-whitw"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- End : Left Side of Page -->
      <!-- Start : Right Side of Page -->
      <div class="col-lg-8 col-md-7 col-12">
        <div class="mt-3 p-3">
          <h1 class="text-primary">We' love to hear from you</h1>
          <!-- Start : Contact Form -->
          <form action="" class="px-1 px-md-3 px-lg-5">
            <!-- Start : Name -->
            <div class="row my-2 gy-3">
              <!-- Start : First Name -->
              <div class="col-md-6 col-12">
                <Lazy-FormsInput
                  class=""
                  inputtype="text"
                  idname="typefirstname"
                  label="First Name"
                  icon="ri-user-fill"
                />
              </div>
              <!-- End : First Name -->
              <!-- Start : Last Name -->
              <div class="col-md-6 col-12">
                <Lazy-FormsInput
                  inputtype="text"
                  idname="typelastname"
                  label="Last Name"
                  icon="ri-user-fill"
                />
              </div>
              <!-- End : Last Name -->
            </div>
            <!-- End : Name -->
            <!-- Start : Email -->

            <div class="row my-3">
              <div class="col-12">
                <Lazy-FormsInput
                  inputtype="email"
                  idname="typeemail"
                  label="Email"
                  icon="ri-mail-fill"
                />
              </div>
            </div>
            <!-- End : Email  -->
            <!-- Start : Address  -->

            <div class="row my-3">
              <div class="col-12">
                <Lazy-FormsTextArea
                  idname="typeaddress"
                  label="Address"
                  icon="ri-map-pin-2-fill"
                />
              </div>
            </div>
            <!-- End : Address -->
            <!-- Start : District -->
            <div class="row my-3">
              <div class="col-12">
                <Lazy-FormsInput
                  inputtype="email"
                  idname="typeemail"
                  label="Email"
                  icon="ri-mail-fill"
                />
              </div>
            </div>
            <!-- End : District -->
            <!-- Start : Message -->
            <div class="row my-3">
              <div class="col-12">
                <Lazy-FormsTextArea
                  idname="typemessage"
                  label="Message"
                  icon="ri-question-answer-fill"
                />
              </div>
            </div>
            <!-- End : Message -->
            <!-- Start : Submit button -->

            <div class="row">
              <div class="text-center">
                <button
                  type="submit"
                  class="btn bg-gradient-primary text-white btn-rounded mt-3 col-md-4 col-8"
                >
                  Send
                </button>
              </div>
            </div>
            <!-- End : Submit button -->
          </form>
          <!-- End : Contact Form -->
        </div>
      </div>
      <!-- End : Right Side of Page -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact-Us',

  mounted() {
    // initialize form elements
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style scoped>
.better-underline {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(var(--mdb-white), var(--mdb-white)) !important;
}
</style>
