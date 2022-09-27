// check if user is teacher or not
// if user is teacher allow access
// if user is not teacher redirect to dash if logged in else redirect to main site home
export default function ({ store, redirect }) {
  if (store.getters.loggedInUserRole != 'teacher') {
    // return store.getters.isAuthenticated ? redirect('/dash') : redirect('/')
    return redirect('/')
  }
}
