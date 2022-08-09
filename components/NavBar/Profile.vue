<template>
  <div
    class="offcanvas offcanvas-pos border-0 offcanvas-width bg-transparent shadow-0 p-0 offcanvas-anim"
    tabindex="-1"
    id="profileOffCanvas"
    aria-labelledby="profileOffCanvasLabel"
  >
    <div class="offcanvas-body m-1 p-2 d-flex hide-scrollbar">
      <div class=""></div>
      <div
        class="bg-white rounded-5 shadow mt-auto mt-lg-0 mb-lg-auto position-relative ms-lg-auto content-width"
      >
        <!-- start:Profile Close Button -->
        <div class="position-absolute end-0 m-2">
          <button
            id="closeProfileOffCanvasHide"
            type="button"
            class="btn-close"
            data-mdb-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <!-- end:Profile Close Button -->

        <!-- start:ifAuthenticated-->
        <div v-if="isAuthenticated" class="my-3 mx-2">
          <div class="justify-content-center">
            <div
              class="d-flex flex-column align-items-center justify-content-center gap-2"
            >
              <!-- start:profile image -->
              <img
                class="avatar rounded-circle obj-fit-cover shadow"
                :data-src="
                  loggedInUser.profile_image
                    ? loggedInUser.profile_image
                    : defaultProfileImage
                "
                :alt="`${loggedInUser.full_name}'s profile Image`"
                v-lazy-load
              />
              <!-- end:profile image -->

              <div class="text-center">
                <!-- start:user full name -->
                <h5 class="text-dark text-break">
                  {{ loggedInUser.full_name }}
                </h5>
                <!-- end:user full name -->

                <!-- start:user email -->
                <p class="pb-0 mb-0 text-muted text-break">
                  {{ loggedInUser.email }}
                </p>
                <!-- end:user email -->

                <!-- start:user role -->
                <div
                  class="d-flex justify-content-center align-items-center mt-2 mb-3"
                >
                  <span
                    class="d-flex justify-content-center align-items-center gap-2 badge badge-fs shadow-3-strong py-2 rounded-pill flex-wrap text-capitalize"
                    :class="roleClass"
                  >
                    <i :class="roleIcon"></i>
                    {{ role }}
                  </span>
                </div>
                <!-- end:user role -->
              </div>
            </div>
          </div>
          <!-- start:nav links -->
          <div>
            <ul class="nav flex-column">
              <!-- edit profile -->
              <li class="nav-item">
                <div
                  class="nav-link rounded-4 text-dark pointer-pointer d-flex align-items-center gap-1"
                  @click="toEditProfile"
                >
                  <i class="ri-profile-line"></i>Edit Profile
                </div>
              </li>

              <!-- to dash -->
              <li class="nav-item">
                <div
                  class="nav-link rounded-4 text-dark pointer-pointer d-flex align-items-center gap-1"
                  @click="toDash"
                >
                  <i class="ri-dashboard-line"></i>Dash
                </div>
              </li>

              <!-- logout -->
              <li class="nav-item">
                <div
                  class="nav-link logout rounded-4 text-danger pointer-pointer d-flex align-items-center gap-1"
                  @click="logout"
                >
                  <i class="ri-logout-circle-line text-danger"></i>Logout
                </div>
              </li>
            </ul>
          </div>
          <!-- end:nav links -->
        </div>
        <!-- end:ifAuthenticated-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBarProfile',

  data() {
    return {
      defaultProfileImage: '',
      roleIcon: '',
      roleClass: '',
    }
  },

  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      loggedInUser: 'loggedInUser',
      role: 'loggedInUserRole',
    }),
  },

  methods: {
    async setDefaults() {
      return new Promise((resolve, reject) => {
        this.defaultProfileImage = this.$config.defaultUserImage

        resolve()
      })
    },

    async profileOffCanvas() {
      return new Promise((resolve, reject) => {
        if (
          document.querySelector('#profileOffCanvas').classList.contains('show')
        ) {
          document.querySelector('#closeProfileOffCanvasHide').click()
        }

        resolve()
      })
    },

    async toEditProfile() {
      this.profileOffCanvas().then(() => {
        this.$router.push('/')
      })
    },
    async toDash() {
      this.profileOffCanvas().then(() => {
        this.$router.push('/dash')
      })
    },

    async logout() {
      this.profileOffCanvas().then(() => {
        this.$swal({
          title: 'Logging Out...',
          icon: 'info',
          text: 'Please wait...',
          didOpen: () => {
            this.$swal.showLoading()

            this.$auth
              .logout()
              .then(() => {
                this.$swal.hideLoading()
                this.$swal.close()

                this.$swal({
                  title: 'Logged Out!',
                  type: 'success',
                  icon: 'success',
                  text: 'You have been logged Out.',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true,
                })
              })
              .catch((err) => {
                this.$swal.hideLoading()
                this.$swal.close()
                this.$swal({
                  title: 'Error!',
                  type: 'error',
                  icon: 'error',
                  html: `Failed to Log out.<br/>Try Again.`,
                })
              })
          },
        })
      })
    },

    async setRoleClass() {
      if ((await this.role) === 'admin') {
        this.roleClass = await 'bg-gradient-danger'
        this.roleIcon = await 'ri-shield-user-fill'
      } else if ((await this.role) === 'principal') {
        this.roleClass = 'bg-gradient-info'
        this.roleIcon = 'ri-admin-fill'
      } else if ((await this.role) === 'hod') {
        this.roleClass = 'bg-gradient-primary'
        this.roleIcon = 'ri-user-star-fill'
      } else if ((await this.role) === 'teacher') {
        this.roleClass = 'bg-gradient-warning'
        this.roleIcon = 'ri-user-2-fill'
      }
    },
  },

  mounted() {
    this.setDefaults().then(() => {
      this.setRoleClass()
    })
  },
}
</script>

<style scoped>
.offcanvas.show {
  transform: none !important;
}

.content-width {
  width: 15.688rem;
}

.offcanvas-pos {
  top: 0;
  left: 0;
  width: 400px;
}

.offcanvas-anim {
  transform: translateY(100%);
}

@media (min-width: 992px) {
  .offcanvas-pos {
    right: 0;
    left: unset;
  }

  .offcanvas-anim {
    transform: translateY(-100%);
  }
}

.offcanvas-width {
  /* width: 16rem; */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.badge-fs {
  font-size: 0.9rem !important;
}

.nav-link {
  border-left: 2px solid transparent;
}

.nav-link:hover {
  background-color: var(--mdb-light);
  border-left: 2px solid var(--mdb-primary);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
}

.nav-link:hover i {
  color: var(--mdb-primary);
}

.nav-link:hover.logout {
  border-left: 2px solid var(--mdb-danger) !important;
  background-color: rgba(var(--mdb-danger-rgb), 0.2);
}
</style>
