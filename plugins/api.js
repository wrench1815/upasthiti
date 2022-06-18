import User from '@/api/user'
import College from '@/api/college'
import Department from '~/api/department'

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    // user factory
    user: User(context.$axios),

    // college factory
    college: College(context.$axios),

    // department factory
    department: Department(context.$axios),
  }

  // Inject $api
  inject('api', factories)
}
