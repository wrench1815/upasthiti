<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h2>Edit College</h2>
        <p>
          Editing College:
          <span class="text-info fw-bold">{{ college.institute_name }}</span>
        </p>
      </div>

      <div class="card-body">
        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <!-- start:College Edit Form -->
          <form @submit.prevent="handleSubmit(editCollege)">
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
              <button
                type="submit"
                class="btn btn-success fw-bolder btn-rounded mb-4"
              >
                Edit College
              </button>
            </div>
          </form>
          <!-- End:College Edit Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCollegeEdit',
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
    async editCollege() {
      try {
        let college = this.college
        college.institute_principal = college.institute_principal.id
        this.$swal({
          title: 'Editing College',
          icon: 'info',
          type: 'info',
          text: 'Please wait while we are Editing the College',
          didOpen: () => {
            this.$swal.showLoading()

            const response = this.$api.college
              .update(this.$route.params.id, this.college)
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                let timerInterval

                this.$swal({
                  title: 'Success',
                  icon: 'success',
                  type: 'success',
                  text: 'College has been Edited Successfully',
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
                  html: `Failed to Edit College.`,
                })
              })
          },
        })
      } catch (e) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          type: 'error',
          html: `Failed to Edit College.<br/>Try Again`,
        })
      }
    },

    async getPrincipals() {
      await this.$api.user.listPrincipal().then((response) => {
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

    async getCollege() {
      this.loading = true

      this.college.institute_principal = this.prin
      const response = await this.$api.college
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.college = response.data

          // this.user.id = response.data.id
          // this.user.first_name = response.data.first_name
          // this.user.last_name = response.data.last_name
          // this.user.email = response.data.email
          // this.user.gender = response.data.gender
          // this.user.date_added = this.$moment(this.date_added).format(
          //   'Do MMMM YYYY, h:mm:ss a'
          // )
          // this.user.is_active = response.data.is_active
          // this.user.is_admin = response.data.is_admin
          // this.user.is_principal = response.data.is_principal
          // this.user.is_hod = response.data.is_hod
          // this.user.is_teacher = response.data.is_teacher

          this.error = false
        })
        .catch((error) =>
          this.$swal({
            title: 'Error',
            icon: 'error',
            type: 'error',
            text: `${
              response.data.detail
                ? error.response.data.detail
                : 'An error has occured'
            }`,
            confirmButtonText: 'Refresh',
            showCancelButton: true,
            cancelButtonText: 'To Dash Home',
            confirmButtonClass: 'btn btn-info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.getCollege()
            } else if (result.isDismissed) {
              this.$router.push('/dash')
            }
          })
        )
    },
  },

  mounted() {
    this.getPrincipals().then(() => {
      this.getCollege()
        .then(() => {
          this.college.institute_principal = this.principalList.find(
            (principal) => principal.id == this.college.institute_principal
          )
        })
        .finally(() => {
          document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new this.$mdb.Input(formOutline).init()
          })
        })
    })
  },
}
</script>

<style></style>
