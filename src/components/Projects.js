import React, { useState, useEffect } from 'react'
import calculateColorValue from '../helpers/calculateColorValue'

const Projects = ({ setRed, setGreen, setBlue, startingColor, finalColor, addHeight }) => {

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
    const project = document.querySelector('.projects')
    addHeight((prevState) => ({ ...prevState, projects: project.clientHeight }))
    setHeight(project.clientHeight)
    setStartingPosition(project.offsetTop)
  }, [])

  return (
    <>
    {window.addEventListener('scroll', handleScroll)}
    <section className='projects'>
        <h2>Projects</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default Projects