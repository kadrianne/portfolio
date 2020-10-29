import React, { useEffect } from 'react'

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
    <section ref={aboutRef} className='about'>
        <h2>about</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default About