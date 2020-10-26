export default function calculateColorValue(height, startingColor, finalColor, startingPosition) {
  const scrollPosition = ((height + (window.scrollY-startingPosition)) / height) - 1
  console.log('height', height)
  console.log('window.scrollY', window.scrollY)
  console.log('startingPosition', startingPosition)
  console.log('window.scrollY - startingPosition', window.scrollY - startingPosition)
  console.log('scrollPosition', scrollPosition)
  return Math.round(startingColor + ((finalColor - startingColor) * scrollPosition))
}