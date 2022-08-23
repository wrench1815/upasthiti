// check if user is principalot
// if user is principal allow access
// if user is not principal redirect to dash if logged in else redirect to main site home
export default function ({ store, redirect }) {
  if (store.getters.loggedInUserRole != 'principal') {
    return store.getters.isAuthenticated ? redirect('/dash') : redirect('/')
  }
}
