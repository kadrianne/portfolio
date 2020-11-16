import React, { useEffect } from 'react'
import { kristine, jsLogo, reactLogo, rubyLogo, railsLogo, htmlLogo, cssLogo, sassLogo, pythonLogo, djangoLogo, drfLogo } from '../images'

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
        <img src={kristine} alt='kristine' className='profile'></img>
        <section className='skills'>
          <h3>skills</h3>
          <div className='skills-content'>
            <div className='tech'><img src={jsLogo} alt='javascript logo' className='logo'></img><p>JavaScript ES5 / ES2015</p></div>
            <div className='tech'><img src={reactLogo} alt='react logo' className='logo'></img><p>React / React Native</p></div>
            <div className='tech'><img src={rubyLogo} alt='ruby logo' className='logo'></img><p>Ruby</p></div>
            <div className='tech'><img src={railsLogo} alt='rails logo' className='logo'></img><p>Rails</p></div>
            <div className='tech'><img src={htmlLogo} alt='html logo' className='logo'></img><p>HTML 5</p></div>
            <div className='tech'><img src={cssLogo} alt='css logo' className='logo'></img><p>CSS 3</p></div>
            <div className='tech'><img src={pythonLogo} alt='python logo' className='logo'></img><p>Python 3</p></div>
            <div className='tech'><img src={djangoLogo} alt='django logo' className='logo'></img><p>Django</p></div>
            <div className='tech'><img src={drfLogo} alt='django-rest-framework logo' className='logo'></img><p>Django REST Framework</p></div>
            <div className='tech'><img src={sassLogo} alt='sass logo' className='logo'></img><p>Sass</p></div>
          </div>
        </section>
    </section>
    </>
  )
}

export default About