import React, { useEffect } from 'react'
import picture from '../images/kristine.jpg'

const About = ({ addHeight, aboutRef }) => {

  useEffect(() => {
    addHeight((prevState) => ({ ...prevState,
        about: {
          startY: 0, 
          height: aboutRef.current.clientHeight,
          endY: aboutRef.current.clientHeight
        }
      })
    )
  }, [])

  return (
    <>
    <section ref={aboutRef} className='about top-level'>
        <h2>about</h2>
        <section className='left kristine'>
          <h3>kristine du</h3>
          <ul>
            <li>full-stack software engineer</li>
            <li>former project manager</li>
            <li>puzzle/board game lover</li>
            <li>amateur pole dancer</li>
          </ul>
        </section>
        <section className='right currently'>
          <h3>currently</h3>
          <ul>
            <li>software engineering coach @ Flatiron School</li>
            <li>project lead with Code for Denver</li>
            <li>open to full-time & freelance opportunities</li>
          </ul>
        </section>
        <section className='skills'>
          <h3>skills</h3>
        </section>
        <img src={picture} alt='kristine-profile' className='profile' ></img>
    </section>
    </>
  )
}

export default About