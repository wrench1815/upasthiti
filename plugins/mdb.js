import * as mdb from 'mdb-ui-kit'

import '~/assets/scss/style-kit.scss'

export default ({ app }, inject) => {
  inject('mdb', mdb)
}
