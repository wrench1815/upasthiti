export default (axios) => ({
  // get class list
  list: (payload = {}) => axios.get('/class/', { params: payload }),

  // create class
  create: (classObject) => axios.post('/class/', classObject),

  // retrieve class by id
  retrieve: (id) => axios.get(`/class/${id}/`),

  // update class
  update: (id, classObject) => axios.patch(`/class/${id}/`, classObject),

  // delete class
  destroy: (id) => axios.delete(`/class/${id}/`),
})
