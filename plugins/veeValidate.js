import Vue from 'vue'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email, min, max, alpha } from 'vee-validate/dist/rules'

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

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
