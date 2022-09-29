<template>
  <div class="container-fluid my-4">
    <div class="card">
      <!-- start:Profile Header -->
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block text-uppercase">
          Profile
        </h1>
        <h5 class="text-secondary">Profile Details</h5>
      </div>
      <!-- end:Profile Header -->

      <!-- start:Profile Body -->
      <div class="card-body m-md-2">
        <!-- Tabs navs -->
        <ul
          class="nav nav-tabs mb-3 justify-content-center justify-content-sm-start"
        >
          <li class="nav-item" role="presentation" @click="tab = 'view'">
            <div
              class="nav-link fs-6 d-flex pointer-default"
              :class="{ active: tab == 'view' }"
            >
              <i class="ri-eye-fill me-2 s-3"></i
              ><span class="d-none d-sm-block">View</span>
            </div>
          </li>
          <li class="nav-item" role="presentation" @click="tab = 'edit'">
            <div
              class="nav-link fs-6 d-flex pointer-default"
              :class="{ active: tab == 'edit' }"
            >
              <i class="ri-pencil-fill me-2"></i
              ><span class="d-none d-sm-block">Edit</span>
            </div>
          </li>
        </ul>
        <!-- Tabs navs -->

        <!-- Tabs content -->
        <div class="tab-content mt-4 mx-md-3" id="profileTabs-content">
          <transition-group name="fade-y" mode="out-in">
            <!-- start:View Tab -->
            <div
              class="tab-pane fade"
              :class="{ 'show active': tab == 'view' }"
              :key="tab"
            >
              <DashProfileView v-if="tab == 'view'" />
            </div>
            <!-- end:View Tab -->

            <!-- start:Edit Tab -->
            <div
              class="tab-pane fade"
              :class="{ 'show active': tab == 'edit' }"
              key="tab"
            >
              <DashProfileEdit
                @profileUpdated="
                  () => {
                    tab = 'view'
                  }
                "
                v-if="tab == 'edit'"
              />
            </div>
            <!-- end:Edit Tab -->
          </transition-group>
        </div>

        <!-- Tabs content -->
      </div>
      <!-- end:Profile Body -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelProfile',
  layout: 'panel',

  data() {
    return {
      tab: 'view',
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'Profile',
        url: '/panel/profile',
      },
    ])
  },
}
</script>

<style></style>
