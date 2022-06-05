import User from '@/api/user'

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    user: User(context.$axios),
  }

  // Inject $api
  inject('api', factories)
}
