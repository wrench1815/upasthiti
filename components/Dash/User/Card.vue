<template>
  <div class="card">
    <img
      :data-src="user.profile_image ? user.profile_image : defaultProfileImage"
      class="card-img-top img-fluid obj-fit-cover obj-pos-center ratio-16-9"
      :alt="`${user.short_name}'s profile image`"
      v-lazy-load
    />
    <div class="card-body">
      <h3 class="text-primary">
        {{ user.full_name ? user.full_name : '----' }}
      </h3>
      <h3 class="text-info">
        {{
          user.date_added ? $nuxt.$utils.dateFormat(user.date_added) : '----'
        }}
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

  data() {
    return {
      defaultProfileImage: '',
    }
  },

  methods: {
    setDefaults() {
      return new Promise((resolve, reject) => {
        this.defaultProfileImage = this.$config.defaultProfileImage

        resolve()
      })
    },
  },
}
</script>

<style scoped>
.ratio-16-9 {
  aspect-ratio: 16/9;
}
</style>
