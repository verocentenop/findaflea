import './Function.css'
import { getRandomNumber, getDistance, getDistanceHint } from './Indicators'
import { images } from '../assets/arrayImg'

export const printFunction = () => {
  const appContainer = document.querySelector('#app')
  const main = document.createElement('main')
  const functionSection = document.createElement('section')
  functionSection.className = 'function-section'

  const img = document.createElement('img')
  img.id = 'map'

  const distanceText = document.createElement('p')
  distanceText.id = 'distance'

  const clicksText = document.createElement('p')
  clicksText.id = 'clicks'

  functionSection.append(img)
  main.append(functionSection, distanceText, clicksText)
  appContainer.append(main)

  const randomIndex = getRandomNumber(images.length)
  img.src = images[randomIndex]

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
    const username = localStorage.getItem('username') || 'Invitado'

    const updateClicksText = () => {
      const userClicks = localStorage.getItem(`clicks_${username}`) || 0
      clicksText.textContent = `Récord de clicks de ${username}: ${userClicks}`
    }
    updateClicksText()

    img.addEventListener('click', (e) => {
      clicks++
      const distance = getDistance(e, target)
      const distanceHint = getDistanceHint(distance, scale)
      distanceText.textContent = distanceHint
      distanceText.classList.add('show')

      setTimeout(() => {
        distanceText.classList.remove('show')
      }, 800)

      if (distance < 40 * scale) {
        alert(`¡Encontraste la pulga en ${clicks} clics!`)

        const prevClicks = localStorage.getItem(`clicks_${username}`) || 0
        if (clicks < prevClicks || prevClicks === 0) {
          localStorage.setItem(`clicks_${username}`, clicks)
        }

        updateClicksText()

        location.reload()
      }
    })
  })
}

  })
}
