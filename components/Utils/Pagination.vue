<template>
  <nav
    class="d-flex gap-2 align-items-center flex-wrap justify-content-center justify-content-md-star"
  >
    <!-- start:previous buttons -->
    <ul class="d-flex gap-2 list-unstyled mb-0">
      <li
        class="rounded-circle border border-1 border-primary hover-item hover-shadow ripple"
        data-mdb-ripple-color="light"
        @click="prevPage"
      >
        <span class="d-flex justify-content-center align-items-center p-1 px-2">
          <i class="ri-arrow-left-s-line"></i>
        </span>
      </li>
    </ul>
    <!-- end:previous buttons -->

    <!-- start:paging -->
    <ul class="d-flex gap-2 list-unstyled mb-0">
      <li
        class="d-flex flex-row rounded-5 bg-light borde border- border-primar text-primar fw-bol"
      >
        <span
          class="d-flex justify-content-center align-items-center p-1 px-2"
          >{{ this.pagination.current }}</span
        >
        <span class="d-flex justify-content-center align-items-center p-1 px-2"
          >of</span
        >
        <span
          class="d-flex justify-content-center align-items-center p-1 px-2"
          >{{ this.pagination.count }}</span
        >
      </li>
    </ul>
    <!-- end:paging -->

    <!-- start:next buttons -->
    <ul class="d-flex gap-2 list-unstyled mb-0">
      <li
        class="rounded-circle border border-1 border-primary hover-item hover-shadow ripple"
        data-mdb-ripple-color="light"
        @click="nextPage"
      >
        <span class="d-flex justify-content-center align-items-center p-1 px-2">
          <i class="ri-arrow-right-s-line"></i>
        </span>
      </li>
    </ul>
    <!-- end:next buttons -->
  </nav>
</template>

<script>
export default {
  name: 'UtilsPagination',

  props: {
    pagination: {
      type: Object,
      required: true,
    },
  },

  methods: {
    scrollToTop() {
      setTimeout(() => {
        window.scroll({ top: 0, behavior: 'smooth' })
      }, 100)
    },

    // previous page
    prevPage() {
      if (this.pagination.current > 1) {
        this.scrollToTop()
        this.$emit('prevPage', this.pagination.current - 1)
      }
    },

    // next page
    nextPage() {
      if (this.pagination.current < this.pagination.count) {
        this.scrollToTop()
        this.$emit('nextPage', this.pagination.current + 1)
      }
    },
  },
}
</script>

<style scoped>
.hover-item {
  background-color: var(--mdb-white) !important;
  color: var(--mdb-secondary) !important;
  border-color: var(--mdb-secondary) !important;
  height: 2.2rem;
  width: 2.2rem;
}

.hover-item:hover {
  background-color: var(--mdb-primary) !important;
  color: var(--mdb-white) !important;
  border-color: var(--mdb-primary) !important;
}
</style>
