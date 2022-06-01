<template>
  <section class="container">
    <form action="">
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText"
            >Institute name</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText">Address</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeNumber">Principal</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" id="typeNumber" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="customFile"
            >College Logo</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="file" class="form-control" id="customFile" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText">Website</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText"
            >Institute Type</label
          >
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availCollegeType"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText"
            >Affiliating University</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText"
            >Institute Alias Name</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typePhone">Mobile</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="tel" id="typePhone" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typePhone"
            >Alternate Contact</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="tel" id="typePhone" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeEmail">Email</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="email" id="typeEmail" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeEmail"
            >Alternate Email</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="email" id="typeEmail" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText">State</label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availStates"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText">City</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeNumber">Pincode</label>
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" id="typeNumber" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-check-label fw-bold" for="flexCheckDefault"
            >Running From Own Campus</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText">Institute For</label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availInstituteFor"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText">Location Type</label>
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availLocation"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText"
            >Financial Model</label
          >
        </div>
        <div class="col-6">
          <v-select
            placeholder="Choose.."
            :options="availFinancialTypes"
            v-model="Types"
          ></v-select>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeNumber"
            >Campus Area (In Acres)</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" id="typeNumber" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeNumber"
            >Built-Up Area(In sq. mts.)</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="number" id="typeNumber" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-check-label fw-bold" for="flexCheckDefault"
            >Minority Instituition</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-check-label fw-bold" for="flexCheckDefault"
            >Recognised By UGC As College With potential For Excellence</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-check-label fw-bold" for="flexCheckDefault"
            >Recognised Under Section 12B Of UGC</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-check-label fw-bold" for="flexCheckDefault"
            >Any Other Recognition By Govt. Agency</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-check-label fw-bold" for="flexCheckDefault"
            >NAAC Accredited</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText"
            >Institue Mission</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText"
            >Institute Vision</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <label class="form-label fw-bold" for="typeText"
            >Quality Policy</label
          >
        </div>
        <div class="col-6">
          <div class="form-outline">
            <input type="text" id="typeText" class="form-control" />
          </div>
        </div>
      </div>
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
