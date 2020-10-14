import React, { useState, useEffect } from 'react'
import calculateColorValue from '../helpers/calculateColorValue'

const About = ({ setRed, setGreen, setBlue, startingColor, finalColor }) => {

  const [height, setHeight] = useState(0)

  const [ startingRed, startingGreen, startingBlue ] = startingColor
  const [ finalRed, finalGreen, finalBlue ] = finalColor

  const handleScroll = () => {
    if (window.scrollY <= height){
      setRed(calculateColorValue(height, startingRed, finalRed))
      setGreen(calculateColorValue(height, startingGreen, finalGreen))
      setBlue(calculateColorValue(height, startingBlue, finalBlue))
    }
  }

  useEffect(() => {
    const height = document.querySelector('.about').clientHeight
    setHeight(height)
  }, [])

  return (
    <>
    {window.addEventListener('scroll', handleScroll)} 
    <section className='about'>
        <h2>About</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default About