import './Form.css'

export const printRegisterForm = () => {
  const appContainer = document.querySelector('#app')

  const formContainer = document.createElement('div')
  formContainer.className = 'form-container'

  const form = document.createElement('form')
  form.className = 'register-form'

  const label = document.createElement('label')
  label.textContent = 'Introduce tu nombre:'

  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'username'
  input.required = true

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.textContent = 'Registrar'
  submitButton.className = 'home-button'

  form.append(label, input, submitButton)
  formContainer.append(form)
  appContainer.append(formContainer)

  const displayUserInfo = (username) => {
    const userInfo = document.querySelector('#user-info')
    if (userInfo) {
      userInfo.textContent = `Usuario: ${username}`
    }
  }

  const updateClicksRecord = () => {
    const username = localStorage.getItem('username') || 'Invitado'
    const clicksText = document.querySelector('#clicks')
    if (clicksText) {
      const userClicks = localStorage.getItem(`clicks_${username}`) || 0
      clicksText.textContent = `Récord de clicks de ${username}: ${userClicks}`
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = input.value.trim()
    if (username) {
      localStorage.setItem('username', username)
      displayUserInfo(username)
      updateClicksRecord()
      formContainer.remove()
    }
  })

  const storedUsername = localStorage.getItem('username') || 'Invitado'
  displayUserInfo(storedUsername)
  updateClicksRecord()
}
