export const getRandomNumber = (size) => {
  return Math.floor(Math.random() * size)
}

export const getDistance = (e, target) => {
  const diffX = e.offsetX - target.x
  const diffY = e.offsetY - target.y
  return Math.sqrt(diffX * diffX + diffY * diffY)
}

export const getDistanceHint = (distance, scale) => {
  if (distance < 60 * scale) {
    return 'You almost get it!'
  } else if (distance < 90 * scale) {
    return 'Really hot'
  } else if (distance < 120 * scale) {
    return "It's getting hot"
  } else if (distance < 180 * scale) {
    return 'Warm and comfy'
  } else if (distance < 250 * scale) {
    return 'Still cold'
  } else if (distance < 360 * scale) {
    return 'Cold as an ice'
  } else {
    return 'Freezing!'
  }
}
