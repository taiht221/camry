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
import LazyLoad from 'vanilla-lazyload'
import { registerForm } from './utils'
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

initPickColor()

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
})
lazyLoadInstance.update()

async function handlePostFormSubmit(formValues) {
  //   const payload = removeUnuseFields(formValues)
  //   const formData = jsonFormData(payload)
  //   try {
  //     // check  add or edit - call APi - show toast successs -redirect to detail page
  //     // if formValues have id key ==> Edit Page
  //     const apiValues = formValues.id
  //       ? await postApi.updateFormData(formData)
  //       : await postApi.addFormData(formData)
  //     toast.success('Your Post Has Been Save !')
  //     setTimeout(() => window.location.assign(`/post-details.html?id=${apiValues.id}`), 2000)
  //   } catch (error) {
  //     toast.error(`Error: ${error.message}`)
  //   }
}

let defaultValues = {
  car_location: '',
  Title: '',
  fullname: '',
  phone: '',
  Email: '',
  planning: '',
}
registerForm({
  formId: 'form-content',
  defaultValues,
  onSubmit: (formValues) => handlePostFormSubmit(formValues),
})
