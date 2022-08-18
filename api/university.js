export default (axios) => ({
  // get university list
  list: (payload = {}) => axios.get('university/', { params: payload }),

  // create university
  create: (university) => axios.post('university/', university),

  // retrieve university by id
  retrieve: (id) => axios.get(`university/${id}/`),

  // update university
  update: (id, university) => axios.patch(`university/${id}/`, university),

  // delete university
  destroy: (id) => axios.delete(`university/${id}/`),
})
