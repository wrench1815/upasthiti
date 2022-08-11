import Vue from 'vue'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  alpha,
  numeric,
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required.',
})

extend('email', {
  ...email,
  message: 'Email is not valid.',
})

extend('min', {
  ...min,
  message: 'This field must be at least {length} characters.',
})

extend('max', {
  ...max,
  message: 'This field must be at most {length} characters.',
})

extend('alpha', {
  ...alpha,
  message: 'This field must be alphabetic.',
})

extend('numeric', {
  ...numeric,
  message: 'This field must be numeric.',
})

// must have atleast 1 special character
extend('passwordSpecial', {
  validate: (value) => {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)
  },

  message: 'Password must contain atleast 1 special character.',
})

// must have atleast 1 number
extend('passwordNumber', {
  validate: (value) => {
    return /[0-9]/.test(value)
  },

  message: 'Password must contain atleast 1 number.',
})

// must have atleast 1 uppercase
extend('passwordUpper', {
  validate: (value) => {
    return /[A-Z]/.test(value)
  },

  message: 'Password must contain atleast 1 uppercase.',
})

// must have atleast 1 lowercase
extend('passwordLower', {
  validate: (value) => {
    return /[a-z]/.test(value)
  },

  message: 'Password must contain atleast 1 lowercase.',
})

// all letters must be capitalized
extend('capitalize', {
  validate: (value) => {
    return /^[A-Z\s]+$/.test(value)
  },
  message: 'This field must be all Capitalized.',
})

// all letters must be capitalized except numbers
extend('capitalizeOrNum', {
  validate: (value) => {
    return /^[A-Z0-9\s]+$/.test(value)
  },
  message: 'This field must be all Capitalized and can have numbers only.',
})

// must be a phone number with allowed symbol +
extend('phone', {
  validate: (value) => {
    return /^[0-9+]+$/.test(value)
  },
  message: 'This field must be a Phone Number.',
})

// must be a url and start with either http://, https:// or www.
extend('url', {
  validate: (value) => {
    return /^(http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(
      value
    )
  },
  message: 'This field must be a URL.',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
