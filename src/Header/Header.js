import './Header.css'

export const printHeader = () => {
  const appContainer = document.querySelector('#app')
  const headerContainer = document.createElement('header')
  headerContainer.className = 'header-container'
  const homeButton = document.createElement('button')
  homeButton.className = 'home-button'
  homeButton.textContent = 'More games'

  const buttonHref = '#'
  homeButton.onclick = () => {
    window.location.href = buttonHref
  }

  const h1 = document.createElement('h1')
  h1.textContent = 'FIND THE FLEA'
  const p = document.createElement('p')
  p.className = 'initial-text'
  p.textContent =
    "There's a flea hiding somewhere, can you find it? Touch the screen to see where it is, we'll tell you how far away you are from finding it..."

  headerContainer.append(homeButton, h1, p)
  appContainer.append(headerContainer)
}
