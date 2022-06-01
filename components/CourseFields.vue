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

      <!-- start:code -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Code
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:code -->

      <!--start: Teacher Assigned -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Teacher Assigned <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end: Teacher Assigned -->

      <!--start:Is Practical-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Is Practical <i class="ri-asterisk ri-sm text-danger"></i
          ></label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
        </div>
      </div>
      <!--end: Is Practical-->
    </form>
  </section>
</template>

<script>
export default {
  name: 'CourseField',

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>
