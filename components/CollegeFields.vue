<template>
  <section class="container">
    <form action="" class="card card-body">
      <!-- start:Institute Name -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Institute name</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Institute Name -->

      <!-- start:Address -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Address</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Address -->

      <!-- start:principal -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Principal</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:principal -->

      <!-- start:college logo -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">College Logo</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="file" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:college logo -->

      <!-- start:website -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Website</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:website -->

      <!-- start:Institute Type-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Institute Type</label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availCollegeType"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <!--end:Institute Type-->

      <!-- start:Affiliating University-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Affiliating University</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Affiliating University-->

      <!-- start:Institute Alias Name-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Institute Alias Name</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Institute Alias Name-->

      <!-- start:Mobile-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Mobile</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="tel" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end: Mobile-->

      <!-- start:Alternate Contact-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Alternate Contact</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="tel" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:Alternate Contact-->

      <!-- start:Email-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Email</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="email" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:Email-->

      <!-- start:Alternate Email-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Alternate Email</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="email" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Alternate Email-->

      <!-- start:State-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">State</label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availStates"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <!-- end:State-->

      <!-- start:City-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">City</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:City -->

      <!-- start:Pincode -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Pincode</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!-- end:Pincode -->

      <!-- start:Running From Own Campus-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Running From Own Campus</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
        </div>
      </div>
      <!-- end:Running From Own Campus-->

      <!-- start:Institute For-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Institute For</label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availInstituteFor"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <!-- end:Institute For-->

      <!-- start:Location Type-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Location Type</label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availLocation"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <!-- end:Location Type -->

      <!--start: Financial Model -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Financial Model</label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availFinancialTypes"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <!--end: Financial Model -->

      <!--start: Campus Area (In Acres) -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Campus Area (In Acres)</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end: Campus Area (In Acres) -->

      <!--start:Built-Up Area(In sq. mts.) -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Built-Up Area(In sq. mts.)</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" class="form-control" />
          </div>
        </div>
      </div>
      <!--end: Built-Up Area(In sq. mts.) -->

      <!-- start: Minority Instituition-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Minority Instituition</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
        </div>
      </div>
      <!--end: Minority Instituition -->

      <!--start: Recognised By UGC As College With potential For Excellence -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Recognised By UGC As College With potential For Excellence</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
        </div>
      </div>
      <!--end: Recognised By UGC As College With potential For Excellence -->

      <!--start: Recognised Under Section 12B Of UGC -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Recognised Under Section 12B Of UGC</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
        </div>
      </div>
      <!--end: Recognised Under Section 12B Of UGC -->

      <!--start: Any Other Recognition By Govt. Agency -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold"
            >Any Other Recognition By Govt. Agency</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
        </div>
      </div>
      <!--end: Any Other Recognition By Govt. Agency -->

      <!--start: NAAC Accredited -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">NAAC Accredited</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input class="form-check-input" type="checkbox" value="" />
          </div>
        </div>
      </div>
      <!--end: NAAC Accredited -->

      <!--start:Institue Mission-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Institue Mission</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:Institue Mission-->

      <!--start:Institue Vision-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Institute Vision</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!--end:Institue Vision-->

      <!--start:Quality Policy-->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold">Quality Policy</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <!--end: Quality Policy -->

      <!-- start: submit button -->
      <div class="d-flex justify-content-end mt-3">
        <button type="submit" class="btn btn-info fw-bold">Submit</button>
      </div>
      <!-- end: submit button -->
    </form>
  </section>
</template>

<script>
export default {
  name: 'CollegeFields',

  data() {
    return {
      Types: '',
      availCollegeType: [
        'University',
        'Autonomous College',
        'Affiliated UG College',
        'Affiliated PG College',
        'Teacher Education College',
      ],
      availStates: '',
      availInstituteFor: ['Men', 'Women', 'Co-Education'],
      availLocation: ['Rural', 'Urban', 'Semi-Urban'],
      availFinancialTypes: [
        'Govt. Funded',
        'Self Financed',
        'Public Private Partnership(PPP)',
      ],
    }
  },

  mounted() {
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style scoped></style>
