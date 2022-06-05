<template>
  <!-- start:right links -->
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <div class="dropdown dropstart">
      <button
        class="btn btn-white btn-floating shadow-none"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="ri-user-line ri-2x text-primary"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <NuxtLink class="dropdown-item" to="/">Profile</NuxtLink>
        </li>
        <li>
          <NuxtLink class="dropdown-item" to="/">Main Site</NuxtLink>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <div
            class="dropdown-item text-danger pointer-pointer"
            @click="logout"
          >
            Logout
          </div>
        </li>
      </ul>
    </div>
  </ul>
  <!-- start:right links -->
</template>

<script>
export default {
  name: 'DashNavBarRightLinks',

  methods: {
    logout() {
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
    },
  },
}
</script>

<style></style>
