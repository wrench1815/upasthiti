<template>
  <div class="table-responsive">
    <table class="table table-hover mb-0 bg-white align-middle">
      <thead class="align-middle table-secondary">
        <tr>
          <th scope="col" class="fw-bolder">NAME</th>
          <th scope="col" class="fw-bolder">EMAIL</th>
          <th scope="col" class="fw-bolder">ROLE</th>
          <th scope="col" class="fw-bolder">DATE ACTIONS</th>
          <th scope="col" class="fw-bolder">ACTIONS</th>
        </tr>
      </thead>
      <tbody v-if="!loading">
        <tr v-for="user in users" :key="user.id">
          <td>
            <div class="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style="width: 45px; height: 45px"
                class="rounded-circle"
              />
              <div class="ms-3">
                <p class="fw-bolder mb-1 text-secondary">
                  {{ user.first_name ? user.first_name : '----' }}
                  {{ user.last_name ? user.last_name : '----' }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <p class="text-muted mb-0">
              {{ user.email ? user.email : '----' }}
            </p>
          </td>

          <td>
            <p class="text-muted mb-0">
              {{ user.role ? user.role : '----' }}
            </p>
          </td>
          <td>
            <p class="text-muted mb-0">
              {{ user.date_added ? dateFormat(user.date_added) : '----' }}
            </p>
          </td>
          <td class="d-flex gap-2">
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
  },

  mounted() {
    this.getUsers()
  },
}
</script>

<style></style>
