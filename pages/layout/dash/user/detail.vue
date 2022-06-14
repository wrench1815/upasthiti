<template>
  <section>
    <LayoutDashUserCard v-if="!loading" :user="user" />
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
    async getUser() {
      // fetch user by id
      // populate user object with fetched data
      let id = this.$route.query.id
      this.$api.user.retrieve(id).then((resp) => {
        this.user = resp.data
      })
    },

   
  },

  mounted() {
    this.getUser().finally(() => {
      this.loading = false
    })
  },
}
</script>

<style></style>
