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
