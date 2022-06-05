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

      <!-- start: Class Roll No.-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Class Roll No.
            <i class="ri-asterisk text-danger ri-sm"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Class Roll No.  -->

      <!-- start: Batch -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Batch
            <i class="ri-asterisk text-danger ri-sm"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end: Batch-->

      <!-- start:Gender-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Gender
            <i class="ri-asterisk text-danger ri-sm"></i>
          </label>
        </div>
        <div class="col-6">
          <v-select placeholder="Choose.." :options="availGender"></v-select>
        </div>
      </div>
      <!-- end:Gender-->
    </form>
  </section>
</template>

<script>
export default {
  name: 'StudentField',

  data() {
    return {
      Types: '',
      availGender: ['Male', 'Female', 'Rather Not Say'],
    }
  },

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>
