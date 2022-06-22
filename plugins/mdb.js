// https://mdbootstrap.com/docs/standard/
import * as mdb from 'mdb-ui-kit'

import '~/assets/scss/style-kit.scss'

import '~/assets/css/styles.css'
import '~/assets/css/overides.css'
import '~/assets/css/vselect.css'

export default ({ app }, inject) => {
  inject('mdb', mdb)
}
