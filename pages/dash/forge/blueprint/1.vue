<template>
  <section class="container-fluid my-4">
    <div class="card">
      <!-- heading -->
      <h3 class="card-header">Blueprint 1</h3>

      <div class="card-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
        laudantium? Voluptas quidem quas dolor provident. Voluptas dolores
        architecto asperiores cum placeat odit, dolorem error totam maiores
        neque sapiente nisi fugiat!
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashForgeBlueprint1',
  layout: 'dash',
  middleware: ['isAdmin'],

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Forge',
        url: '/dash/forge',
      },
      {
        name: 'Blueprint 1',
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
