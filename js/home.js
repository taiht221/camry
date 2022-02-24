// import postApi from './api/postApi'
// import {
//   initModal,
//   initPagination,
//   initSearch,
//   renderPagination,
//   renderPostList,
//   toast,
// } from './utils'
// import { initLoader } from './utils/load'
import '../scss/pages/home.scss'
import { initGrand, registerForm } from './utils'
import postApi from './api/postApi'
// async function handleFilterChange(filterName, filterValue) {
//   try {
//     //update query params
//     const url = new URL(window.location)
//     if (filterName) url.searchParams.set(filterName, filterValue)

//     // reset page if page = 3 and item in page 1
//     if (filterName === 'title_like') url.searchParams.set('_page', 1)
//     history.pushState({}, '', url)

//     //fetch Api

//     //re-render Post List
//     const { data, pagination } = await postApi.getAll(url.searchParams)

//     renderPagination('Pagination', pagination)
//     renderPostList('postList', data)
//   } catch (error) {
//     console.log('failed to fetch post list', error)
//   }
// }

// function registerPostDeleteEvent() {
//   document.addEventListener('post-delete', async (e) => {
//     //get post-id form custom event ->getID-> delete by ID
//     try {
//       initModal({
//         modalId: 'Modal',
//         postElement: e,
//         onChange: async () => {
//           const post = e.detail

//           await postApi.delete(post.id)
//           await handleFilterChange()
//           toast.success('Your post is delete')
//         },
//       })
//     } catch (error) {
//       toast.error(error.message)
//     }
//   })
// }

// ;(async () => {
//   try {
//     initLoader()

//     const url = new URL(window.location)

//     // set default params for url
//     if (!url.searchParams.get('_page')) url.searchParams.set('_page', 1)
//     if (!url.searchParams.get('_limit')) url.searchParams.set('_limit', 6)

//     history.pushState({}, '', url)
//     const params = url.searchParams

//     registerPostDeleteEvent()

//     initPagination({
//       elementId: 'Pagination',
//       defaultParams: params,
//       onChange: (page) => handleFilterChange('_page', page),
//     })

//     initSearch({
//       elementId: 'searchInput',
//       defaultParams: params,
//       onChange: (value) => handleFilterChange('title_like', value),
//     })

//     const { data, pagination } = await postApi.getAll(params)
//     renderPostList('postList', data)
//     renderPagination('Pagination', pagination)
//   } catch (error) {
//     console.log('get all fail', error)
//   }
// })()
function initPickColor() {
  const buttonList = document.querySelector('#buttonList')
  let imgUrl = document.querySelector('.pick-color').firstElementChild
  const buttonListElement = buttonList.querySelectorAll('.buttonListElement')

  buttonListElement.forEach((e, i) => {
    e.addEventListener('click', () => {
      //   console.log(e.classList)

      buttonListElement.forEach((event, i) => {
        event.classList.remove('active')
      })
      e.classList.add('active')
      imgUrl.setAttribute('src', e.dataset.url)
    })
  })
}
async function handlePostFormSubmit(formValues) {
  const { car_location, title, fullname, phone, email } = formValues
  const form = document.getElementById('form-content')
  const checked = form.querySelector(`[name="planning"]`).checked
  const newValues = {
    phone,
    name: fullname,
    email,
    city: car_location,
    agency: title,
    plan: checked,
    source: window.location.href,
  }
  const newData = new FormData()
  for (const [key, value] of Object.entries(newValues)) {
    newData.append(key, value)
  }

  console.log(newData)
  try {
    // check  add or edit - call APi - show toast successs -redirect to detail page
    // if formValues have id key ==> Edit Page
    await postApi.add(newData)
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
  try {
    let defaultValues = {
      car_location: '',
      title: '',
      fullname: '',
      phone: '',
      email: '',
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
