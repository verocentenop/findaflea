import './Function.css'
import { getRandomNumber, getDistance, getDistanceHint } from './Indicators'

export const printFunction = () => {
  const appContainer = document.querySelector('#app')
  const main = document.createElement('main')
  const functionSection = document.createElement('section')
  functionSection.className = 'function-section'

  const img = document.createElement('img')
  img.src = 'src/assets/dashboard.jpg'
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

      if (distance < 40 * scale) {
        alert(`You found the flea in ${clicks} clicks!`)
        location.reload()
      }
    })
  })
}