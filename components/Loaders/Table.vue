<template>
  <div class="table-responsive">
    <table class="table table-hover table-bordered align-middle">
      <thead class="align-middle">
        <tr>
          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 placeholder-width"></span>
          </th>
          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 placeholder-width"></span>
          </th>
          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 placeholder-width"></span>
          </th>
          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 placeholder-width"></span>
          </th>

          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 placeholder-width"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in 5">
          <td class="placeholder-wave">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-8"></span>
          </td>
          <td class="placeholder-wave">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-8"></span>
          </td>
          <td class="placeholder-wave">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-8"></span>
          </td>
          <td class="placeholder-wave">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-8"></span>
          </td>
          <td class="placeholder-wave">
            <span
              class="btn btn-floating btn-info btn-sm placeholder col-1"
            ></span>
            <span
              class="btn btn-floating btn-danger btn-sm placeholder col-1"
            ></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LoadersTable',
}
</script>

<style scoped>
.placeholder-width {
  width: 5rem;
}
</style>
