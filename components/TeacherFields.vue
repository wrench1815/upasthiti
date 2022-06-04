<template>
  <section class="container">
    <form action="" class="card card-body">
      <!-- start: Name -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label">
            Name
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

      <!-- start:Department-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >Department
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <v-select placeholder="Choose.." :options="availDept"></v-select>
        </div>
      </div>
      <!--end:Total semesters-->
    </form>
  </section>
</template>

<script>
export default {
  name: 'TeacherField',

  data() {
    return {
      availDept: '',
    }
  },

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style></style>
