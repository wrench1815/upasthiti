export default (axios) => ({
  // upload image
  upload: (payload) => axios.post('/image-upload/', payload),
})
