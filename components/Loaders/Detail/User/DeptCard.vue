<template>
  <div class="row">
    <div
      class="col-sm-6 col-lg-4 col-md-6 col-12"
      v-for="(dept, index) in count"
      :key="index"
    >
      <div>
        <div class="card my-4 shadow">
          <div class="card-header fw-bold fs-5 bg-primary text-white">
            <Lazy-LoadersText size="xs" :length="12" />
          </div>
          <div class="card-body">
            <div>
              <Lazy-LoadersText size="xs" para />
            </div>
            <Lazy-LoadersButton class="mt-4" rounded />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadersDetailUserDeptCard',

  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style></style>
