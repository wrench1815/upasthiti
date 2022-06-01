<template>
  <section class="container">
    <form action="" class="card card-body">
      <!-- start: Name -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Name
            <i class="ri-asterisk text-danger ri-sm"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Name -->

      <!-- start: Father's Name -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Father's Name
            <i class="ri-asterisk text-danger ri-sm"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Father's Name  -->

      <!-- start: Courses -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            > Courses
            <i class="ri-asterisk text-danger ri-sm"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end: Courses -->


    </form>
  </section>
</template>

<script>
export default {
  name: 'StudentField',

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>
