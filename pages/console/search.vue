<template>
  <section class="container my-4">
    <div class="card">
      <div class="card-header py-3">
        <h2 class="text-primary text-center fw-bold text-capitalize">
          Check your attendance
        </h2>
      </div>
      <div class="card-body">
        <form class="" action="">
          <div class="row px-3 py-1 gy-3">
            <!-- start:University Roll No. -->
            <div class="col-lg-6 col-md-6 col-12">
              <label class="form-label required"
                ><i class="ri-user-fill text-primary text-gradient"></i>
                University Roll No.</label
              >
              <div class="col">
                <div class="form">
                  <input type="search" id="rollno" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end:University Roll No. -->

            <!-- start:University -->
            <div class="col-lg-6 col-md-6 col-12">
              <label class="form-label required"
                ><i class="ri-bank-fill text-primary text-gradient"></i>
                University</label
              >
              <div class="col">
                <div class="form">
                  <input type="search" id="rollno" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end:University -->

            <!-- start:College -->
            <div class="col-lg-6 col-md-6 col-12">
              <label class="form-label required"
                ><i class="ri-government-fill text-primary text-gradient"></i>
                College</label
              >
              <div class="col">
                <div class="form">
                  <input type="search" id="rollno" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end:College -->

            <!-- start:Class -->
            <div class="col-lg-6 col-md-6 col-12">
              <label class="form-label required"
                ><i class="ri-database-fill text-primary text-gradient"></i>
                Class</label
              >
              <div class="col">
                <div class="form">
                  <input type="search" id="rollno" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end:Class -->

            <!-- Start:Date -->
            <div class="col-12 text-center">
              <label class="form-label required"
                ><i class="ri-calendar-line text-primary text-gradient"></i>
                Date</label
              >
            </div>
            <DatePicker
              v-model="attendance.date"
              type="month"
              placeholder="Select Month"
              valueType="format"
              prefix-class="up"
              format="MMMM YYYY"
            ></DatePicker>

            <!-- End:Date -->

            <!-- Start:Button -->
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn bg-gradient-primary text-white btn-rounded col-md- col-"
              >
                Check Attendance
              </button>
            </div>

            <!-- End:Button -->
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import DatePicker from 'vue2-datepicker'
// import { mapGetters } from 'vuex'
export default {
  name: 'ConsoleSearch',
  components: {
    DatePicker,
  },

  data() {
    return { attendance: { date: '' } }
  },

  mounted() {
    this.attendance.date = this.$moment().format('MMMM YYYY')
  },
}
</script>

<style></style>
