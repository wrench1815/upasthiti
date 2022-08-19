<template>
  <div>
    <!-- start:Profile Modal -->
    <div
      class="modal fade"
      id="profileModal"
      tabindex="-1"
      aria-labelledby="profileModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-side modal-bottom-left modal-dialog-width shadow"
      >
        <div class="modal-content">
          <div class="modal-header justify-content-center pb-0">
            <LoadersAsideNavProfileModal v-if="loading" />
            <div
              class="d-flex flex-column align-items-center justify-content-center gap-2"
              v-else
            >
              <img
                class="avatar avatar-lg rounded-circle obj-fit-cover shadow"
                :data-src="
                  isAuthenticated ? user.profile_image : userDefaultImage
                "
                :alt="`${
                  isAuthenticated ? user.first_name : ''
                }'s profile image`"
                v-lazy-load
              />
              <div class="text-center text-break">
                <h5 class="text-dark">
                  {{ isAuthenticated ? user.full_name : '' }}
                </h5>
                <p class="pb-0 mb-0 text-muted">
                  {{ isAuthenticated ? user.email : '' }}
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
              <!-- start:Profile -->
              <li class="nav-item">
                <NuxtLink
                  to="/dash/user"
                  class="nav-link rounded-4 text-dark pointer-pointer d-flex align-items-center gap-1"
                >
                  <i class="ri-profile-fill"></i>Profile
                </NuxtLink>
              </li>
              <!-- end:Profile -->

              <!-- start:Main Site -->
              <li class="nav-item">
                <div
                  class="nav-link rounded-4 text-dark pointer-pointer d-flex align-items-center gap-1"
                  @click="toMainSite"
                >
                  <i class="ri-home-2-fill"></i>Main Site
                </div>
              </li>
              <!-- end:Main Site -->

              <!-- start:Logout -->
              <li class="nav-item">
                <div
                  class="nav-link rounded-4 text-danger pointer-pointer d-flex align-items-center gap-1"
                  @click="logout"
                >
                  <i class="ri-logout-circle-line text-danger"></i>Logout
                </div>
              </li>
              <!-- end:Logout -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end:Profile Modal -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashNavProfile',

  data() {
    return {
      roleClass: '',
      roleIcon: '',
      loading: true,
    }
  },

  watch: {
    $route() {
      if (document.querySelector('#profileModal').classList.contains('show')) {
        document.querySelector('#profileModalToggle').click()
      }
    },
  },

  computed: {
    ...mapGetters({
      user: 'loggedInUser',
      role: 'loggedInUserRole',
      isAuthenticated: 'isAuthenticated',
    }),
    userDefaultImage() {
      return this.$config.defaultUserImage
    },
  },

  methods: {
    async logout() {
      if (document.querySelector('#profileModal').classList.contains('show')) {
        await document.querySelector('#profileModalToggle').click()
      }

      await this.$swal({
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
    },

    async toMainSite() {
      try {
        if (
          document.querySelector('#profileModal').classList.contains('show')
        ) {
          await document.querySelector('#profileModalToggle').click()
        }
      } catch (error) {
        await document.querySelector('#profileModalToggle').click()
      } finally {
        this.$router.push('/')
      }
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
    this.setRoleClass().then(() => (this.loading = false))
  },
}
</script>

<style scoped>
.modal .modal-side {
  position: absolute;
  right: 10px;
  bottom: 10px;
  margin: 0;
}

.modal .modal-dialog.modal-bottom-left {
  bottom: 10px;
  left: 10px;
}

.modal-dialog-width {
  width: 17rem;
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

.badge-fs {
  font-size: 0.9rem !important;
}
</style>
