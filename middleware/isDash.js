// set isDash true if fullPath starts with /dash
// return true if fullPath starts with '/dash'
export default function (context) {
  if (context.route.fullPath.startsWith('/dash')) {
    context.store.commit('setDash', true)
    return true
  }
  context.store.commit('setDash', false)
  return false
}
