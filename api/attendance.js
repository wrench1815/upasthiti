export default (axios) => ({
  // get attendance list
  list: (payload = {}) => axios.get('/attendance/', { params: payload }),

  // create attendance
  create: (attendanceObject) => axios.post('/attendance/', attendanceObject),

  // retrieve attendance by id
  retrieve: (id) => axios.get(`/attendance/${id}/`),

  // update attendance
  update: (id, attendanceObject) =>
    axios.patch(`/attendance/${id}/`, attendanceObject),

  // delete attendance
  destroy: (id) => axios.delete(`/attendance/${id}/`),
})
