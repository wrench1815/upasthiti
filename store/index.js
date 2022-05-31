export const state = () => ({})

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
}
