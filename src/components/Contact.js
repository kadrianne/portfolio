import React, { useState, useEffect } from 'react'
import calculateColorValue from '../helpers/calculateColorValue'

const Contact = () => {

  // const [height, setHeight] = useState(0)
  // const [startingPosition, setStartingPosition] = useState(0)

  // const [ startingRed, startingGreen, startingBlue ] = startingColor
  // const [ finalRed, finalGreen, finalBlue ] = finalColor

  // const handleScroll = () => {
  //   if (window.scrollY > startingPosition && window.scrollY <= (startingPosition + height)){
  //     setRed(calculateColorValue(height, startingRed, finalRed, startingPosition))
  //     setGreen(calculateColorValue(height, startingGreen, finalGreen, startingPosition))
  //     setBlue(calculateColorValue(height, startingBlue, finalBlue, startingPosition))
  //   }
  // }

  // useEffect(() => {
  //   const contact = document.querySelector('.contact')
  //   setHeight(contact.clientHeight)
  //   setStartingPosition(contact.offsetTop)
  // }, [])

  return (
    <>
    {/* {window.addEventListener('scroll', handleScroll)} */}
    <section className='contact'>
        <h2>Contact</h2>
    </section>
    </>
  )
}

export default Contact