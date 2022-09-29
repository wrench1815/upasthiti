// check if user is admin or not
// if user is admin allow access
// if user is not admin redirect to dash if logged in else redirect to main site home
export default function ({ store, redirect }) {
  if (store.getters.loggedInUserRole != 'admin') {
    // return store.getters.isAuthenticated ? redirect('/dash') : redirect('/')
    return redirect('/')
  }
}
