import User from '@/api/user'
import College from '@/api/college'
import Department from '~/api/department'
import Image from '~/api/image'

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    // user factory
    user: User(context.$axios),

    // college factory
    college: College(context.$axios),

    // department factory
    department: Department(context.$axios),

    // image factory
    image: Image(context.$axios),
  }

  // Inject $api
  inject('api', factories)
}
