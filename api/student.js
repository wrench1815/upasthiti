export default (axios) => ({
  // get student list
  list: (payload = {}) => axios.get('student/', { params: payload }),

  // create student
  create: (student) => axios.post('student/', student),

  // retrieve student by id
  retrieve: (id) => axios.get(`student/${id}/`),

  // update student
  update: (id, student) => axios.patch(`student/${id}/`, student),

  // delete student
  destroy: (id) => axios.delete(`student/${id}/`),
})
