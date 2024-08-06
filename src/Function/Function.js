import './Function.css'
import { getRandomNumber, getDistance, getDistanceHint } from './Indicators'

export const printFunction = () => {
  const appContainer = document.querySelector('#app')
  const main = document.createElement('main')
  const functionSection = document.createElement('section')
  functionSection.className = 'function-section'

  const img = document.createElement('img')
  img.src = 'https://res.cloudinary.com/dzqoduh1s/image/upload/v1722943280/dashboard_rvvnug.jpg'
  img.id = 'map'

  const distanceText = document.createElement('p')
  distanceText.id = 'distance'

  functionSection.append(img)
  main.append(functionSection, distanceText)
  appContainer.append(main)

  img.addEventListener('load', () => {
    const WIDTH = img.clientWidth
    const HEIGHT = img.clientHeight

    const target = {
      x: getRandomNumber(WIDTH),
      y: getRandomNumber(HEIGHT)
    }
    const minWidth = 320
    const scale = WIDTH / minWidth

    let clicks = 0

    img.addEventListener('click', (e) => {
      clicks++
      const distance = getDistance(e, target)
      const distanceHint = getDistanceHint(distance, scale)
      distanceText.textContent = distanceHint

      setTimeout(() => {
        distanceText.textContent = ''; // Limpia el contenido del mensaje
      }, 2000); 

      if (distance < 40 * scale) {
        alert(`You found the flea in ${clicks} clicks!`)
        location.reload()
      }
    })
  })
}
