<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">College Edit</h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-info fw-bold">{{ college.institute_name }}</span>
        </h3>
      </div>

      <div class="card-body">
        <Lazy-LoadersForm
          :inputCount="6"
          :btnEnd="true"
          :btnColor="'success'"
          v-if="loading"
        />

        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- start:College Edit Form -->
          <form @submit.prevent="handleSubmit(editCollege)">
            <!-- start:Institute name-->
            <Lazy-DashInput
              :label="'Name'"
              :validationRules="{ required: true, min: 3 }"
              :data.sync="college.institute_name"
              :type="'text'"
            />
            <!-- end:Institute name -->

            <!-- start:Institute Address -->
            <Lazy-DashInput
              :label="'Address'"
              :validationRules="{ required: true, min: 3 }"
              :data.sync="college.institute_address"
              :type="'text'"
            />
            <!-- end:Institute Address -->

            <!-- start:Institute Alias name -->
            <Lazy-DashInput
              :label="'Alias'"
              :validationRules="{ required: true, min: 3 }"
              :data.sync="college.institute_alias_name"
              :type="'text'"
            />
            <!-- end:Institute Alias name -->

            <!-- start:Institute Principal -->
            <div class="row">
              <div class="col-12">
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
                    class="text-danger transition-all-ease-out-sine"
                    :class="{ 'mb-4': !errors[0], 'mb-2': errors[0] }"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!-- end:Institute Principal-->

            <!-- start:Institute Logo-->
            <Lazy-DashInput
              :label="'Logo'"
              :validationRules="{ required: true }"
              :data.sync="college.institute_logo"
              :type="'url'"
            />
            <!-- end:Institute Logo-->

            <!-- start:Institute Website-->
            <Lazy-DashInput
              :label="'Website'"
              :validationRules="{ required: true }"
              :data.sync="college.institute_website"
              :type="'url'"
            />
            <!-- end:Institute website -->

            <!-- start:Institute Mobile-->
            <Lazy-DashInput
              :label="'Mobile'"
              :validationRules="{ required: true }"
              :data.sync="college.institute_mobile"
              :type="'tel'"
            />
            <!-- end:Institute Mobile -->

            <!-- start:Institute Email-->
            <Lazy-DashInput
              :label="'Email'"
              :validationRules="{ required: true }"
              :data.sync="college.institute_email"
              :type="'email'"
            />
            <!-- end:Institute Email-->

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-rounded bg-gradient-success text-white mb-4"
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
        name: 'Edit',
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
        this.principalList = response.data.results.map((principal) => {
          return {
            id: principal.id,
            label: principal.full_name,
          }
        })
      })
    },

    async getCollege() {
      this.loading = true

      await this.$api.college
        .retrieve(this.$route.params.id)
        .then((response) => {
          this.college = response.data
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
        .then(() => {
          this.loading = false
        })
        .then(() => {
          document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new this.$mdb.Input(formOutline).init()
          })
        })
    })
  },
}
</script>

<style></style>
