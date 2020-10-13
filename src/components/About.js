import React from 'react'

const About = ({ setRed, setGreen, setBlue, startingColor, finalColor }) => {

  const [ startingRed, startingGreen, startingBlue ] = startingColor
  const [ finalRed, finalGreen, finalBlue ] = finalColor

  const calculateColorValue = (startingColor, finalColor) => {
    const height = document.querySelector('.about').clientHeight
    const scrollPosition = ((height + window.scrollY) / height) - 1
    return Math.round(startingColor + ((finalColor - startingColor) * scrollPosition))
  }
  
  const handleScroll = () => {
    setRed(calculateColorValue(startingRed, finalRed))
    setGreen(calculateColorValue(startingGreen, finalGreen))
    setBlue(calculateColorValue(startingBlue, finalBlue))
  }

  return (
    <>
    <section className='about'>
    {window.addEventListener('scroll', handleScroll)}
        <h2>About</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default About