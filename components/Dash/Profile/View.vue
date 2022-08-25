<template>
  <section>
    <transition name="scale-in" mode="out-in">
      <div v-if="loading">
        <LoadersDetailCard />
      </div>
      <div v-else>
        <div
          class="card bg-light shadow-3-strong p-3 d-flex gap-4 rounded-5 align-items-center flex-column flex-sm-row"
        >
          <div>
            <!-- profile image -->
            <img
              class="avatar avatar-dim obj-fit-cover shadow-2-strong bg-white"
              :data-src="
                user.profile_image ? user.profile_image : defaultUserImage
              "
              :alt="`${
                user.first_name ? user.first_name : '----'
              }'s Profile Image`"
              v-lazy-load
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center align-items-sm-start text-break"
          >
            <!-- start: Name -->
            <div class="fw-bold fs-5 text-primary text-gradient">
              <div class="fw-bolder mb-1 text-primary">
                {{ user.full_name ? user.full_name : '----' }}
              </div>
            </div>
            <!-- end: Name -->
            <!-- start: Roles -->
            <div
              class="d-flex justify-content-center align-items-center justify-content-md-start flex-wrap gap-2 mb-2"
            >
              <!-- if Admin -->
              <div
                class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill"
                v-if="user.is_admin"
              >
                <i class="ri-shield-user-fill"></i>
                <div class="">Admin</div>
              </div>
              <!-- if Principal -->
              <div
                class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-info badge-fs shadow-3-strong py-2 rounded-pill"
                v-if="user.is_principal"
              >
                <i class="ri-admin-fill"></i>
                <div class="">Principal</div>
              </div>
              <!-- if HOD -->
              <div
                class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-primary badge-fs shadow-3-strong py-2 rounded-pill"
                v-if="user.is_hod"
              >
                <i class="ri-user-star-fill"></i>
                <div class="">HOD</div>
              </div>
              <!-- if Teacher -->
              <div
                class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-warning badge-fs shadow-3-strong py-2 rounded-pill"
                v-if="user.is_teacher"
              >
                <i class="ri-user-2-fill"></i>
                <div class="">Teacher</div>
              </div>
            </div>
            <!-- end: Roles -->
            <div>
              <!--- start:Email -->
              <div class="text-muted small d-flex gap-1 text-break">
                <i class="ri-mail-fill text-primary text-gradient"></i>
                {{ user.email ? user.email : '----' }}
              </div>
              <!--- end:Email -->
              <!--- start:Gender -->
              <div
                class="text-muted small d-flex gap-1 text-break text-capitalize"
              >
                <i class="text-primary text-gradient" :class="genderIcon"></i>
                {{ user.gender ? user.gender : '----' }}
              </div>
              <!--- end:Gender -->
            </div>
          </div>
        </div>
        <div class="card-body px-0 mx-0">
          <!-- start:First Name -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">First Name</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">{{
                user.first_name ? user.first_name : '---'
              }}</span>
            </div>
          </div>
          <!-- end:First Name -->
          <!-- start:Last Name -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">Last Name</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">{{
                user.last_name ? user.last_name : '---'
              }}</span>
            </div>
          </div>
          <!-- end:Last Name -->
          <!-- start:Gender -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">Gender</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6"
                ><i class="text-primary text-gradient" :class="genderIcon"></i>
                {{ user.gender ? user.gender : '----' }}</span
              >
            </div>
          </div>
          <!-- end:Gender -->
          <!-- start:Email -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">Email</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">{{
                user.email ? user.email : '---'
              }}</span>
            </div>
          </div>
          <!-- end:Email -->
          <!-- start:Mobile -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">Mobile</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">{{
                user.mobile ? user.mobile : '---'
              }}</span>
            </div>
          </div>
          <!-- end:Mobile -->
          <!-- start:Address -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">Address</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">{{
                user.address ? user.address : '---'
              }}</span>
            </div>
          </div>
          <!-- end:Address -->
          <!-- start:District -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">District</label>
            </div>
            <div class="col d-flex">
              <span class="fw-bold-600 fs-6">{{
                user.district ? user.district : '---'
              }}</span>
            </div>
          </div>
          <!-- end:District -->
          <!-- start:Role -->
          <div class="row mb-3">
            <div class="col-12 col-md-4 d-flex">
              <label class="text-muted fw-bold-500">Roles</label>
            </div>
            <div class="col">
              <div
                class="d-flex align-items-center justify-content-start flex-wrap gap-2 mb-2"
              >
                <!-- if Admin -->
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill"
                  v-if="user.is_admin"
                >
                  <i class="ri-shield-user-fill"></i>
                  <div class="">Admin</div>
                </div>
                <!-- if Principal -->
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-info badge-fs shadow-3-strong py-2 rounded-pill"
                  v-if="user.is_principal"
                >
                  <i class="ri-admin-fill"></i>
                  <div class="">Principal</div>
                </div>
                <!-- if HOD -->
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-primary badge-fs shadow-3-strong py-2 rounded-pill"
                  v-if="user.is_hod"
                >
                  <i class="ri-user-star-fill"></i>
                  <div class="">HOD</div>
                </div>
                <!-- if Teacher -->
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-warning badge-fs shadow-3-strong py-2 rounded-pill"
                  v-if="user.is_teacher"
                >
                  <i class="ri-user-2-fill"></i>
                  <div class="">Teacher</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end:Role -->
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'DashProfileView',
  data() {
    return {
      loading: true,
      user: {},
    }
  },

  methods: {
    async fetchMe() {
      return this.$api.user.me().then((res) => {
        this.user = res.data
      })
    },
  },

  computed: {
    defaultUserImage() {
      return this.$config.defaultUserImage
    },

    genderIcon() {
      if (this.user.gender == 'Female') return 'ri-women-fill'
      else if (this.user.gender == 'Male') return 'ri-men-fill'
      else return 'ri-genderless-fill'
    },
  },

  mounted() {
    this.fetchMe().then(() => {
      this.loading = false
    })
  },
}
</script>

<style scoped>
.avatar-dim {
  height: 120px !important;
  width: 120px !important;
}
.badge-fs {
  font-size: 0.9rem !important;
}
</style>
