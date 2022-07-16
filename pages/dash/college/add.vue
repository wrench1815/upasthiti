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
            <!-- start:Institute Logo-->
            <Lazy-DashInput
              :label="'Logo'"
              :validationRules="{ required: true }"
              :data.sync="college.institute_logo"
              :type="'url'"
              :icon="'ri-image-fill text-primary text-gradient'"
            />
            <!-- end:Institute Logo-->

            <!-- start:Institute name-->
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>

              <label class="form-label required" for="textAreaExample"
                ><i class="ri-font-size text-primary text-gradient"></i>
                Name</label
              >
            </div>
            <!-- end:Institute name -->

            <!-- start:Institute Address -->
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>
              <label class="form-label required" for="textAreaExample"
                ><i class="ri-map-pin-2-fill text-primary text-gradient"></i>
                Address</label
              >
            </div>
            <!-- end:Institute Address -->

            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <!-- start:Mobile Number-->
                <Lazy-DashInput
                  :label="'Mobile Number'"
                  :validationRules="{ required: true, min: 3, alpha: true }"
                  :data.sync="college.mobile_number"
                  :type="'text'"
                  :icon="'ri-phone-fill'"
                />
                <!-- end:Mobile Number-->
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <!-- start:Email-->
                <Lazy-DashInput
                  :label="'Email'"
                  :validationRules="{ required: true, min: 3, alpha: true }"
                  :data.sync="college.email"
                  :type="'text'"
                  :icon="'ri-mail-fill'"
                />
                <!-- end:Email-->
              </div>
            </div>

            <!-- start:Institute Alias name -->
            <Lazy-DashInput
              :label="'Alias'"
              :validationRules="{ required: true, min: 3 }"
              :data.sync="college.institute_alias_name"
              :type="'text'"
              :icon="'ri-font-size'"
            />
            <!-- end:Institute Alias name -->

            <!-- start:Institute Principal -->
            <div class="row">
              <div class="col-12">
                <label class="form-label required" for="form7Example1"
                  ><i class="ri-admin-fill text-primary text-gradient"></i>
                  Principal</label
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

            <!-- start:University -->
            <div class="row">
              <div class="col-12">
                <label class="form-label required" for="form7Example1"
                  ><i class="ri-government-fill text-primary text-gradient"></i>
                  University</label
                >
              </div>
              <div class="col">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: true }"
                >
                  <v-select
                    id="colleges"
                    placeholder="Select University"
                    :options="UniversityList"
                    v-model="college.university"
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
            <!-- end:University-->

            <!-- start:Institute Website-->
            <Lazy-DashInput
              :label="'Website'"
              :validationRules="{ required: true }"
              :data.sync="college.institute_website"
              :type="'url'"
              :icon="'ri-global-fill'"
            />
            <!-- end:Institute website -->

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
