export default function calculateColorValue(height, startingColor, finalColor, startingPosition) {
  const scrollPosition = ((height + (window.scrollY-startingPosition)) / height) - 1
  return Math.round(startingColor + ((finalColor - startingColor) * scrollPosition))
}