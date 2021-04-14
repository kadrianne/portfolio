import React, { useState, useEffect } from 'react'
import ImageLogos from './ImageLogos'
import ProfileImage from './ProfileImage'

const About = ({ heights, addHeight, infoRef, aboutRef, componentLoaded, setComponentLoaded }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0)

  const handleLoad = () => {
    setImagesLoaded(imagesLoaded + 1)
  }

  useEffect(() => {
    const headerOffset = window.innerWidth >= 1024 ? 0 : infoRef.current.offsetHeight
    if (imagesLoaded === 15) {
      addHeight((prevState) => ({ ...prevState,
        about: {
          startY: 0, 
          height: aboutRef.current.offsetHeight + 40,
          endY: headerOffset + aboutRef.current.offsetHeight + 40
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

  return (
    <>
    <section ref={aboutRef} className='about top-level'>
        <h2>about</h2>
        <div className='profile'><ProfileImage handleLoad={handleLoad} /></div>
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
            <li>software engineer @ Handshake</li>
            <li>project lead w/ Code for Denver</li>
            <li>volunteer w/ ChickTech & ACT-W</li>
          </ul>
        </section>
        <section className='skills'>
          <h3>skills</h3>
          <div className='skills-content'>
            <ImageLogos handleLoad={handleLoad} />
          </div>
        </section>
    </section>
    </>
  )
}

export default About