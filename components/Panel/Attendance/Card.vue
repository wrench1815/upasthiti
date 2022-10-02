<template>
  <section>
    <div class="card border hover-shadow">
      <div class="card-body p-3">
        <div class="d-flex justify-content-center">
          <!-- profile image -->
          <img
            class="avatar avatar-xxl rounded-circle obj-fit-cover shadow-2-strong img-fluid border"
          />
        </div>

        <div class="mt-3">
          <!-- name -->
          <h3 class="text-primary">Name</h3>
          <!-- roll no -->
          <div class="text-secondary fs-5">Roll no</div>
        </div>

        <div class="position-relative mt-2 badge-holder-height">
          <div class="row h-100">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <label
                class="form-check-label ripple"
                data-mdb-ripple-unbound="true"
                data-mdb-ripple-radius="40"
                data-mdb-ripple-color="primary"
                data-mdb-ripple-centered="true"
                :for="presentId"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-1 badge badge-fs py-2 rounded-pill border user-select-none badge-style"
                  :class="{
                    'border-transparent bg-gradient-success shadow-3-strong text-white':
                      user.present,
                    'border-success text-success text-gradient bg-white fw-bolder':
                      !user.present,
                  }"
                >
                  <i class="ri-check-double-fill no-transition"></i>
                  <span class="no-transition">Present</span>
                </div>
              </label>
              <input
                class="form-check-input me-2 d-none"
                type="checkbox"
                :id="presentId"
                v-model="user.present"
              />
            </div>

            <div class="col-6 d-flex justify-content-center align-items-center">
              <label
                class="form-check-label ripple"
                data-mdb-ripple-unbound="true"
                data-mdb-ripple-radius="40"
                data-mdb-ripple-color="primary"
                data-mdb-ripple-centered="true"
                :for="lateId"
              >
                <div
                  class="d-flex justify-content-center align-items-center gap-1 badge badge-fs py-2 rounded-pill border user-select-none badge-style"
                  :class="{
                    'border-transparent bg-gradient-warning shadow-3-strong text-white':
                      user.late,
                    'border-warning text-warning text-gradient bg-white fw-bolder':
                      !user.late,
                  }"
                >
                  <i class="ri-check-fill no-transition"></i>
                  <span class="no-transition">Late</span>
                </div>
              </label>
              <input
                class="form-check-input me-2 d-none"
                type="checkbox"
                :id="lateId"
                v-model="user.late"
              />
            </div>
          </div>
          <div class="position-absolute top-0 bottom-0 start-50 border"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="card shadow-3-strong text-center p-3">
    <img class="avatar-xl rounded-circle obj-fit-cover shadow-2-strong" />
    <div class="text-primary fs-4">Name</div>
    <div class="text-secondary fs-5">Roll no</div>
    <div class="row mt-3">
      <div class="col-lg-6 ">
        <div
          class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-success badge-fs shadow-3-strong py-2 rounded-pill"
        >
          <div class="">Present</div>
        </div>
      </div>
      <div class="col-lg-6 ">
        <div
          class="d-flex justify-content-center align-items-center gap-2 badge bg-gradient-secondary badge-fs shadow-3-strong py-2 rounded-pill"
        >
          <div class="">Late</div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'DashAttendanceCard',

  data() {
    return {
      user: {
        present: false,
        late: false,
        absent: true,
      },

      lateId: this.uuidGenerator(),
      presentId: this.uuidGenerator(),
    }
  },

  methods: {
    uuidGenerator() {
      // Generate uuid
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
          return v.toString(16)
        }
      )
    },
  },
}
</script>

<style scoped>
.badge-fs {
  font-size: 0.9rem !important;
  /* font-size: 1.7rem !important; */
}
.badge-style {
  /* height: 3rem; */
  /* width: 3rem; */
}
.badge-holder-height {
  height: 4rem;
}
</style>
