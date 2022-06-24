<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <!-- start:Header -->
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 w-5-rem"></span>
          </th>
          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 w-5-rem"></span>
          </th>
          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 w-5-rem"></span>
          </th>
          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 w-5-rem"></span>
          </th>

          <th scope="col" class="placeholder-wave">
            <span class="placeholder col-12 w-100"></span>
          </th>
        </tr>
      </thead>
      <!-- end:Header -->
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
            <div class="d-flex justify-content-center align-items-center gap-2">
              <span
                class="btn btn-floating bg-gradient-success btn-sm placeholder col-1"
              ></span>
              <span
                class="btn btn-floating bg-gradient-info btn-sm placeholder col-1"
              ></span>
              <span
                class="btn btn-floating bg-gradient-danger btn-sm placeholder col-1"
              ></span>
            </div>
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
table th:first-child {
  border-radius: 10px 0 0 10px !important;
}

table th:last-child {
  border-radius: 0 10px 10px 0 !important;
}
</style>
