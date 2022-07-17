<template>
  <div
    class="modal fade"
    id="profileModal"
    tabindex="-1"
    aria-labelledby="profileModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-right-top modal-dialog-width">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <div
            class="d-flex flex-column align-items-center justify-content-center gap-2"
          >
            <img
              class="avatar rounded-circle obj-fit-cover shadow"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt=""
            />
            <div class="text-center">
              <h5 class="text-dark">Isha Gupta</h5>
              <p class="pb-0 mb-0 text-muted">isha@mail.com</p>
              <div
                class="d-flex justify-content-center align-items-center mt-2 mb-3"
              >
                <span
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill flex-wrap text-capitalize"
                >
                  Admin
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
                class="nav-link  text-dark d-flex align-items-center gap-1"
              >
                <i class="ri-profile-line"></i>Edit Profile
              </NuxtLink>
            </li>

            <li class="nav-item">
              <div
                class="nav-link text-dark d-flex align-items-center gap-1"
              >
                <i class="ri-dashboard-line"></i>Dash Board
              </div>
            </li>

            <li class="nav-item">
              <div
                class="nav-link  text-danger d-flex align-items-center gap-1"
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
export default {
  name: 'NavBarProfile',
}
</script>

<style scoped>
.modal .modal-right-top {
  position: absolute;
  right: 15px;
  top: 45px;
}

.modal-dialog-width {
  width: 16rem;
}
.badge-fs {
  font-size: 0.9rem !important;
}
.nav-link:hover i{
  color: var(--mdb-primary);
}
.nav-link:hover {
  font-weight: bold;
}
</style>
