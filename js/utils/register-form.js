import { setTextContent } from './common'
import * as yup from 'yup'
function getFormValues(form) {
  const values = {}

  //   ;['title', 'author', 'description', 'imageUrl'].forEach((name) => {
  //     const field = form.querySelector(`[name='${name}']`)
  //     if (field) values[name] = field.value
  //   })

  const data = new FormData(form)
  for (const [key, value] of data) {
    values[key] = value
  }
  return values
}

function createYupSchema() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  return yup.object().shape({
    car_location: yup.string().required('Please enter title'),
    Title: yup
      .string()
      .required('Please enter author')
      .test(
        'at-least-two-word',
        'Please enter at least two word',
        (value) => value.split(' ').filter((x) => !!x && x.length >= 3).length >= 2
      ),
    fullname: yup.string().required('Please enter title'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    Email: yup.string().email('Must be a valid email').max(255),
    planning: yup.string(),
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
    ;['car_location', 'Title', 'fullname', 'phone', 'Email', 'planning'].forEach((name) =>
      setFieldError(form, name, '')
    )

    const schema = createYupSchema()
    await schema.validate(formValues, { abortEarly: false })
  } catch (error) {
    const errorLog = {}

    if (error.name === 'ValidationError' && Array.isArray(error.inner)) {
      for (const validationError of error.inner) {
        const name = validationError.path
        console.log(errorLog[name])
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

function showLoading(form) {
  const button = form.querySelector(`[name="submit"]`)
  if (button) {
    button.disabled = true
    button.innerHTML = '<i class="fas fa-save mr-1"></i>  Saving ...'
  }
}

function hideLoading(form) {
  const button = form.querySelector(`[name="submit"]`)
  if (button) {
    button.disabled = false
    button.innerHTML = '<i class="fas fa-save mr-1"></i>  Save'
  }
}

export function registerForm({ formId, defaultValues, onSubmit }) {
  const form = document.getElementById(formId)
  if (!form) return

  let submitting = false

  //   setFormValues(form, defaultValues)

  //   initRandomImage(form)
  //   initRadioImageSource(form)
  //   initUpLoadImage(form)
  //   initValidationOnChange(form)

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    if (submitting) return

    // showLoading(form)
    submitting = true

    const formValues = getFormValues(form)

    const isValid = await validateForm(form, formValues)
    console.log(isValid)
    // Promise is truthy !Promise alway false --> so alway pass return
    if (isValid) await onSubmit?.(formValues)

    // hideLoading(form)
    submitting = false
  })
}
