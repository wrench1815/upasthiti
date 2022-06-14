import User from '@/api/user'
import College from '@/api/college'

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    user: User(context.$axios),
    college: College(context.$axios),
  }

  // Inject $api
  inject('api', factories)
}
