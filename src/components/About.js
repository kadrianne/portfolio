import React, { useState, useEffect } from 'react'
import Image from './Image'
import { kristine, jsLogo, reactLogo, rubyLogo, railsLogo, htmlLogo, cssLogo, sassLogo, pythonLogo, djangoLogo, drfLogo, reduxLogo, nodeLogo, expressLogo, postgresLogo } from '../images'

const logos = [
  {title: 'JavaScript ES5 / ES2015', image: jsLogo},
  {title: 'React / React Native', image: reactLogo},
  {title: 'Ruby', image: rubyLogo},
  {title: 'Rails', image: railsLogo},
  {title: 'HTML 5', image: htmlLogo},
  {title: 'CSS 3', image: cssLogo},
  {title: 'Sass', image: sassLogo},
  {title: 'Python 3', image: pythonLogo},
  {title: 'Django', image: djangoLogo},
  {title: 'Django REST Framework', image: drfLogo},
  {title: 'Node.js', image: nodeLogo},
  {title: 'Express.js', image: expressLogo},
  {title: 'Redux', image: reduxLogo},
  {title: 'PostgreSQL', image: postgresLogo}
]

const About = ({ heights, addHeight, aboutRef, componentLoaded, setComponentLoaded }) => {
  
  const [imagesLoaded, setImagesLoaded] = useState(0)

  function handleLoad() {
    console.log('about handleLoad')
    setImagesLoaded(imagesLoaded + 1)
  }

  useEffect(() => {
    console.log(imagesLoaded, 'about imagesLoaded')
    if (imagesLoaded === 15) {
      addHeight((prevState) => ({ ...prevState,
        about: {
          startY: 0, 
          height: aboutRef.current.clientHeight,
          endY: aboutRef.current.clientHeight
        }
      }))
      setComponentLoaded({...componentLoaded, about: true})
    }
  }, [imagesLoaded])

  useEffect(() => {
    if (heights.about) {
      setComponentLoaded({...componentLoaded, about: true})
    }
  }, [heights.about])

  const renderLogos = () => logos.map(logo => <Image src={logo.image} title={logo.title} handleLoad={handleLoad} />)

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
          <h3>status</h3>
          <ul>
            <li>software engineering coach @ Flatiron School</li>
            <li>project lead with Code for Denver</li>
            <li>open to full-time & freelance opportunities</li>
          </ul>
        </section>
        <img src={kristine} alt='kristine' className='profile' onLoad={handleLoad}></img>
        <section className='skills'>
          <h3>skills</h3>
          <div className='skills-content'>
            {renderLogos()}
          </div>
        </section>
    </section>
    </>
  )
}

export default About