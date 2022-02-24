import '../scss/pages/thank-page.scss'

if (localStorage.getItem('sucess') === 'sucess') {
  setTimeout(function () {
    window.location.replace('https://www.toyota.com.vn/danh-sach-xe')
  }, 5000)

  let timeLeft = 5

  function countdown() {
    timeLeft--
    document.getElementById('seconds').textContent = String(timeLeft)
    if (timeLeft > 0) {
      setTimeout(countdown, 1000)
    }
  }

  setTimeout(countdown, 1000)
  document.getElementById('snackbar').classList.add('show')
  localStorage.removeItem('sucess')
} else {
  window.location.pathname = '/'
}
