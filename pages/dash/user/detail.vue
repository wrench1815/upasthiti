<template>
  <section class="container-fluid my-4">
    <Lazy-DashUserCard v-if="!loading" :user="user" />
  </section>
</template>

<script>
export default {
  name: 'DashUserDetail',
  layout: 'dash',

  data() {
    return {
      user: {},
      loading: true,
    }
  },

  methods: {
    // fetch user by id
    // populate user object with fetched data
    async getUser() {
      return new Promise((resolve, reject) => {
        let id = this.$route.query.id

        this.$api.user
          .retrieve(id)
          .then((resp) => {
            this.user = resp.data

            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },

  mounted() {
    this.getUser().then(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
