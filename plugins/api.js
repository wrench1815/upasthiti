import User from '@/api/user'
import College from '@/api/college'
import Department from '~/api/department'
import Image from '~/api/image'
import University from '~/api/university'
import Contact from '~/api/contact'
import Course from '~/api/course'
import Student from '~/api/student'

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

    // university factory
    university: University(context.$axios),

    // contact factory
    contact: Contact(context.$axios),

<<<<<<< HEAD
    // student factory
    student: Student(context.$axios),
=======
    // course factory
    course: Course(context.$axios),
>>>>>>> dev
  }

  // Inject $api
  inject('api', factories)
}
