// return true fullPath includes '/dash'
export default function ({ route }) {
  if (route.fullPath.includes('/dash')) {
    return true
  }
  return false
}
