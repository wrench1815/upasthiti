<template>
  <div class="card border hover-shadow">
    <div class="card-body pb-3">
      <h5 class="card-title text-primary border-bottom pb-1">
        <NuxtLink
          class="text-wrap d-inline-block"
          :to="`/panel/class/detail/${classs.id}`"
        >
          <span class="d-inline">
            <span class="better-underline">
              {{ classs.name }}
            </span>
            <span class="link"></span>
          </span>
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

      <p class="card-text fw-bold text-warning">
        {{ $nuxt.$utils.dateFormatNoTimeDay(classs.session_start) }} -
        {{ $nuxt.$utils.dateFormatNoTimeDay(classs.session_end) }}
      </p>

      <NuxtLink
        class="text-wrap d-inline-block"
        :to="`/panel/attendance/mark/${classs.id}`"
      >
        <span class="d-inline">
          <span class="better-underline">Mark Attendance</span>
          <span class="link"></span>
        </span>
      </NuxtLink>
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
