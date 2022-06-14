export default (axios) => ({
  // get college list
  list: () => axios.get('/college/'),

  // create college
  create: (college) => axios.post('/college/', college),

  // retrieve college by id
  retrieve: (id) => axios.get(`/college/${id}/`),

  // update college
  update: (id, college) => axios.patch(`/college/${id}/`, college),

  // delete college
  destroy: (id) => axios.delete(`/college/${id}/`),
})
