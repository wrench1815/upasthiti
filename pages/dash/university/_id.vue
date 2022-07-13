<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
       <h1 class="text-gradient text-primary d-inline-block">
         University Edit
        </h1>
        <h3 class="text-secondary text-capitalize">
          Editing:
          <span class="text-info fw-bold">{{ university.id }}</span>
        </h3>
      </div>

      <div class="card-body">
        <Lazy-LoadersForm
          :inputCount="6"
          :btnEnd="true"
          :btnColor="'info'"
          v-if="loading"
        />

        <!-- for Valdation -->
        <ValidationObserver v-slot="{ handleSubmit }" v-else>
          <!-- start:University Add Form -->
          <form @submit.prevent="handleSubmit(editUniversity)">
            <!-- start:University name-->

            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>
              <label class="form-label required" for="textAreaExample"
                >Name</label
              >
            </div>
            <!-- end:University name -->

            <!-- start:University Address -->

            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>
              <label class="form-label required" for="textAreaExample"
                >Address</label
              >
            </div>
            <!-- end:University Address -->

            <!-- start:University Alias name -->
            <Lazy-DashInput
              :label="'Alias'"
              :validationRules="{ required: true, min: 3 }"
              :data.sync="university.university_alias_name"
              :type="'text'"
            />
            <!-- end:university Alias name -->

            <!-- Submit button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-rounded bg-gradient-success text-white mb-4"
              >
                Update University
              </button>
            </div>
          </form>
          <!-- End:University Add Form -->
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUniversityAdd',
  layout: 'dash',

  data() {
    return {
      loading: false,
      error: true,
      university: {
        university_name: '',
        university_address: '',
        university_alias_name: '',
      },
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'University',
        url: '/dash/university',
      },
      {
        name: 'Edit',
      },
    ])
  },
}
</script>

<style></style>
