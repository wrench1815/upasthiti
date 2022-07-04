export default () => ({
  // return strf time
  dateFormat: (date) => $nuxt.$moment(date).format('Do MMMM YYYY, h:mm:ss a'),

  // returns Bootstrap breakpoint
  getBsBp: () => {
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    if (w >= 1400) {
      return 'xxl'
    } else if (w >= 1200) {
      return 'xl'
    } else if (w >= 992) {
      return 'lg'
    } else if (w >= 768) {
      return 'md'
    } else if (w >= 576) {
      return 'sm'
    } else {
      return 'xs'
    }
  },
})
