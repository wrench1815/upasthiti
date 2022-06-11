<template>
  <div class="table-responsive">
    <table class="table table-hover table-bordered align-middle">
      <thead class="align-middle">
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Date Added</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.first_name ? user.first_name : '----' }}</td>
          <td>{{ user.last_name ? user.last_name : '----' }}</td>
          <td>{{ user.email ? user.email : '----' }}</td>
          <td>
            {{ user.date_added ? dateFormat(user.date_added) : '----' }}
          </td>
          <td class="d-flex gap-2">
            <NuxtLink
              :to="`/dash/user/detail?id=${user.id}`"
              class="btn btn-floating btn-success btn-sm d-flex justify-content-center align-items-center"
              ><i class="ri-eye-fill ri-lg"></i
            ></NuxtLink>
            <NuxtLink
              :to="`/dash/user/${user.id}`"
              class="btn btn-floating btn-info btn-sm d-flex justify-content-center align-items-center"
              ><i class="ri-edit-2-fill ri-lg"></i
            ></NuxtLink>
            <NuxtLink
              :to="`/dash/user/${user.id}`"
              class="btn btn-floating btn-danger btn-sm d-flex justify-content-center align-items-center"
              ><i class="ri-delete-bin-fill ri-lg"></i
            ></NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DashUserTable',

  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  methods: {
    dateFormat(date) {
      // return strf date
      return this.$moment(date).format('Do MMMM YYYY, h:mm:ss a')
    },
  },
}
</script>

<style></style>
