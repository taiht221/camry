import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://client-pages.adnetwork.vn/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // Attach token to request if exists
    const accessToken = localStorage.getItem('access-token')
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    console.log(response)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    if (response.data.status === 'ok') {
      const snackbar = document.getElementById('snackbar')
      snackbar.style.background = 'green'
      snackbar.textContent = 'Chúc mừng bạn đã đăng kí thành công'
      snackbar.classList.add('show')
      setTimeout(() => (window.location.pathname = '/demo/Camry/thank-page.html'), 2000)
      localStorage.setItem('sucess', 'sucess')
    }

    if (response.data === 'phone') throw new Error('Số điện thoại đã được đăng kí')
    return response.data
  },
  function (error) {
    // Do something with response error
    // if (!error.response) throw new Error('Some thing went gone. Please try again!')

    // Unauthorize redirect to login
    if (error.response.status === 401) window.location.assign('/login.html')

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error)
  }
)

export default axiosClient
