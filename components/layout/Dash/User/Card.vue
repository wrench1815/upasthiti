<template>
  <div class="card">
    <img
      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
      class="card-img-top"
      alt="Sunset Over the Sea"
    />
    <div class="card-body">
      <h3 class="text-primary">
        {{ user.first_name ? user.first_name : '----' }}
        {{ user.last_name ? user.last_name : '----' }}
      </h3>
      <h3 class="text-info">
        {{ user.date_added ? dateFormat(user.date_added) : '----' }}
      </h3>
      <p class="card-text">
        {{ user.email ? user.email : '----' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserCard',

  props: {
    user: {
      type: Object,
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
