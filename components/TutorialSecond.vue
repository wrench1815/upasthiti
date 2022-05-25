<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-5 col-lg-4">
        <div class="vh-25">
          <v-select
            placeholder="Select Number"
            :options="availCountingNums"
            v-model="countingNum"
          ></v-select>
          <p>selected number: {{ countingNum }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorialSecond',

  data() {
    return {
      countingNum: '',
      availCountingNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
}
</script>

<style></style>
