<template>
  <section class="container">
    <form action="" class="card card-body">
      <!-- start:Institute Name -->
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label"
            >Institute name
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
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
          <label class="form-label"
            >Address
            <i class="ri-asterisk ri-sm text-danger"></i>
          </label>
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
          <label class="form-label"
            >Principal
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >College Logo
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Website
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Institute Type
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Affiliating University
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Institute Alias Name
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >Mobile
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >Alternate Contact
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >Email
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >Alternate Email
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >State
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >City
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >Pincode
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Running From Own Campus
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Institute For
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Location Type
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Financial Model
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Campus Area (In Acres)
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Built-Up Area(In sq. mts.)
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Minority Instituition
            <i class="ri-asterisk text-danger"></i>
          </label>
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
          <label class="form-label"
            >Recognised By UGC As College With potential For Excellence
            <i class="ri-asterisk text-danger"></i
          ></label>
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
          <label class="form-label"
            >Recognised Under Section 12B Of UGC <i class="ri- text-danger"></i
          ></label>
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
          <label class="form-label"
            >Any Other Recognition By Govt. Agency
            <i class="ri- text-danger"></i
          ></label>
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
          <label class="form-label"
            >NAAC Accredited
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >Institue Mission
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >Institute Vision
            <i class="ri- text-danger"></i>
          </label>
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
          <label class="form-label"
            >Quality Policy
            <i class="ri- text-danger"></i>
          </label>
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
        <button type="submit" class="btn btn-info">Submit</button>
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
      availStates: ['Delhi', 'Jammu and Kashmir'],
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
