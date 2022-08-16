export default (axios) => ({
  // get Contact List
  list: (payload = {}) => axios.get('contact/', { params: payload }),

  // create Contact
  create: (contact) => axios.post('contact/add/', contact),
})
