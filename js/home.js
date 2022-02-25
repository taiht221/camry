import '../scss/pages/home.scss'
import { initGrand, jsonFormData, registerForm } from './utils'
import postApi from './api/postApi'

function removeActive(buttonList) {
  if (!buttonList) return
  const buttonListElement = buttonList.querySelectorAll('.buttonListElement')
  buttonListElement.forEach((buttonListElement) => {
    buttonListElement.classList.remove('active')
  })
}

function initPickColor() {
  const buttonList = document.querySelectorAll('.buttonList')

  if (!buttonList) return

  buttonList.forEach((buttonList) => {
    const buttonListElement = buttonList.querySelectorAll('.buttonListElement')

    buttonListElement.forEach((buttonListElement) => {
      buttonListElement.addEventListener('click', () => {
        removeActive(buttonListElement.parentNode)

        buttonListElement.classList.add('active')

        buttonList.parentElement.parentElement.firstElementChild.setAttribute(
          'src',
          buttonListElement.dataset.src
        )
      })
    })
  })
}

async function handlePostFormSubmit(formValues) {
  const { car_location, title, fullname, phone, email, planning } = formValues
  const newValues = {
    phone,
    name: fullname,
    email,
    city: car_location,
    agency: title,
    plan: planning,
    source: window.location.href,
  }
  const formData = jsonFormData(newValues)

  try {
    // check  add or edit - call APi - show toast successs -redirect to detail page
    // if formValues have id key ==> Edit Page
    await postApi.add(formData)
    // setTimeout(() => window.location.assign(`/post-details.html?id=${apiValues.id}`), 2000)
  } catch (error) {
    const snackbar = document.getElementById('snackbar')
    snackbar.style.background = 'red'
    snackbar.textContent = error.message
    snackbar.classList.add('show')
    setTimeout(() => {
      snackbar.classList.remove('show')
    }, 3000)
    // toast.error(`Error: ${error.message}`)
  }
}

;(async () => {
  const form = document.getElementById('form-content')
  const form2 = document.getElementById('form-content2')
  if (!form || !form2) return

  try {
    let defaultValues = {
      car_location: '',
      title: '',
      fullname: '',
      phone: '',
      email: '',
      planning: '',
    }
    registerForm({
      formId: 'form-content',
      defaultValues,
      onSubmit: (formValues) => handlePostFormSubmit(formValues),
    })
    registerForm({
      formId: 'form-content2',
      defaultValues,
      onSubmit: (formValues) => handlePostFormSubmit(formValues),
    })
    initPickColor()
    initGrand(form)
    initGrand(form2)
  } catch (error) {
    console.log('get all fail', error)
  }
})()
