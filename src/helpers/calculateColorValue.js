export default function calculateColorValue({ height, startY, startingColor, finalColor }) {
  const scrollPosition = ((height + (window.scrollY-startY)) / height) - 1
  return Math.round(startingColor + ((finalColor - startingColor) * scrollPosition))
}