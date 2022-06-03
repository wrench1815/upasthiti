<template>
  <section class="container">
    <form action="" class="card card-body">
      <!-- start:Department  Name -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >Department Name
            <i class="ri-asterisk text-danger ri-sm"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Department Name -->

      <!-- start:Department code -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >Department Code
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Department code -->

      <!-- start:Types of programmes offered-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >Types Of Programmes Offered
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availTypesOfProgrammes"
          ></v-select>
        </div>
      </div>
      <!--end:Types of programmes offered-->

      <!-- start:Total Semesters-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >Total Semesters
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <v-select placeholder="Choose.." :options="availSemesters"></v-select>
        </div>
      </div>
      <!--end:Total semesters-->

      <!--start: Student Intake -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >Student Intake <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:Student Intake -->

      <!--start: Faculty Intake -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >Faculty Intake
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:Faculty Intake-->

      <!--start: No. Of Professors -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >No. Of Professors
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:No. Of Professors-->

      <!--start: No. Of Associate Professors -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label">
            No. Of Associate Professors
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end: No. Of Associate Professors-->

      <!--start: No. Of Assistant Professors -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >No. Of Assistant Professors
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:No. Of Assistant Professors-->

      <!--start: HOD-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >HOD
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:HOD-->
    </form>
  </section>
</template>

<script>
export default {
  name: 'DepartmentField',

  data() {
    return {
      Types: '',
      availTypesOfProgrammes: [
        'Under-Graduate',
        'Post-Graduate',
        'Integrated PG',
        'M.Phil',
        'Ph.D',
        'Certificate',
        'UG Diploma',
        'PG Diploma',
      ],
      availSemesters: [1, 2, 3, 4, 5, 6, 7, 8],
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
