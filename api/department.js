export default (axios) => ({
  // get department list
  list: (payload = {}) => axios.get('/department/', { params: payload }),

  // create department
  create: (department) => axios.post('/department/', department),

  // retrieve department by id
  retrieve: (id) => axios.get(`/department/${id}/`),

  // update department
  update: (id, department) => axios.patch(`/department/${id}/`, department),

  // delete department
  destroy: (id) => axios.delete(`/department/${id}/`),

  // list department types
  typeList: (payload = {}) =>
    axios.get('/department-type/', { params: payload }),

  // create department type
  typeCreate: (depType) => axios.post('/department-type/', depType),

  // retrieve department type by id
  typeRetrieve: (id) => axios.get(`/department-type/${id}/`),

  // update department type
  typeUpdate: (id, depType) => axios.patch(`/department-type/${id}/`, depType),

  // delete department type
  typeDestroy: (id) => axios.delete(`/department-type/${id}/`),
})
