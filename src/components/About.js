import React, { useEffect } from 'react'
import { kristine, jsLogo, reactLogo, rubyLogo, railsLogo, htmlLogo, cssLogo, sassLogo, pythonLogo, djangoLogo, drfLogo, reduxLogo, nodeLogo, expressLogo, postgresLogo } from '../images'

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
          <h3>status</h3>
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
            <span><img src={jsLogo} alt='javascript logo' className='logo' title='JavaScript ES5 / ES2015'></img></span>
            <span><img src={reactLogo} alt='react logo' className='logo' title='React / React Native'></img></span>
            <span><img src={rubyLogo} alt='ruby logo' className='logo' title='Ruby'></img></span>
            <span><img src={railsLogo} alt='rails logo' className='logo' title='Rails'></img></span>
            <span><img src={htmlLogo} alt='html logo' className='logo' title='HTML 5'></img></span>
            <span><img src={cssLogo} alt='css logo' className='logo' title='CSS 3'></img></span>
            <span><img src={sassLogo} alt='sass logo' className='logo' title='Sass'></img></span>
            <span><img src={pythonLogo} alt='python logo' className='logo' title='Python 3'></img></span>
            <span><img src={djangoLogo} alt='django logo' className='logo' title='Django'></img></span>
            <span><img src={drfLogo} alt='django-rest-framework logo' className='logo' title='Django REST Framework'></img></span>
            <span><img src={nodeLogo} alt='node logo' className='logo' title='Node.js'></img></span>
            <span><img src={expressLogo} alt='express logo' className='logo' title='Express.js'></img></span>
            <span><img src={reduxLogo} alt='redux logo' className='logo' title='Redux'></img></span>
            <span><img src={postgresLogo} alt='postgresql logo' className='logo' title='PostgreSQL'></img></span>
          </div>
        </section>
    </section>
    </>
  )
}

export default About