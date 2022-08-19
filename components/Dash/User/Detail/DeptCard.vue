<template>
  <div>
    <div class="card my-4 shadow">
      <div class="card-header fw-bold fs-5 bg-primary text-white">
        <!-- {{ principal.first_name }} {{ principal.last_name }} -->
      </div>
      <div class="card-body">
        <div>
          <label class="text-muted fw-bold-500">HOD :</label>
          <span class="fw-bold-600 text-dark fs-6 card-text">
            <!-- {{
                  principal.email
                }} -->
          </span>
        </div>
        <div>
          <label class="text-muted fw-bold-500">Teacher :</label>
          <span class="fw-bold-600 text-dark fs-6">
            <!-- {{
                  principal.gender
                }} -->
          </span>
        </div>
        <div>
          <label class="text-muted fw-bold-500">Course :</label>
          <span class="fw-bold-600 text-dark fs-6">
            <!-- {{
                  principal.gender
                }} -->
          </span>
        </div>
        <div>
          <label class="text-muted fw-bold-500">Student Count:</label>
          <span class="fw-bold-600 text-dark fs-6">
            <!-- {{
                  principal.gender
                }} -->
          </span>
        </div>
        <a href="#" class="btn btn-primary rounded-pill mt-4"
          >Details <i class="ri-external-link-fill"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserDetailDeptCard',
}
</script>

<style></style>
