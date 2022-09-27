// set isPanel true if fullPath starts with /panel
// return true if fullPath starts with '/panel'
export default function (context) {
  if (context.route.fullPath.startsWith('/panel')) {
    context.store.commit('setPanel', true)
    return true
  }
  context.store.commit('setPanel', false)
  return false
}
