import React, { useState, useEffect } from 'react'

const About = ({ addHeight }) => {

  useEffect(() => {
    const height = document.querySelector('.about').clientHeight
    addHeight((prevState) => ({ ...prevState, about: height }))
  }, [])

  return (
    <>
    <section className='about'>
        <h2>About</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default About