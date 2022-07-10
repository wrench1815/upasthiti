export default (axios) => ({
  // get user list
  list: (payload = {}) => axios.get('user/', { params: payload }),
  // create user
  create: (user) => axios.post('user/', user),

  // retrieve user by id
  retrieve: (id) => axios.get(`user/${id}/`),

  // update user
  update: (id, user) => axios.patch(`user/${id}/`, user),

  // delete user
  destroy: (id) => axios.delete(`user/${id}/`),

  // update password
  updatePassword: (id, payload) =>
    axios.post(`user/update_password/${id}/`, payload),

  // get admin list
  listAdmin: (payload = {}) => axios.get('user/admin/', { params: payload }),

  // get principal list
  listPrincipal: (payload = {}) =>
    axios.get('user/principal/', { params: payload }),

  // get HOD list
  listHod: (payload = {}) => axios.get('user/hod/', { params: payload }),

  // get Teacher list
  listTeacher: (payload = {}) =>
    axios.get('user/teacher/', { params: payload }),
})
