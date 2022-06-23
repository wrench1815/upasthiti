<template>
  <div class="table-responsive">
    <table class="table table-hove mb-0 bg-white align-middle table-borderless">
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase">Name</th>
          <th scope="col" class="fw-bolder text-uppercase">Email</th>
          <th scope="col" class="fw-bolder text-uppercase">Role</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Date Added
          </th>
          <th scope="col" class="fw-bolder text-uppercase">Actions</th>
        </tr>
      </thead>
      <tbody v-if="!loading">
        <tr v-for="user in users" :key="user.id" class="col-hov">
          <td>
            <div class="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style="width: 45px; height: 45px"
                class="rounded-circle"
              />
              <div class="ms-3">
                <p class="fw-bolder mb-1 text-primary">
                  {{ user.first_name ? user.first_name : '----' }}
                  {{ user.last_name ? user.last_name : '----' }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div class="text-dark mb-0">
              {{ user.email ? user.email : '----' }}
            </div>
          </td>

          <td>
            <div class="text-dark mb-0 badge-fs">
              <!-- if Admin -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-if="userRole(user) === 'Admin'"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill flex-wrap"
                >
                  <i class="ri-admin-fill"></i>
                  <div class="">Admin</div>
                </div>
              </div>

              <!-- if Principal -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-else-if="userRole(user) === 'Principal'"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill"
                >
                  <i class="ri-admin-fill"></i>
                  <div class="">Principal</div>
                </div>
              </div>

              <!-- if HOD -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-else-if="userRole(user) === 'HOD'"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill"
                >
                  <i class="ri-admin-fill"></i>
                  <div class="">HOD</div>
                </div>
              </div>

              <!-- if Teacher -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-else-if="userRole(user) === 'Teacher'"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill"
                >
                  <i class="ri-admin-fill"></i>
                  <div class="">Teacher</div>
                </div>
              </div>

              <!-- fallback -->
              <div
                class="d-flex justify-content-center align-items-center"
                v-else
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-danger badge-fs shadow-3-strong py-2 rounded-pill"
                >
                  <div class="">----</div>
                </div>
              </div>
            </div>
            <!-- <p class="text-dark mb-0" :v-html="{{userRole(user)}}"></p> -->
          </td>
          <td>
            <p class="text-dark mb-0">
              {{ user.date_added ? dateFormat(user.date_added) : '----' }}
            </p>
          </td>
          <td>
            <div class="d-flex gap-2 justify-content-center align-items-center">
              <NuxtLink
                :to="`/dash/user/${user.id}`"
                class="btn btn-floating btn-info btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-edit-2-fill ri-lg"></i
              ></NuxtLink>
              <a
                @click="deleteUser(user.id)"
                class="btn btn-floating btn-danger btn-sm d-flex justify-content-center align-items-center"
                ><i class="ri-delete-bin-fill ri-lg"></i
              ></a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashUserTable',

  data() {
    return {
      uRole: '',
      users: [],
      loading: true,
    }
  },

  methods: {
    dateFormat(date) {
      // return strf date
      return this.$moment(date).format('Do MMMM YYYY, h:mm:ss a')
    },

    getUsers() {
      // fetch data from api
      // populate user with data in data()
      this.$api.user
        .list()
        .then((resp) => {
          this.users = resp.data
          console.log(this.user)
        })
        .finally(() => {
          this.loading = false
        })
    },

    userRole(user) {
      // return Admin if is_admin is true, return teacher if is_teacher is true, return Hod if is_hod is true, return Principal if is_principal is true
      if (user.is_admin) {
        return 'Admin'
      } else if (user.is_teacher) {
        return 'Teacher'
      } else if (user.is_hod) {
        return 'HOD'
      } else if (user.is_principal) {
        return 'Principal'
      } else {
        return '----'
      }
    },
  },

  mounted() {
    this.getUsers()
  },
}
</script>

<style scoped>
.col-hov:hover {
  /* transform: scale(1.05);
  box-shadow: 3.8px 4.5px 3.6px rgba(0, 0, 0, 0.024),
    10.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    25.3px 30.1px 24.1px rgba(0, 0, 0, 0.046),
    84px 100px 80px rgba(0, 0, 0, 0.07); */

  /* border: 0.125rem solid var(--mdb-primary) !important;
  transition: all 0.5s ease-in-out;
  border-radius: 0.25rem !important ; */
}
/* .col-hov{
  border: 0.125rem solid var(transparent) !important;
  transition: all 0.5s ease-in-out;
} */

.badge-fs {
  font-size: 0.9rem !important;
}

table th:first-child {
  border-radius: 10px 0 0 10px !important;
}

table th:last-child {
  border-radius: 0 10px 10px 0;
}
</style>
