import { setTextContent } from './common'
import * as yup from 'yup'
function getFormValues(form) {
  const values = {}

  const data = new FormData(form)
  for (const [key, value] of data) {
    values[key] = value
  }
  return values
}

function createYupSchema() {
  const phoneRegExp = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
  return yup.object().shape({
    car_location: yup.string().required('Vui lòng chọn đại lí!'),
    title: yup.string(),
    fullname: yup.string().required('Vui lòng nhập tên!').max(40),
    phone: yup
      .string()
      .required('Vui lòng nhập số điện thoại!')
      .matches(phoneRegExp, 'Vui lòng nhập đúng định đạng số điện thoại!')
      .max(10),
    email: yup.string().email('Vui lòng nhập đúng định đạng email').max(255),
    planning: yup.string().required('Vui lòng chọn dự định'),
  })
}

function setFieldError(form, name, error) {
  const element = form.querySelector(`[name="${name}"]`)

  if (element) {
    element.setCustomValidity(error)
    setTextContent(element.parentElement, '.showErr', error)
  }
}

async function validateForm(form, formValues) {
  // get errors --- set errors --- add was-validated class bs
  try {
    // reset previous errors
    ;['car_location', 'title', 'fullname', 'phone', 'email', 'planning'].forEach((name) =>
      setFieldError(form, name, '')
    )

    const schema = createYupSchema()
    await schema.validate(formValues, { abortEarly: false })
  } catch (error) {
    const errorLog = {}

    if (error.name === 'ValidationError' && Array.isArray(error.inner)) {
      for (const validationError of error.inner) {
        const name = validationError.path
        if (errorLog[name]) continue

        setFieldError(form, name, validationError.message)
        errorLog[name] = true
      }
    }
  }

  // add was-validated class to form Element
  const isValid = form.checkValidity()
  if (!isValid) form.classList.add('was-validated')
  return isValid
}

async function validateFormField(form, formValues, name) {
  try {
    //clear previous values
    setFieldError(form, name, '')

    const schema = createYupSchema()
    await schema.validateAt(name, formValues)
  } catch (error) {
    setFieldError(form, name, error.message)
  }

  //show validation errror
  const field = form.querySelector(`[name='${name}']`)
  if (field && !field.checkValidity()) {
    field.parentElement.classList.add('was-validated')
  }
}

function showLoading(form) {
  const button = form.querySelector(`[name="submit"]`)
  if (button) {
    button.style.opacity = 0.5
    button.disabled = true
  }
}

function hideLoading(form) {
  const button = form.querySelector(`[name="submit"]`)
  if (button) {
    button.style.opacity = 1
    button.disabled = false
  }
}

function initValidationOnChange(form) {
  ;['car_location', 'fullname', 'phone', 'planning'].forEach((name) => {
    const field = form.querySelector(`[name="${name}"]`)
    if (field) {
      field.addEventListener('input', (event) => {
        const newValue = event.target.value
        validateFormField(form, { [name]: newValue }, name)
      })
    }
  })
}

export function registerForm({ formId, defaultValues, onSubmit }) {
  const form = document.getElementById(formId)
  if (!form) return

  let submitting = false

  //   setFormValues(form, defaultValues)

  //   initRandomImage(form)
  //   initRadioImageSource(form)
  //   initUpLoadImage(form)
  initValidationOnChange(form)

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    if (submitting) return

    showLoading(form)
    submitting = true

    const formValues = getFormValues(form)

    const isValid = await validateForm(form, formValues)
    // Promise is truthy !Promise alway false --> so alway pass return
    if (isValid) await onSubmit?.(formValues)

    hideLoading(form)
    submitting = false
  })
}
