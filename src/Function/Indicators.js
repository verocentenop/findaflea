export const getRandomNumber = (size) => {
  return Math.floor(Math.random() * size)
}

export const getDistance = (e, target) => {
  const rect = e.target.getBoundingClientRect()
  const offsetX = e.clientX - rect.left
  const offsetY = e.clientY - rect.top

  const diffX = offsetX - target.x
  const diffY = offsetY - target.y
  return Math.sqrt(diffX * diffX + diffY * diffY)
}

export const getDistanceHint = (distance, scale) => {
  if (distance < 60 * scale) {
    return 'Casi te pica!'
  } else if (distance < 90 * scale) {
    return 'Estás muy cerca'
  } else if (distance < 120 * scale) {
    return 'Sigue por ahí'
  } else if (distance < 180 * scale) {
    return 'Estás encaminado'
  } else if (distance < 250 * scale) {
    return 'Aún lejos'
  } else if (distance < 360 * scale) {
    return 'Por aquí no'
  } else {
    return 'Ni de chiste está aquí'
  }
}
