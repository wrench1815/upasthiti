<template>
  <section>
    <div class="container py-5 my-4 card card-body rounded-9">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img
            data-src="~/assets/svg/unlock2.svg"
            class="img-fluid"
            alt="Unlock"
            v-lazy-load
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form
              class="my-4 my-lg-0"
              novalidate
              @submit.prevent="handleSubmit(login)"
            >
              <h3 class="text-primary fw-bold mb-4">Log in</h3>
              <!-- start:Email input -->
              <ValidationProvider
                v-slot="{ errors }"
                :rules="{ required: true, email: true }"
              >
                <div class="form-outline mb-1">
                  <input
                    type="email"
                    name="email"
                    class="form-control form-control-lg"
                    v-model="email"
                  />
                  <label class="form-label">Email address</label>
                </div>

                <!-- Validation Errors -->
                <div
                  class="text-danger transition-all-ease-out-sine"
                  :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                >
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
              <!-- end:Email input -->

              <!-- start:Password input -->
              <ValidationProvider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                  min: 6,
                  max: 16,
                  passwordNumber: true,
                  passwordUpper: true,
                  passwordLower: true,
                  passwordSpecial: true,
                }"
              >
                <div class="form-outline">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control form-control-lg"
                    v-model="password"
                  />
                  <label class="form-label">Password</label>
                </div>

                <!-- Validation Errors -->
                <div
                  class="text-danger transition-all-ease-out-sine"
                  :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                >
                  {{ errors[0] }}
                </div>
              </ValidationProvider>

              <!-- start:Show Password -->
              <div class="form-check my-2">
                <input
                  id="showPassword"
                  class="form-check-input"
                  type="checkbox"
                  v-model="showPassword"
                />
                <label
                  for="showPassword"
                  class="form-check-label ripple"
                  data-mdb-ripple-unbound="true"
                  data-mdb-ripple-radius="40"
                  >Show Password</label
                >
              </div>
              <!-- start:Show Password -->
              <!-- end:Password input -->

              <!-- Submit button -->
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn btn-primary fw-bold btn-rounded"
                >
                  Log in
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'guest',
  name: 'login',

  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },

  methods: {
    async login() {
      try {
        this.$swal({
          title: 'Logging In...',
          icon: 'info',
          text: 'Please wait...',
          didOpen: () => {
            this.$swal.showLoading()

            this.$auth
              .login({
                data: {
                  email: this.email,
                  password: this.password,
                },
              })
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Logged In!',
                  type: 'success',
                  icon: 'success',
                  text: 'You are now logged in.',
                })
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()
                this.$swal({
                  title: 'Error!',
                  type: 'error',
                  icon: 'error',
                  html: `Failed to Log In.<br/>Check your credentials and Try Again.`,
                })
              })
          },
        })
      } catch (error) {
        this.$swal.hideLoading()
        this.$swal.close()
        this.$swal({
          title: 'Error!',
          type: 'error',
          icon: 'error',
          html: `Failed to Log In.<br/>Check your credentials and Try Again.`,
        })
      }
    },
  },

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style></style>
