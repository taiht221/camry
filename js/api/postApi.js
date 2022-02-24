import axiosClient from './axiosClient'

const postApi = {
  add(data) {
    const url = '/control/API/Toyota_Camry_Feb2022.php'
    return axiosClient.post(url, data)
  },

  // addFormData(data) {
  //   const url = `/with-thumbnail/posts`
  //   return axiosClient.post(url, data, {
  //     headers: { 'Content-Type': 'multipart/form-data' },
  //   })
  // },

  // updateFormData(data) {
  //   const url = `/with-thumbnail/posts/${data.get('id')}`
  //   return axiosClient.patch(url, data, {
  //     headers: { 'Content-Type': 'multipart/form-data' },
  //   })
  // },
}

export default postApi
