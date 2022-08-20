<template>
  <div>
    <div class="card my-4 shadow">
      <div class="card-header fw-bold fs-5 bg-primary text-white">
        {{ dept.name ? dept.name : '----' }}
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
        <NuxtLink
          :to="`/dash/department/detail?id=${dept.id}`"
          class="btn btn-primary rounded-pill mt-4"
          >Details <i class="ri-link"></i
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserDetailDeptCard',

  props: {
    dept: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
