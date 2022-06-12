export default (axios) => ({
  // get user list
  list: () => axios.get('user/'),

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
  listAdmin: () => axios.get('user/admin/'),

  // get principal list
  listPrincipal: () => axios.get('user/principal/'),

  // get HOD list
  listHod: () => axios.get('user/hod/'),

  // get Teacher list
  listTeacher: () => axios.get('user/teacher/'),
})
