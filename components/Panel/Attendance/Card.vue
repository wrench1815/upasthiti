<template>
  <section>
    <div class="card border hover-shadow hover-card">
      <div class="card-body p-3">
        <div class="d-flex justify-content-center">
          <!-- profile image -->
          <img
            class="avatar avatar-xxl rounded-circle obj-fit-cover img-fluid border hover-card-shadow"
            :class="borderClass"
            :data-src="student.profile_image"
            v-lazy-load
          />
        </div>

        <div class="mt-3">
          <!-- name -->
          <h3 class="text-primary text-center">{{ full_name }}</h3>
          <!-- roll no -->
          <div class="text-secondary fs-6">
            Class Roll no:
            <span class="text-muted">{{ student.class_roll_no }}</span>
          </div>
          <div class="text-secondary fs-6">
            University Roll No:
            <span class="text-muted">{{ student.university_roll_no }}</span>
          </div>
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
                      attendance.is_present,
                    'border-success text-success text-gradient bg-white fw-bolder':
                      !attendance.is_present,
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
                v-model="attendance.is_present"
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
                      attendance.is_late,
                    'border-warning text-warning text-gradient bg-white fw-bolder':
                      !attendance.is_late,
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
                v-model="attendance.is_late"
              />
            </div>
          </div>
          <div class="position-absolute top-0 bottom-0 start-50 border"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import attendance from '~/api/attendance'

export default {
  name: 'DashAttendanceCard',

  props: {
    student: {
      type: Object,
      required: true,
    },
    classs: {
      type: Object,
      required: true,
    },
  },

  watch: {
    'attendance.is_present'() {
      if (this.attendance.is_present) {
        this.attendance.is_absent = false
        if (this.attendance.is_present && !this.attendance.is_late) {
          this.borderClass = 'border-success'
        }
      } else if (!this.attendance.is_present && this.attendance.is_late) {
        this.attendance.is_absent = true
        this.attendance.is_late = false
        this.borderClass = 'border-danger'
      } else if (!this.attendance.is_present && !this.attendance.is_late) {
        this.attendance.is_absent = true
        this.borderClass = 'border-danger'
      }

      this.$store.commit('attendance/addAttendance', this.attendance)
    },
    'attendance.is_late'() {
      if (this.attendance.is_late) {
        this.attendance.is_absent = false
        this.attendance.is_present = true
        this.borderClass = 'border-warning'
      }

      if (this.attendance.is_present && !this.attendance.is_late) {
        this.borderClass = 'border-success'
      }

      this.$store.commit('attendance/addAttendance', this.attendance)
    },
  },

  data() {
    return {
      attendance: {
        is_present: false,
        is_late: false,
        is_absent: true,
        student: '',
        for_class: '',
        date: '',
      },
      responseAttendance: {},

      lateId: this.uuidGenerator(),
      presentId: this.uuidGenerator(),

      borderClass: 'border-danger',
    }
  },

  computed: {
    full_name() {
      return `${this.student.first_name} ${this.student.last_name}`
    },
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

    addAttendance() {
      let attendance = { ...this.attendance }
      attendance.date = this.$moment.format('YYYY-MM-DD')
      // attendance.for_class = this.classs.id
      // attendance.student = this.student.id

      this.$api.attendance.create(attendance).then((resp) => {
        this.responseAttendance = resp.data
      })
    },

    setAttendanceData() {
      this.attendance.student = this.student.id
      this.attendance.for_class = this.classs.id
      this.attendance.date = this.$moment().format('YYYY-MM-DD')
    },
  },

  mounted() {
    this.setAttendanceData()

    this.$store.commit('attendance/addAttendance', this.attendance)
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

.hover-card:hover .hover-card-shadow {
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.16),
    0 10px 20px -2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  /* border-color: transparent !important; */
}
</style>
