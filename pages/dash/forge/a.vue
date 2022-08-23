<template>
  <section class="container-fluid my-4">
    <!-- start:Intro -->
    <transition name="fade-y" mode="out-in">
      <div class="card" v-if="!steps.zero">
        <!-- heading -->
        <h3 class="card-header">Explain the function of this Item</h3>

        <div class="card-body">
          <div class="d-flex justify-content-center">
            <!-- start button -->
            <button class="btn btn-primary" @click="steps.zero = true">
              Start
            </button>
          </div>
        </div>
      </div>
    </transition>
    <!-- end:Intro -->

    <!-- start:Principal Forging -->
    <transition name="fade-y" mode="out-in">
      <div class="card mt-4" v-if="steps.zero && !steps.principalForged">
        <ForgeUserAdd
          userRole="principal"
          @userForged="
            (data) => {
              principalForgeComplete(data)
            }
          "
        />
      </div>
    </transition>
    <!-- end:Principal Forging -->

    <!-- start:Forged Principal -->
    <transition name="fade-y" mode="out-in">
      <div class="card mt-4" v-if="steps.principalForged" id="forgedPrincipal">
        <h2 class="card-header text-primary">Principal Details</h2>
        <ForgeUserCard :user="forged.principal" />

        <div
          class="d-flex justify-content-center mb-4"
          v-if="btns.principalNext"
        >
          <button
            class="btn btn-primary btn-rounded"
            @click="
              () => {
                steps.one = true
                btns.principalNext = false
              }
            "
          >
            Next
          </button>
        </div>
      </div>
    </transition>
    <!-- end:Forged Principal -->

    <!-- start:College Forging -->
    <transition name="fade-y" mode="out-in">
      <div class="card mt-4" v-if="steps.one && !steps.collegeForged">
        <ForgeCollegeAdd
          :collegePrincipal="forged.principal"
          @collegeForged="
            (data) => {
              collegeForgeComplete(data)
            }
          "
        />
      </div>
    </transition>
    <!-- end:College Forging -->

    <!-- start:Forged College -->
    <transition name="fade-y" mode="out-in">
      <div class="card mt-4" v-if="steps.collegeForged" id="forgedCollege">
        <h2 class="card-header text-primary">College Details</h2>
        <ForgeCollegeCard :college="forged.college" />

        <div class="d-flex justify-content-center mb-4" v-if="btns.collegeNext">
          <button
            class="btn btn-primary btn-rounded"
            @click="
              () => {
                steps.two = true
                btns.collegeNext = false
              }
            "
          >
            Next
          </button>
        </div>
      </div>
    </transition>
    <!-- end:Forged College -->

    <!-- forge leftover -->
    <div class="card card-body mt-4">
      <h3>principal</h3>
      {{ forged.principal }}
      <hr />
      <h3>college</h3>
      {{ forged.college }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashForgeA',
  layout: 'dash',
  middleware: ['isAdmin'],

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Forge',
        url: '/dash/forge',
      },
      {
        name: 'a',
      },
    ])
  },

  data() {
    return {
      forged: {
        principal: {},
        college: {},
      },
      steps: {
        zero: false,
        principalForged: false,
        one: false,
        collegeForged: false,
        two: false,
      },
      btns: {
        principalNext: true,
        collegeNext: true,
      },
    }
  },

  methods: {
    async principalForgeComplete(data) {
      return this.assignPrincipal(data).then(() => {
        this.goto('forgedPrincipal')
      })
    },

    async assignPrincipal(data) {
      return new Promise((resolve, reject) => {
        this.forged.principal = data
        this.steps.principalForged = true

        resolve()
      })
    },

    async collegeForgeComplete(data) {
      return this.assignCollege(data).then(() => {
        this.goto('forgedCollege')
      })
    },

    async assignCollege(data) {
      return new Promise((resolve, reject) => {
        this.forged.college = data
        this.steps.collegeForged = true

        resolve()
      })
    },

    goto(el) {
      var element = document.getElementById(el)

      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, 1000)
    },
  },
}
</script>

<style></style>
