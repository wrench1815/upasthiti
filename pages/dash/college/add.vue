<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Add College</h1>
        <h3 class="text-secondary text-capitalize">Add a New College</h3>
      </div>

      <div class="card-body">
        <Lazy-LoadersForm
          :inputCount="6"
          :btnEnd="true"
          :btnColor="'info'"
          v-if="loading"
        />

        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- start:College Add Form -->
          <form @submit.prevent="handleSubmit(addCollege)">
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
                class="btn btn-rounded bg-gradient-primary text-white mb-4"
              >
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
      await this.$api.user.listPrincipal().then((response) => {
        // set first_name and last name as label and id as value for v-select
        this.principalList = response.data.results.map((principal) => {
          return {
            id: principal.id,
            label: principal.full_name,
          }
        })
      })
    },
  },

  mounted() {
    this.getPrincipals()
      .then(() => {
        this.loading = false
      })
      .finally(() => {
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
          new this.$mdb.Input(formOutline).init()
        })
      })
  },
}
</script>

<style></style>
