<template>
  <footer class="bg-white text-center">
    <!-- Copyright -->
    <div class="text-center p-2">
      © {{ currentYear }} Copyright:
      <NuxtLink class="text-primary" to="/">Upasthiti</NuxtLink>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: 'DashFooter',

  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style></style>
