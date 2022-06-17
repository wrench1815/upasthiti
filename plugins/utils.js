import utils from '@/utils/index'

export default (context, inject) => {
  inject('utils', utils())
}
