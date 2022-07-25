<template>
  <div
    class="modal fade"
    id="mainSiteProfileDown"
    tabindex="-1"
    aria-labelledby="profileModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-right-bottom modal-dialog-width">
      <div class="modal-content" v-if="isAuthenticated">
        <div
          class="btn-close position-absolute end-0 m-2"
          data-mdb-toggle="modal"
          data-mdb-target="#mainSiteProfileDown"
          id="hideMainSiteProfileDown"
        ></div>
        <div class="modal-header justify-content-center">
          <div
            class="d-flex flex-column align-items-center justify-content-center gap-2"
          >
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
            <div class="text-center">
              <h5 class="text-dark text-break">{{ loggedInUser.full_name }}</h5>
              <p class="pb-0 mb-0 text-muted text-break">
                {{ loggedInUser.email }}
              </p>
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
            </div>
          </div>
        </div>
        <div class="modal-body">
          <ul class="nav flex-column">
            <li class="nav-item">
              <NuxtLink
                to="/"
                class="nav-link rounded-4 text-dark pointer-pointer d-flex align-items-center gap-1"
              >
                <i class="ri-profile-line"></i>Edit Profile
              </NuxtLink>
            </li>

            <li class="nav-item">
              <div
                class="nav-link rounded-4 text-dark pointer-pointer d-flex align-items-center gap-1"
                @click="toDash"
              >
                <i class="ri-dashboard-line"></i>Dash
              </div>
            </li>

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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBarProfileDown',

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

    async closeMainSiteProfileDown() {
      return new Promise((resolve, reject) => {
        if (
          document
            .querySelector('#mainSiteProfileDown')
            .classList.contains('show')
        ) {
          document.querySelector('#hideMainSiteProfileDown').click()
        }

        resolve()
      })
    },

    async toDash() {
      this.closeMainSiteProfileDown().then(() => {
        this.$router.push('/dash')
      })
    },

    async logout() {
      this.closeMainSiteProfileDown().then(() => {
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
.modal .modal-right-bottom {
  position: absolute;
  right: 0;
  bottom: 4rem;
}

.modal-dialog-width {
  width: 16rem;
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
