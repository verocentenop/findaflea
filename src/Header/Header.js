simport './Header.css';

export const printHeader = () => {
  const appContainer = document.querySelector('#app')
  const headerContainer = document.createElement('header')
  headerContainer.className = 'header-container'
  const homeButton = document.createElement('button')
  homeButton.className = 'home-button'
  homeButton.textContent = 'Inicio'
  
 const buttonHref = 'https://vc-games.netlify.app/';
  homeButton.onclick = () => {
    window.location.href = buttonHref;
  };

  const h1 = document.createElement('h1')
  h1.textContent = 'FIND THE FLEA'
  const p = document.createElement('p')
  p.className = 'initial-text'
  p.textContent =
     'Hay una pulga escondida en algún lugar, ¡es tan diminuta que no podrás ni verla! Toca la imagen para buscarla, te diremos que tan lejos estás de encontrarla. ¿Podrás hacerlo?'

  headerContainer.append(homeButton, h1, p)
  appContainer.append(headerContainer)
}
