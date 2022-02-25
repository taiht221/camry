import axiosClient from './axiosClient'

const postApi = {
  add(data) {
    const url = '/control/API/Toyota_Camry_Feb2022.php'
    return axiosClient.post(url, data)
  },
}

export default postApi
