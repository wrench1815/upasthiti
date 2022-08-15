<template>
  <section class="container-fluid">
    <div class="mt-5 mb-4 p-3">
      <div class="card">
        <div class="row">
          <!-- Start : Left Side of Page -->
          <div class="col-lg-4 col-md-6 col-12">
            <div
              class="card bg-gradient-primary p-2 h-card mt-n5 ms-3 shadow position-relative z-index-0 overflow-hidden"
            >
              <div class="card bg-gradient-primary shadow-none p-2">
                <div>
                  <h2 class="text-white">Get In Touch</h2>
                  <p class="text-dark ms-2">
                    Fill up the form. Our friendly team is always here to help
                    you.
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
              <img src="~/assets/svg/blob_1.svg" alt="" class="img-test" />
              <img src="~/assets/svg/circle.svg" alt="" class="circle" />
              <div class="position-absolute dots-artifact">
                <img
                  src="~/assets/images/circle_with_dots.png"
                  alt=""
                  class="dots"
                />
              </div>
              <div class="position-absolute mail-artifact">
                <i class="ri-mail-fill ri-4x text-white mail"></i>
              </div>
              <div class="position-absolute plane-artifact">
                <i class="ri-send-plane-fill text-white ri-5x plane"></i>
              </div>
            </div>
          </div>
          <!-- End : Left Side of Page -->

          <!-- Start : Right Side of Page -->
          <div class="col-lg-8 col-md-6 col-12">
            <div class="mt-3 p-3">
              <h1 class="text-primary">We' love to hear from you</h1>
              <ValidationObserver v-slot="{ handleSubmit }">
                <!-- Start : Contact Form -->
                <form
                  @submit.prevent="handleSubmit(sendMessage)"
                  class="px-1 px-md-3 px-lg-5"
                >
                  <!-- Start : Name -->
                  <div class="row mt-4">
                    <!-- Start : First Name -->
                    <div class="col-lg-6 col-12">
                      <Lazy-DashInput
                        :label="'First Name'"
                        :validationRules="{ required: true, min: 3 }"
                        :data.sync="message.firstName"
                        :type="'text'"
                        :icon="'ri-user-fill'"
                        isRequired
                      />
                    </div>
                    <!-- End : First Name -->
                    <!-- Start : Last Name -->
                    <div class="col-lg-6 col-12">
                      <Lazy-DashInput
                        :label="'Last Name'"
                        :validationRules="{ required: true, min: 3 }"
                        :data.sync="message.lastName"
                        :type="'text'"
                        :icon="'ri-user-fill'"
                        isRequired
                      />
                    </div>
                    <!-- End : Last Name -->
                  </div>
                  <!-- End : Name -->
                  <!-- Start : Email -->
                  <div class="row">
                    <div class="col-12">
                      <Lazy-DashInput
                        :label="'Email'"
                        :validationRules="{ required: true, email: true }"
                        :data.sync="message.lastName"
                        :type="'email'"
                        :icon="'ri-mail-fill'"
                        isRequired
                      />
                    </div>
                  </div>
                  <!-- End : Email  -->
                  <!-- Start : Address  -->
                  <div class="row">
                    <div class="col-12">
                      <ValidationProvider
                        v-slot="{ errors }"
                        :rules="{
                          required: true,
                          min: 5,
                        }"
                      >
                        <div class="form-outline">
                          <textarea
                            class="form-control"
                            rows="4"
                            v-model="message.address"
                          ></textarea>
                          <label class="form-label required">
                            <i
                              class="ri-map-pin-2-fill text-primary text-gradient"
                            ></i>
                            <span>Address</span>
                          </label>
                        </div>
                        <!-- Valdation Errors -->
                        <div
                          class="text-danger transition-all-ease-out-sine"
                          :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                        >
                          {{ errors[0] }}
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <!-- End : Address -->
                  <!-- Start : District -->
                  <div class="row">
                    <div class="col-12">
                      <ValidationProvider
                        v-slot="{ errors }"
                        :rules="{ required: true }"
                      >
                        <v-select
                          placeholder="Select District"
                          :options="districtList"
                          v-model="message.district"
                        >
                        </v-select>
                        <!-- Validation Errors -->
                        <div
                          class="text-danger transition-all-ease-out-sine"
                          :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                        >
                          {{ errors[0] }}
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <!-- End : District -->
                  <!-- Start : Message -->
                  <div class="row">
                    <div class="col-12">
                      <ValidationProvider
                        v-slot="{ errors }"
                        :rules="{
                          required: true,
                          min: 10,
                        }"
                      >
                        <div class="form-outline">
                          <textarea
                            class="form-control"
                            rows="4"
                            v-model="message.message"
                          ></textarea>
                          <label class="form-label required">
                            <i
                              class="ri-question-answer-fill text-primary text-gradient"
                            ></i>
                            <span>Message</span>
                          </label>
                        </div>
                        <!-- Valdation Errors -->
                        <div
                          class="text-danger transition-all-ease-out-sine"
                          :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                        >
                          {{ errors[0] }}
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <!-- End : Message -->
                  <!-- Start : Submit button -->
                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="btn bg-gradient-primary text-white btn-rounded col-md-4 col-8"
                    >
                      Send
                    </button>
                  </div>
                  <!-- End : Submit button -->
                </form>
                <!-- End : Contact Form -->
              </ValidationObserver>
            </div>
          </div>
          <!-- End : Right Side of Page -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContactUs',

  data() {
    return {
      message: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        district: '',
        message: '',
      },

      districtList: [],
    }
  },

  computed: {
    ...mapGetters({
      districts: 'listDistricts',
    }),
  },

  methods: {
    sendMessage() {
      console.log(this.message)
    },
  },

  mounted() {
    this.districtList = [...this.districts, 'None of the Above']

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

@media (min-width: 767px) {
  .h-card {
    height: 100% !important;
  }
}

.img-test {
  position: absolute;
  bottom: -4%;
  right: -5%;
  left: -5%;
  z-index: -2;
  width: 110%;
  /* right: -50%; */
}

.circle {
  position: absolute;
  bottom: -35%;
  right: -60%;
  /* left: -5%; */
  z-index: -3;
  width: 100%;
}

.mail {
  text-shadow: 2px 0 var(--mdb-primary), -2px 0 var(--mdb-primary),
    0 2px var(--mdb-primary), 0 -2px var(--mdb-primary),
    1px 1px var(--mdb-primary), -1px -1px var(--mdb-primary),
    1px -1px var(--mdb-primary), -1px 1px var(--mdb-primary),
    15px 15px 10px var(--mdb-light);
}

.mail-artifact {
  bottom: 5%;
  right: 10%;
  z-index: -1;
  transform: rotate(20deg);
}

.plane {
  text-shadow: 1px 0 var(--mdb-danger), -1px 0 var(--mdb-danger),
    0 1px var(--mdb-danger), 0 -1px var(--mdb-danger), 1px 1px var(--mdb-danger),
    -1px -1px var(--mdb-danger), 1px -1px var(--mdb-danger),
    -1px 1px var(--mdb-danger), 20px 20px 10px var(--mdb-light);
}

.plane-artifact {
  bottom: 15%;
  left: 20%;
  z-index: -1;
  /* transform: rotate(5deg); */
}

.dots-artifact {
  bottom: 34%;
  left: 2%;
  z-index: -1;
  /* transform: rotate(20deg); */
}

.dots {
  height: 5rem;
}
</style>
