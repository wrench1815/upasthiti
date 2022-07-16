<template>
  <div class="table-responsive">
    <table class="table mb-0 bg-white align-middle table-borderless">
      <!-- start:Header -->
      <thead class="align-middle bg-primary text-white">
        <tr>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            University Name
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Alias
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            University Address
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Contact Info
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Created On
          </th>
          <th scope="col" class="fw-bolder text-uppercase text-nowrap">
            Action
          </th>
        </tr>
      </thead>
      <!-- end:Header -->
      <tbody>
        <!-- start: Body -->
        <!-- start:Display Universitites-->
        <tr>
          <td>
            <!-- start:University Name -->
            <div class="d-flex align-items-center">
              <!-- logo -->
              <div class="avatar rounded-circle">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  class="avatar rounded-circle obj-pos-center obj-fit-cover shadow"
                />
              </div>
              <!-- Name -->
              <div class="ms-3">
                <p class="fw-bold mb-1 text-primary">Cluster University</p>
              </div>
            </div>
          </td>
          <!-- end: University Name -->

          <!-- University Alias -->
          <td>
            <div class="d-flex justify-content-center align-items center">
              <div
                class="badge bg-gradient-warning badge-fs shadow-3-strong py-2 rounded-pill px-3"
              >
                <span>CLUJ</span>
              </div>
            </div>
          </td>
          <!-- end: University Alias -->

          <!-- start: University Address -->
          <td>
            <div class="text-dark mb-0">
              <p>Jewel, near Dogra Chowk, Jammu, Jammu and Kashmir, India</p>
            </div>
          </td>
          <!-- end:University Address -->

          <!-- start:University contact-info-->
          <td>
            <div class="text-dark mb-0">
              <p class="fw-normal mb-1">cluj@gmail.com</p>
              <p class="mb-0">9624597097</p>
            </div>
          </td>
          <!-- end:University contact-info -->

          <!-- start:Created On -->
          <td>
            <div class="text-dark mb-0 text-nowrap">
              <p>14th June 2022,8:37:29 pm</p>
            </div>
          </td>
          <!-- end:Created on-->
          <!-- start:Actions -->
          <td>
            <div class="d-flex justify-content-center align-items-center gap-2">
              <!-- Detail -->

              <div
                class="btn btn-floating bg-gradient-success text-white btn-sm d-flex justify-content-center align-items-center"
              >
                <i class="ri-eye-fill ri-lg"></i>
              </div>
              <!-- Edit -->
              <div
                class="btn btn-floating bg-gradient-info text-white btn-sm d-flex justify-content-center align-items-center"
              >
                <i class="ri-edit-2-fill ri-lg"></i>
              </div>
              <!-- Destroy -->
              <div
                class="btn btn-floating bg-gradient-danger text-white btn-sm d-flex justify-content-center align-items-center"
              >
                <i class="ri-delete-bin-fill ri-lg"></i>
              </div>
            </div>
          </td>
          <!-- end:Actions-->
        </tr>
        <!-- end:Display Universities -->
      </tbody>
      <!-- end: Body -->
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
