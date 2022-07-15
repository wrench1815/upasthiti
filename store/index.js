export const state = () => ({
  role: '',
  isDash: false,
})

// getters
export const getters = {
  // return if any user is logged in
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  // return the logged in user data
  loggedInUser(state) {
    if (state.auth.loggedIn) {
      return state.auth.user
    } else {
      return null
    }
  },

  // return the logged in user role
  loggedInUserRole(state) {
    if (state.auth.loggedIn) {
      if (state.auth.user.is_admin) return 'admin'
      else if (state.auth.user.is_principal) return 'principal'
      else if (state.auth.user.is_teacher) return 'teacher'
      else if (state.auth.user.is_hod) return 'hod'
      else return null
    } else {
      return null
    }
  },
}

// mutations
export const mutations = {
  setDash(state, isDash) {
    state.isDash = isDash
  },
}
