<template>
   <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <!-- start:Header -->
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Name</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Email
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">Role</th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Date Added
          </th>
          <th scope="col" class="fw-bolder text-uppercase">Actions</th>
        </tr>
      </thead>
      <!-- end:Header -->
      <tbody>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
 name: 'DashUniversityTable',
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
