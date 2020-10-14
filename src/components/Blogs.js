import React, { useState, useEffect } from 'react'
import calculateColorValue from '../helpers/calculateColorValue'

const Blogs = ({ setRed, setGreen, setBlue, startingColor, finalColor }) => {

  const [height, setHeight] = useState(0)
  const [startingPosition, setStartingPosition] = useState(0)

  const [ startingRed, startingGreen, startingBlue ] = startingColor
  const [ finalRed, finalGreen, finalBlue ] = finalColor

  const handleScroll = () => {
    if (window.scrollY > startingPosition && window.scrollY <= (startingPosition + height)){
      setRed(calculateColorValue(height, startingRed, finalRed, startingPosition))
      setGreen(calculateColorValue(height, startingGreen, finalGreen, startingPosition))
      setBlue(calculateColorValue(height, startingBlue, finalBlue, startingPosition))
    }
  }

  useEffect(() => {
    const blogs = document.querySelector('.blogs')
    setHeight(blogs.clientHeight)
    setStartingPosition(blogs.offsetTop)
  }, [])

  return (
    <>
    {window.addEventListener('scroll', handleScroll)}
    <section className='blogs'>
        <h2>Blogs</h2>
    </section>
    </>
  )
}

export default Blogs