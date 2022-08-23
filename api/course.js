export default (axios) => ({
  // get course list
  list: (payload = {}) => axios.get('/course/', { params: payload }),

  // create course
  create: (course) => axios.post('/course/', course),

  // retrieve course by id
  retrieve: (id) => axios.get(`/course/${id}/`),

  // update course
  update: (id, course) => axios.patch(`/course/${id}/`, course),

  // delete course
  destroy: (id) => axios.delete(`/course/${id}/`),
})
