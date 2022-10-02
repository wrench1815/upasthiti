<template>
  <div class="card border hover-shadow">
    <div class="card-body pb-3">
      <h5 class="card-title text-primary border-bottom pb-1">
        <NuxtLink
          class="hover-underline-animation"
          :to="`/panel/class/detail/${classs.id}`"
        >
          {{ classs.name }}
        </NuxtLink>
      </h5>
      <p class="card-text">
        <span class="fw-bold"> Code: </span> {{ classs.code }}
      </p>
      <p class="card-text">
        <span class="fw-bold"> Department: </span> {{ classs.department.name }}
      </p>
      <p class="card-text">
        <span class="fw-bold"> Course Code: </span> {{ classs.course.code }}
      </p>
      <div class="hover-underline-animation link-primary">Mark Attendance</div>
      <!-- <button class="btn btn-primary btn-rounded">Mark</button> -->
    </div>
    <div class="card-footer">
      <div class="text-muted">
        student count:
        {{ classs.student.length }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelClasscard',

  props: {
    classs: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
