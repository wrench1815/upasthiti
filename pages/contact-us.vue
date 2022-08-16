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
              <div class="card bg-danger shadow p-3">
                <div>
                  <h2 class="text-white fw-bold">Get In Touch</h2>
                  <p class="text-white">
                    Fill up the form. Our friendly team is always here to help
                    you.
                  </p>
                  <div class="text-muted small d-flex mt-lg-4 mt-2">
                    <i class="ri-mail-line text-white fs-3"></i>
                    <span class="text-white fs-3 ms-2 fw-bold">Chat to Us</span>
                  </div>
                  <div class="">
                    <p class="text-white">
                      Our friendly team is always here to chat with you.
                    </p>
                    <a href="mailto:upasthiti.app@gmail.com">
                      <span class="text-white text-break better-underline">
                        upasthiti.app@gmail.com
                        <i class="ri-external-link-fill text-whitw"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <!-- <img src="~/assets/svg/blob_1.svg" alt="" class="img-test" /> -->
              <img src="~/assets/svg/circle.svg" alt="" class="circle" />
              <div class="position-absolute chat-artifact">
                <i class="ri-message-2-fill ri-4x text-white chat"></i>
              </div>
              <div class="position-absolute mail-artifact">
                <i class="ri-mail-fill ri-4x text-white mail"></i>
              </div>
              <div class="position-absolute plane-artifact">
                <i class="ri-send-plane-fill text-white ri-5x plane"></i>
              </div>
              <div class="position-absolute phone-artifact">
                <i class="ri-phone-fill text-white ri-4x phone"></i>
              </div>
            </div>
          </div>
          <!-- End : Left Side of Page -->

          <!-- Start : Right Side of Page -->
          <div class="col-lg-8 col-md-6 col-12">
            <div class="mt-3 p-3">
              <h1 class="text-primary fw-bold">We'd love to hear from you</h1>
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
                        :data.sync="message.email"
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
                      class="btn bg-gradient-primary text-white btn-rounded col-md- col-"
                    >
                      Send a Quote
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
    async sendMessage() {
      try {
        const contact = {
          first_name: this.message.firstName,
          last_name: this.message.lastName,
          email: this.message.email,
          address: this.message.address,
          contact_district: this.message.district,
          message: this.message.message,
        }

        this.$swal({
          title: 'Sending Quote',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are sending your Quote',
          didOpen: () => {
            this.$swal.showLoading()

            this.$api.contact
              .create(contact)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  html: `Your Quote was recieved successfully.<br/>We'll Contact you Shortly.`,
                  timer: 4000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => {
                  this.message.firstName = ''
                  this.message.lastName = ''
                  this.message.email = ''
                  this.message.address = ''
                  this.message.district = ''
                  this.message.message = ''

                  this.$emit('input', this.message.firstName)
                  this.$emit('input', this.message.lastName)
                  this.$emit('input', this.message.email)
                })
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to send your Quote.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to send your Quote.<br/>Try Again`,
        })
      }
    },
  },

  mounted() {
    this.districtList = [...this.districts, 'None Specified']

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

@media (min-width: 768px) {
  .h-card {
    height: 100% !important;
  }

  .circle {
    bottom: -30% !important;
    right: -55% !important;
    /* left: -5%; */
  }
}

@media (min-width: 1200px) {
  .circle {
    bottom: -35% !important;
    right: -60% !important;
    /* left: -5%; */
  }
}

@media (min-width: 1400px) {
  .circle {
    bottom: -35% !important;
    right: -60% !important;
    /* left: -5%; */
  }
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

.phone-artifact {
  bottom: 35%;
  left: 60%;
  z-index: -1;
  transform: rotate(261deg);
}

.phone {
  text-shadow: 1px 0 var(--mdb-danger), -1px 0 var(--mdb-danger),
    0 1px var(--mdb-danger), 0 -1px var(--mdb-danger), 1px 1px var(--mdb-danger),
    -1px -1px var(--mdb-danger), -1px 1px var(--mdb-danger),
    1px -1px var(--mdb-danger), -25px 0px 10px var(--mdb-light);
}

.chat-artifact {
  bottom: 34%;
  left: 5%;
  z-index: -1;
  /* transform: rotate(20deg); */
}

.chat {
  text-shadow: 1px 0 var(--mdb-dark), -1px 0 var(--mdb-dark),
    0 1px var(--mdb-dark), 0 -1px var(--mdb-dark), 1px 1px var(--mdb-dark),
    -1px -1px var(--mdb-dark), 1px -1px var(--mdb-dark),
    -1px 1px var(--mdb-dark), 20px 20px 10px var(--mdb-light);
}
</style>
