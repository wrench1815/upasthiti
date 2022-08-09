<template>
  <section class="container my-4">
    <div class="mt-4 pt-4">
      <div class="text-center mb-4">
        <h2 class="text-uppercase text-primary fw-bold">Features</h2>
      </div>
      <!-- Code for small device -->
      <div class="row my-3 gx-4 gy-4 d-lg-none">
        <div class="col-md-6 col-sm-12 col-12">
          <Lazy-HomeFeatureCard
            headingColor="bg-danger"
            headingText="No Paperwork"
            paraText="Teachers don't have to mark attendance of students manually on a
        register and don't have to maintain the data on paper."
          />
        </div>
        <div class="col-md-6 col-sm-12 col-12 ">
          <Lazy-HomeFeatureCard
            headingColor="bg-danger"
            headingText="Generate Reports"
            paraText="Generate Weekly/Monthly/Sessional attendance reports like total
                classes and attended classes ratio and ability to export
                attendance data as spreadsheets."
          />
        </div>
        <div class="col-md-6 col-sm-12 col-12">
          <Lazy-HomeFeatureCard
            headingColor="bg-primary"
            headingText="No Fraud"
            paraText=" There is no chance of any kind of fraud by Students and Teachers
                to mark the proxy of any Student."
          />
        </div>
        <div class="col-md-6 col-sm-12 col-12">
          <Lazy-HomeFeatureCard
            headingColor="bg-primary"
            headingText="Track Daily Reports"
            paraText="  Students and Parents can track the attendance data of the day or
                any other day."
          />
        </div>
        <div class="col-md-6 col-sm-12 col-12 ">
          <Lazy-HomeFeatureCard
            headingColor="bg-danger"
            headingText="Fast and Effective"
            paraText="  It will make it easier and a bit faster to take attendance of
                students and it will also reduce the tedious task of creating
                various reports."
          />
        </div>
        <div class="col-md-6 col-sm-12 col-12">
          <Lazy-HomeFeatureCard
            headingColor="bg-danger"
            headingText="Maintain Data"
            paraText="   It makes easier to take attendance ,maintain and managing
                attendance data of Students."
          />
        </div>

        <div class="col-md-6 col-sm-12 col-12 mx-auto">
          <Lazy-HomeFeatureCard
            headingColor="bg-primary"
            headingText="DataBase"
            paraText="    The Data Generated data can used to create a Database of
                students that currently Study or have studied previously."
          />
        </div>
      </div>
      <!-- End of Code for small device -->

     <!-- Code for large device -->
      <div class="row my-3 d-none d-lg-flex">
        <div class="col-4">
          <Lazy-HomeFeatureCard
            headingColor="bg-danger"
            headingText="No Paperwork"
            paraText="Teachers don't have to mark attendance of students manually on a
        register and don't have to maintain the data on paper."
          />
        </div>
        <div class="col-4 mt-3">
          <Lazy-HomeFeatureCard
            headingColor="bg-primary"
            headingText="Generate Reports"
            paraText="Generate Weekly/Monthly/Sessional attendance reports like total
                classes and attended classes ratio and ability to export
                attendance data as spreadsheets."
          />
        </div>
        <div class="col-4">
          <Lazy-HomeFeatureCard
            headingColor="bg-danger"
            headingText="No Fraud"
            paraText=" There is no chance of any kind of fraud by Students and Teachers
                to mark the proxy of any Student."
          />
        </div>
        <div class="col-4">
          <Lazy-HomeFeatureCard
            headingColor="bg-danger"
            headingText="Track Daily Reports"
            paraText="  Students and Parents can track the attendance data of the day or
                any other day."
          />
        </div>
        <div class="col-4 mt-3">
          <Lazy-HomeFeatureCard
            headingColor="bg-primary"
            headingText="Fast and Effective"
            paraText="  It will make it easier and a bit faster to take attendance of
                students and it will also reduce the tedious task of creating
                various reports."
          />
        </div>
        <div class="col-4">
          <Lazy-HomeFeatureCard
            headingColor="bg-danger"
            headingText="Maintain Data"
            paraText="   It makes easier to take attendance ,maintain and managing
                attendance data of Students."
          />
        </div>

        <div class="col-4 mt-3 mx-auto">
          <Lazy-HomeFeatureCard
            headingColor="bg-primary"
            headingText="DataBase"
            paraText="    The Data Generated data can used to create a Database of
                students that currently Study or have studied previously."
          />
        </div>
      </div>
      <!-- End of Code for large device -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeFeature',
}
</script>

<style></style>
