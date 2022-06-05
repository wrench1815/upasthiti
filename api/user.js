export default (axios) => ({
  // get user list
  list: () => axios.get('user/'),

  // create user
  create: (user) => axios.post('user/', user),

  // retrieve user by id
  retrieve: (id) => axios.get(`user/${id}/`),

  // update user
  update: (id, user) => axios.put(`user/${id}/`, user),

  // delete user
  destroy: (id) => axios.delete(`user/${id}/`),

  // update password
  updatePassword: (id, payload) =>
    axios.post(`user/update_password/${id}/`, payload),
})
