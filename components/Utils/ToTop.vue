<template>
  <div class="position-fixed bottom-0 end-0">
    <div
      class="btn btn-secondary btn-floating m-2"
      :class="btnClass"
      @click="toTop()"
      v-if="showTopBtn"
    >
      <i class="ri-arrow-up-s-line fs-4"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToTop',

  data() {
    return {
      showTopBtn: false,
      btnClass: 'slide-top',
    }
  },

  methods: {
    toTop() {
      setTimeout(() => {
        window.scroll({ top: 0, behavior: 'smooth' })
      }, 100)
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        this.showTopBtn = true
        this.btnClass = 'slide-bottom'
      } else {
        this.btnClass = 'slide-top'
      }
    })
  },
}
</script>

<style scoped>
.flip-2-hor-top-2 {
  animation: flip-2-hor-top-2 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    reverse both;
}

.slide-top {
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-bottom {
  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**
 * ----------------------------------------
 * animation flip-2-hor-top-2
 * ----------------------------------------
 */
@keyframes flip-2-hor-top-2 {
  0% {
    transform: translateY(0) rotateX(0);
    transform-origin: 50% 0%;
  }
  100% {
    transform: translateY(-100%) rotateX(180deg);
    transform-origin: 50% 100%;
  }
}

/**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
@keyframes slide-top {
  0% {
    transform: translateY(0);
  }
  /* 99% {
    transform: translateY(-100px);
  } */
  100% {
    transform: translateY(-100px);
    visibility: hidden;
  }
}

/**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
@keyframes slide-bottom {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
