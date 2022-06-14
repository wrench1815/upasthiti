<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>Add College</h2>
        <p>Add a New College</p>
      </div>

      <div class="card-body">
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <!-- start:College Add Form -->
          <form @submit.prevent="handleSubmit(addCollege)">
            <!-- start:Institute name-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_name"
                  >Institute name</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true, min: 3 }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="institute_name"
                      class="form-control"
                      v-model="college.institute_name"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute name -->

            <!-- start:Institute Address -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_address"
                  >Address</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="institute_address"
                      class="form-control"
                      v-model="college.institute_address"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute Address -->

            <!-- start:Institute Alias name -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_alias_name"
                  >Institute Alias</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="institute_alias_name"
                      class="form-control"
                      v-model="college.institute_alias_name"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute Alias name -->

            <!-- start:Institute Principal -->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_principal"
                  >Principal</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    id="institute_principal"
                    placeholder="Select Principal"
                    :options="principalList"
                    v-model="college.institute_principal"
                  ></v-select>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute Principal-->

            <!-- start:Institute Logo-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_logo">Logo</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="institute_logo"
                      name="password"
                      class="form-control"
                      v-model="college.institute_logo"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-2': !errors[0], 'mb-1': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute Logo-->

            <!-- start:Institute Website-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_website"
                  >Website</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="institute_website"
                      class="form-control"
                      v-model="college.institute_website"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute website -->

            <!-- start:Institute Mobile-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_mobile">Mobile</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <div class="form-outline">
                    <input
                      type="number"
                      id="institute_mobile"
                      class="form-control"
                      v-model="college.institute_mobile"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute Mobile -->

            <!-- start:Institute Email-->
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label" for="institute_email">Email</label>
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true, email: true }"
                >
                  <div class="form-outline">
                    <input
                      type="email"
                      id="institute_email"
                      class="form-control"
                      v-model="college.institute_email"
                    />
                  </div>
                  <!-- Validation Errors -->
                  <div
                    class="text-danger"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute Email-->

            <!-- Submit button -->
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-info btn-rounded mb-4">
                Add College
              </button>
            </div>
          </form>
          <!-- End:College Add Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeAdd',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      principalList: [],
      college: {
        institute_name: '',
        institute_address: '',
        institute_alias_name: '',
        institute_principal: '',
        institute_logo: '',
        institute_website: '',
        institute_mobile: '',
        institute_email: '',
      },
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'College',
        url: '/dash/college',
      },
      {
        name: 'Add',
      },
    ])
  },

  methods: {
    async addCollege() {
      try {
        let college = this.college
        college.institute_principal = college.institute_principal.id
        this.$swal({
          title: 'Adding College',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Adding a New College',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.college
              .create(this.college)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'College has been added Successfully',
                  timer: 2000,
                  timerProgressBar: true,

                  didOpen: () => {
                    this.$swal.showLoading()
                  },
                }).then(() => this.$router.push('/dash/college'))
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Error',
                  icon: 'error',
                  type: 'error',
                  html: `Failed to Add College.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Add College.<br/>Try Again`,
        })
      }
    },

    async getPrincipals() {
      this.$api.user.listPrincipal().then((response) => {
        // set first_name and last name as label and id as value for select2
        this.principalList = response.data.map((principal) => {
          return {
            id: principal.id,
            label: `${principal.first_name} ${principal.last_name}`,
          }
        })
        // this.principalList = response.data
      })
    },
  },

  mounted() {
    this.getPrincipals().finally(() => {
      document.querySelectorAll('.form-outline').forEach((formOutline) => {
        new this.$mdb.Input(formOutline).init()
      })
    })
  },
}
</script>

<style></style>
