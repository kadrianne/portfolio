import React, { useEffect } from 'react'

const About = ({ addHeight }) => {

  useEffect(() => {
    const about = document.querySelector('.about')
    addHeight((prevState) => ({ ...prevState,
        about: {
          startY: 0, 
          height: about.clientHeight,
          endY: about.clientHeight
        }
      })
    )
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