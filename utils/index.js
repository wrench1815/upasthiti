export default () => ({
  // return strf time
  dateFormat: (date) => $nuxt.$moment(date).format('Do MMMM YYYY, h:mm:ss a'),
})
