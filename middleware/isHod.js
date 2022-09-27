// check if user is HOD or not
// if user is HOD allow access
// if user is not HOD redirect to dash if logged in else redirect to main site home
export default function ({ store, redirect }) {
  if (store.getters.loggedInUserRole != 'hod') {
    // return store.getters.isAuthenticated ? redirect('/dash') : redirect('/')
    return redirect('/')
  }
}
