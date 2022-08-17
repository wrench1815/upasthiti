<template>
  <div class="container-fluid my-4">
    <div class="card">
      <div class="card-header">
        <h1 class="text-gradient text-primary d-inline-block">Users</h1>
        <h3 class="text-secondary text-capitalize">lists all Registerd User</h3>
      </div>
      <div class="card-body">
        <!-- start:filters and search -->
        <section
          class="d-flex align-items-center justify-content-center flex-wrap"
        >
          <!-- start:Search -->
          <div class="me-auto mb-3">
            <div
              class="btn btn-floating bg-gradient-primary text-white btn-s d-flex justify-content-center align-items-center"
            >
              <i class="ri-search-line ri-lg"></i>
            </div>
          </div>
          <!-- end:Search -->

          <!-- start:Role Filter -->
          <div class="w-10-rem mb-3">
            <v-select
              placeholder="Select Filter"
              :options="userFilters"
              v-model="selectedUserFilter"
              :clearable="false"
              @option:selected="filterUser"
            >
              <!-- selected -->
              <template #selected-option="{ label }">
                <div
                  class="d-flex justify-content-start align-items-center gap-1"
                >
                  <i
                    class="text-primary text-gradient ri-filter-line mt-n1"
                  ></i>
                  <span>{{ label }}</span>
                </div>
              </template>
            </v-select>
          </div>
          <!-- end:Role Filter -->
        </section>
        <!-- end:filters and search -->

        <transition name="scale-in" mode="out-in">
          <Lazy-LoadersTable v-if="loading" />

          <Lazy-DashUserTable
            v-else
            :users.sync="users.results"
            :defaultProfileImage="defaultProfileImage"
          />
        </transition>

        <transition name="scale-in" mode="out-in">
          <Lazy-UtilsPagination
            class="mt-4"
            v-if="!loading"
            :pagination.sync="users.pagination"
            @prevPage="onPaginated"
            @nextPage="onPaginated"
          />
        </transition>

        <div class="d-flex justify-content-end mt-3">
          <transition name="scale-in" mode="out-in">
            <Lazy-LoadersButton v-if="loading" :rounded="true" />

            <Lazy-UtilsLinkButton
              v-if="!loading"
              :rounded="true"
              :link="'/dash/user/add'"
              >Add new User</Lazy-UtilsLinkButton
            >
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashUserIndex',
  layout: 'dash',

  watch: {
    '$route.query'() {
      this.payloadWatch()
      this.refreshUsers()
    },
  },

  data() {
    return {
      payload: {},
      users: [],
      defaultProfileImage: '',
      loading: true,
      error: true,
      userFilters: ['All', 'Admin', 'Principal', 'HOD', 'Teacher'],
      selectedUserFilter: 'All',
    }
  },

  created() {
    this.$store.commit('breadCrumbs/addBreadCrumb', [
      {
        name: 'User',
        url: '/dash/user',
      },
    ])
  },

  methods: {
    // fetches list of users from API
    // fetches all users initially
    // if filter is selected, fetches list of user per filter
    // has ability to refetch in case of error or gives option to go to Dash home
    async getUsers() {
      this.loading = true
      let requestUrl

      // set user to fetch as per filter
      if (this.selectedUserFilter === 'All') {
        requestUrl = this.$api.user.list(this.payload)
      } else if (this.selectedUserFilter === 'Admin') {
        requestUrl = this.$api.user.listAdmin(this.payload)
      } else if (this.selectedUserFilter === 'Principal') {
        requestUrl = this.$api.user.listPrincipal(this.payload)
      } else if (this.selectedUserFilter === 'HOD') {
        requestUrl = this.$api.user.listHod(this.payload)
      } else if (this.selectedUserFilter === 'Teacher') {
        requestUrl = this.$api.user.listTeacher(this.payload)
      }

      await requestUrl
        .then((response) => {
          this.users = response.data
          this.error = false
        })
        .catch((error) => {
          if (error.response.status == 404) {
            this.error = true
            this.users = []

            this.$nuxt.error({
              statusCode: 404,
              message: 'Page not Found',
            })
          } else {
            this.$nuxt.error({
              statusCode: 400,
              message: 'Something went Wrong',
            })
          }
        })
    },

    // refreshes list of users in case error
    refreshUsers() {
      this.loading = true
      this.getUsers().then(() => (this.loading = false))
    },

    // set default profile image on mounted
    // env variables can only i read after mounted
    async setDefaults() {
      return new Promise((resolve, reject) => {
        this.defaultProfileImage = this.$config.defaultUserImage
        this.payload.page = this.$route.query.page
        resolve()
      })
    },

    // on paginated
    onPaginated(pageNum) {
      this.payload.page = pageNum

      this.$router.push({
        path: this.$route.path,
        query: {
          page: pageNum,
        },
      })
    },

    // on filter
    filterUser() {
      this.payload = {}
      this.$router.push({
        path: this.$route.path,
      })
      this.refreshUsers()
    },

    // watcher for route query
    payloadWatch() {
      if (this.$route.query.page) {
        this.payload.page = this.$route.query.page
      } else {
        this.payload.page = '1'
      }
    },
  },

  mounted() {
    this.setDefaults().then(() => {
      this.getUsers().then(() => {
        if (!this.error) {
          this.loading = false
        }
      })
    })
  },
}
</script>

<style scoped></style>
