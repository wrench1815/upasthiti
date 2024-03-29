import User from '@/api/user'
import College from '@/api/college'
import Department from '~/api/department'
import Image from '~/api/image'
import University from '~/api/university'
import Contact from '~/api/contact'
import Course from '~/api/course'
import Student from '~/api/student'
import Class from '~/api/class'
import Attendance from '~/api/attendance'

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

    // student factory
    student: Student(context.$axios),

    // course factory
    course: Course(context.$axios),

    // class factory
    class: Class(context.$axios),

    // attendance factory
    attendance: Attendance(context.$axios),
  }

  // Inject $api
  inject('api', factories)
}
