export default function calculateColorValue(height, startingColor, finalColor) {
  const scrollPosition = ((height + window.scrollY) / height) - 1
  return Math.round(startingColor + ((finalColor - startingColor) * scrollPosition))
}