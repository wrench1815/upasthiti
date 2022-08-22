<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block text-uppercase">
          Edit Profile
        </h1>
        <h3 class="text-secondary text-capitalize">Edit your profile</h3>
      </div>
      <div class="card-body m-md-2">
        <!-- Tabs navs -->
        <ul class="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active fs-6 d-flex"
              id="ex-with-icons-tab-1"
              data-mdb-toggle="tab"
              href="#ex-with-icons-tabs-1"
              role="tab"
              aria-controls="ex-with-icons-tabs-1"
              aria-selected="true"
              ><i class="ri-eye-fill me-2 s-3"></i>View Details</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link fs-6 d-flex"
              id="ex-with-icons-tab-2"
              data-mdb-toggle="tab"
              href="#ex-with-icons-tabs-2"
              role="tab"
              aria-controls="ex-with-icons-tabs-2"
              aria-selected="false"
              ><i class="ri-pencil-fill me-2"></i>Edit Details</a
            >
          </li>
        </ul>
        <!-- Tabs navs -->

        <!-- Tabs content -->
        <div class="tab-content mt-4 mx-md-3" id="ex-with-icons-content">
          <div
            class="tab-pane fade show active"
            id="ex-with-icons-tabs-1"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-1"
          >
            <div class="container-flui">
              <div
                class="card bg-light shadow-3-strong p-3 d-flex gap-4 rounded-5 align-items-center flex-column flex-sm-row"
              >
                <div>
                  <img
                    data-src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    class="avatar avatar-xxl obj-fit-cover shadow-1-strong avatar-height"
                    alt=""
                    v-lazy-load
                  />
                </div>
                <div
                  class="d-flex flex-column justify-content-center align-items-center align-items-sm-start text-break"
                >
                  <!-- start: Name -->
                  <div class="fw-bold fs-5 text-primary text-gradient">
                    <div class="fw-bolder mb-1 text-primary">Isha Gupta</div>
                  </div>
                  <!-- end: Name -->

                  <!-- start: Roles -->

                  <div
                    class="d-flex flex-column flex-sm-row justify-content-start align-items-start mb-2 gap-2"
                  >
                    <span
                      class="d-flex justify-content-start align-items-start gap-2 badge badge-fs shadow-3-strong py-2 rounded-pill flex-wrap text-capitalize bg-gradient-danger"
                    >
                      <i class="ri-admin-fill"></i>
                      Admin
                    </span>
                    <span
                      class="d-flex justify-content-start align-items-start gap-2 badge badge-fs shadow-3-strong py-2 rounded-pill flex-wrap text-capitalize bg-gradient-danger"
                    >
                      <i class="ri-admin-fill"></i>
                      Admin
                    </span>
                  </div>
                  <!-- end:   Roles -->

                  <!--- start:Email -->
                  <div class="text-muted small d-flex gap-1 text-break">
                    <i class="ri-mail-fill text-primary text-gradient"></i>
                    ishagupta@gmail.com
                  </div>
                  <!--- end:Email -->

                  <!--- start:Mobile -->
                  <div
                    class="text-muted small d-flex gap-1 text-break text-capitalize"
                  >
                    <i class="ri-phone-fill text-primary text-gradient"></i>
                    012345789
                  </div>
                  <!--- end:Mobile -->

                  <!--- start:Gender -->
                  <div
                    class="text-muted small d-flex gap-1 text-break text-capitalize"
                  >
                    <i class="ri-women-fill text-primary text-gradient"></i>
                    Female
                  </div>
                  <!--- end:Gender -->

                  <!--- start: Address -->
                  <div
                    class="text-muted small d-flex gap-1 text-break text-center text-sm-start text-capitalize"
                  >
                    <i class="ri-map-pin-2-fill text-primary text-gradient"></i>
                    Sector 5, ghjleknj ruhfjkf, Jammu
                  </div>
                  <!--- end: Address -->

                  <!--- start: District -->
                  <div
                    class="text-muted small d-flex gap-1 text-break text-capitalize"
                  >
                    <i
                      class="ri-pin-distance-fill text-primary text-gradient"
                    ></i>
                    Jammu
                  </div>
                  <!--- end: District -->
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="ex-with-icons-tabs-2"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-2"
          >
            <div class="container-fluid">
              <div
                class="card bg-light shadow-3-strong p-3 d-flex gap-4 rounded-5 align-items-center flex-column flex-sm-row"
              >
                <div>
                  <img
                    data-src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    class="avatar avatar-xxl obj-fit-cover shadow-1-strong "
                    alt=""
                    v-lazy-load
                  />
                </div>
                <div
                  class="d-flex flex-column justify-content-center align-items-center align-items-sm-start text-break"
                >
                  <!-- start: Name -->
                  <div class="fw-bold fs-5 text-primary text-gradient">
                    <div class="fw-bolder mb-1 text-primary">Isha Gupta</div>
                  </div>
                  <!-- end: Name -->

                  <!-- start: Roles -->

                  <div
                    class="d-flex flex-column flex-sm-row justify-content-start align-items-start mb-2 gap-2"
                  >
                    <span
                      class="d-flex justify-content-start align-items-start gap-2 badge badge-fs shadow-3-strong py-2 rounded-pill flex-wrap text-capitalize bg-gradient-danger"
                    >
                      <i class="ri-admin-fill"></i>
                      Admin
                    </span>
                    <span
                      class="d-flex justify-content-start align-items-start gap-2 badge badge-fs shadow-3-strong py-2 rounded-pill flex-wrap text-capitalize bg-gradient-danger"
                    >
                      <i class="ri-admin-fill"></i>
                      Admin
                    </span>
                  </div>
                  <!-- end:   Roles -->
                </div>
              </div>
            </div>
            <div>
              <form class="px-2 px-sm-4 pt-5">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <!-- start:First Name -->
                    <Lazy-DashInput
                      :label="'First Name'"
                      :type="'text'"
                      :icon="'ri-user-fill'"
                      isRequired
                    />
                    <!-- end:First Name -->
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <!-- start:Last Name -->
                    <Lazy-DashInput
                      :label="'Last Name'"
                      :type="'text'"
                      :icon="'ri-user-fill'"
                      isRequired
                    />
                    <!-- end:Last Name -->
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <!-- start:Email -->
                    <Lazy-DashInput
                      :label="' Email'"
                      :type="'email'"
                      :icon="'ri-mail-fill'"

                    />
                    <!-- end:Email -->
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <!-- start:Phone Number -->
                    <Lazy-DashInput
                      :label="'Mobile Number'"
                      :type="'Number'"
                      :icon="'ri-phone-fill'"

                    />
                    <!-- end:Phone Number -->
                  </div>
                </div>
                <!-- Start : Address  -->
                <div class="row mb-4">
                  <div class="col-12">
                    <div class="form-outline">
                      <textarea class="form-control" rows="4"></textarea>
                      <label class="form-label">
                        <i
                          class="ri-map-pin-2-fill text-primary text-gradient"
                        ></i>
                        <span>Address</span>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- End : Address -->

                <!-- Start : District -->
                <div class="row mb-4">
                  <div class="col-12">
                    <v-select
                      placeholder="Select District"
                      :options="districtList"

                    >
                    </v-select>
                  </div>
                </div>
                <!-- End : District -->
                <v-select
                  placeholder="Select Gender"
                  :options="genderList"
                  v-model="user.gender"
                >
                  <!-- for options -->
                  <template #option="{ label, icon }">
                    <div
                      class="d-flex justify-content-start align-items-center gap-1 fw-5 hover-select"
                    >
                      <i :class="icon"></i>
                      <span class="">{{ label }}</span>
                    </div>
                  </template>

                  <!-- for selected option -->
                  <template #selected-option="{ label, icon }">
                    <div
                      class="d-flex justify-content-start align-items-center gap-1"
                    >
                      <i class="text-primary text-gradient" :class="icon"></i>
                      <span>{{ label }}</span>
                    </div>
                  </template>
                </v-select>
                <!-- Submit button -->
                <div class="d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn bg-gradient-primary text-white btn-rounded my-4"
                  >
                    Update Your Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Tabs content -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DashProfile',
  layout: 'dash',

  data() {
    return {
      loading: true,
      error: true,
      genderList: [
        {
          label: 'Male',
          icon: 'ri-men-fill',
        },
        {
          label: 'Female',
          icon: 'ri-women-fill',
        },
        {
          label: 'Rather not Say',
          icon: 'ri-genderless-fill',
        },
      ],
      showPassword: false,
      imageFile: '',
      imageUploaded: false,
      user: {
        profile_image: '',
        profile_image_public_id: '',
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        is_admin: false,
        is_principal: false,
        is_hod: false,
        is_teacher: false,
        password: '',
      },
    }
  },

  computed: {
    ...mapGetters({
      districts: 'listDistricts',
    }),
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
.badge-fs {
  font-size: 0.9rem !important;
}
@media (min-width: 768px) {
  .avatar-height {
    height: 100% !important;
  }
}
</style>
