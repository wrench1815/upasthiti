<template>
  <section class="container my-4 card">
    <div class="my-4">
      <div class="text-center my-4">
        <h2 class="fw-bold text-primary">Our Mission</h2>
        <div class="mx-auto w-sm-75 w-md-5 mt-3 blockquote">
          <p class="d-flex">
            <span class="d-flex flex-column align-items-center">
              <i
                class="ri-double-quotes-l text-primary fw-bolder fs-1 align-self-baseline mt-n3"
              ></i>
              <span
                class="border-start border-5 me-2 me-sm-0 border-primary h-100 mt-n2"
              ></span>
            </span>
            Replace Pen-Paper system of Attendance marking with a Better, a
            Modern, a Digitized system. And use the Data generated to analyze
            various aspects of Student's Performance.
            <span class="d-flex flex-column align-items-center">
              <span
                class="border-start border-5 ms-2 ms-sm-0 border-primary h-100 mb-n2"
              ></span>
              <i
                class="ri-double-quotes-r text-primary fw-bolder fs-1 align-self-end mb-n3"
              ></i>
            </span>
          </p>
        </div>
        <img
          data-src="~/assets/svg/aboutpage.svg"
          class="img-fluid p-sm-2 p-md-2 p-xl-5"
          alt="aboutpage image"
          v-lazy-load
        />
      </div>
      <div class="row my-4">
        <div class="col-md-4 col-12">
          <h3
            class="text-primary fw-bold d-flex justify-content-center align-items-center h-100"
          >
            <!-- start:question mark 1 -->
            <span class="d-flex justify-content-start h-100">
              <span class="opacity-50"
                ><i
                  class="ri-question-mark question-size question-1 text-info"
                ></i
              ></span>
            </span>
            <!-- end:question mark 1 -->

            <span class="vertical-text text-uppercase text-shadow">
              What?
            </span>

            <!-- start:question mark 2 -->
            <span class="d-flex justify-content-end h-25">
              <span class="opacity-50"
                ><i
                  class="ri-question-mark question-size question-2 text-warning"
                ></i
              ></span>
            </span>
            <!-- end:question mark 2 -->

            <!-- start:question mark 3 -->
            <span class="d-flex justify-content-start">
              <span class="opacity-50"
                ><i
                  class="ri-question-mark question-size question-3 text-danger"
                ></i
              ></span>
            </span>
            <!-- end:question mark 3 -->
          </h3>
        </div>
        <div class="col">
          <div class="mt-3 text-center text-md-start">
            <p>
              Upasthiti is an Attendance Management and Analytics Web
              Application that will come with a Companion Android App used for
              taking Attendance. This project aims at solving the problem of
              maintaining and managing Attendance of Students. And generate
              useful data insights out of it. This will benefit not only
              Teachers and Students but also the Institute Administration, State
              Level Administration and Parents as well.
            </p>
            <p>
              This will help maintain Data of Students such as Institute
              Affiliation, Geographical Migration and other Insights like Ratio
              of Classes Attended, Monthly/Weekly/Session Attendance Data.
            </p>
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-4 col-12">
          <h3
            class="text-primary fw-bold d-flex justify-content-center align-items-center h-100"
          >
            <!-- start:question mark 1 -->
            <span class="d-flex justify-content-start h-100">
              <span class="opacity-50"
                ><i
                  class="ri-question-mark question-size question-1 text-primary"
                ></i
              ></span>
            </span>
            <!-- end:question mark 1 -->

            <span class="vertical-text text-uppercase text-shadow"> Why? </span>

            <!-- start:question mark 2 -->
            <span class="d-flex justify-content-end h-25">
              <span class="opacity-50"
                ><i
                  class="ri-question-mark question-size question-2 text-danger"
                ></i
              ></span>
            </span>
            <!-- end:question mark 2 -->

            <!-- start:question mark 3 -->
            <span class="d-flex justify-content-start">
              <span class="opacity-50"
                ><i
                  class="ri-question-mark question-size question-3 text-success"
                ></i
              ></span>
            </span>
            <!-- end:question mark 3 -->
          </h3>
        </div>
        <div class="col">
          <div class="mt-3 text-center text-md-start">
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Harum obcaecati consequuntur consectetur autem eius
              explicabo dolore numquam ducimus quae! Et, earum atque! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              officia numquam expedita corporis!
            </p>
            <p>
              Dolorum veniam, voluptatum deserunt, nam vero repellendus nobis
              quas eaque ipsum non quibusdam possimus vitae necessitatibus rerum
              dol Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam, rem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Harum obcaecati consequuntur consectetur autem eius
              explicabo dolore numquam ducimus quae! Et, earum atque! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              officia numquam expedita .
            </p>
          </div>
        </div>
      </div>
      <div class="my-4">
        <h3 class="text-center text-primary fw-bold">Meet our Developer</h3>
        <div class="row g-3">
          <div class="col-lg-4 col-md-6 col-12">
            <Lazy-AboutDevCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              name="Ridhima Jain"
              role="Frontend Developer"
              email="ridhimajain862@gmail.com"
              githubUsername="Ridhima10"
              githubName="Ridhima10"
              linkedinUsername="ridhima-jain-96829a212"
              linkedinName="Ridhima Jain"
            />
          </div>

          <div class="col-lg-4 col-md-6 col-12">
            <Lazy-AboutDevCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              name="Hardeep Kumar"
              role="Backend Developer"
              email="hardeepkumar1815@gmail.com"
              githubUsername="wrench1815"
              githubName="wrench1815"
              linkedinUsername="hardeep-kumar1815"
              linkedinName="Hardeep Kumar"
            />
          </div>

          <div class="col-lg-4 col-md-6 col-12 mx-auto">
            <Lazy-AboutDevCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              name="Isha Gupta"
              role="Frontend Developer"
              email="ishagupta1021@gmail.com"
              githubUsername="ishagupta2110"
              githubName="ishagupta2110"
              linkedinUsername="isha-gupta-188843214"
              linkedinName="Isha Gupta"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
@media (min-width: 768px) {
  .vertical-text {
    writing-mode: vertical-lr;
    text-orientation: upright;
  }

  .text-shadow {
    text-shadow: 4px 4px 2px rgb(0 0 0 / 15%);
  }

  .question-size {
    font-size: 5rem !important;
  }

  .question-1 {
    position: absolute;
    rotate: 326deg;
    left: 5%;
  }

  .question-2 {
    position: absolute;
    rotate: 32deg;
  }

  .question-3 {
    position: absolute;
    rotate: 159deg;
    left: 2%;
    height: 8%;
  }
}
</style>
