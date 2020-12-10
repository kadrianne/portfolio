import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

import '../styles/mystyles.scss'

import SEO from '../components/seo'
import Info from '../components/Info'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'

import calculateColorValue from '../helpers/calculateColorValue'

const componentColors = {
  about: [180, 79, 101],
  projects: [140, 94, 155],
  blogs: [19, 113, 170],
  contact: [80, 124, 124],
  pageEnd: [0, 40, 54]
}

const App = () => {
  const [width, setWidth] = useState(0)
  const [heights, addHeight] = useState({})
  const [componentLoaded, setComponentLoaded] = useState({
    about: false,
    projects: false,
    blogs: false,
    contact: false
  })

  const [ startingRed, startingGreen, startingBlue ] = componentColors['about']
  
  const [red, setRed] = useState(startingRed)
  const [green, setGreen] = useState(startingGreen)
  const [blue, setBlue] = useState(startingBlue)

  const infoRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const blogsRef = useRef(null)
  const contactRef = useRef(null)

  function setRGB(startingComponent, endingComponent) {
    const { height, startY } = heights[startingComponent]
    const [ startingRed, startingGreen, startingBlue ] = componentColors[startingComponent]
    const [ finalRed, finalGreen, finalBlue ] = componentColors[endingComponent]

    const colorArguments = (startingColor, finalColor) => ({ height, startY, startingColor, finalColor })

    setRed(calculateColorValue(colorArguments(startingRed, finalRed)))
    setGreen(calculateColorValue(colorArguments(startingGreen, finalGreen)))
    setBlue(calculateColorValue(colorArguments(startingBlue, finalBlue)))
  }

  const handleColors = () => {
    const { about, projects, blogs } = heights

    if (scrollIsWithinComponent(about)) {
      setRGB('about', 'projects')
    } else if (scrollIsWithinComponent(projects)) {
      setRGB('projects', 'blogs')
    } else if (scrollIsWithinComponent(blogs)) {
      setRGB('blogs', 'contact')
    } else {
      setRGB('contact', 'pageEnd')
    }
  }

  const handleClick = (element) => {
    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        top: element === undefined
          ? 0 
          : window.innerWidth >= 1024 
            ? element.offsetTop
            : element.offsetTop + infoRef.current.offsetHeight
      })
    }, 100)
  }

  const scrollIsWithinComponent = (component) => {
    return window.scrollY >= component.startY && window.scrollY < component.endY
  }

  useEffect(() => {
    setWidth(window.screen.width)
  }, [])

  useEffect(() => {
    if (Object.keys(heights).length === 4) {
      window.addEventListener('scroll', handleColors)
    }
  }, [heights])
  
  return (
    <>
      <SEO title="kristine codes" />
      <Info
        width={width}
        red={red}
        green={green}
        blue={blue}
        infoRef={infoRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        blogsRef={blogsRef}
        contactRef={contactRef}
        handleClick={handleClick}
      />
      <main style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
        <FontAwesomeIcon className='scroll-to-top' icon={faArrowCircleUp} size='2x' onClick={() => handleClick()} />
        <About infoRef={infoRef} aboutRef={aboutRef} heights={heights} addHeight={addHeight} componentLoaded={componentLoaded} setComponentLoaded={setComponentLoaded} />
        <Projects projectsRef={projectsRef} heights={heights} addHeight={addHeight} componentLoaded={componentLoaded} setComponentLoaded={setComponentLoaded} />
        <Blogs blogsRef={blogsRef} heights={heights} addHeight={addHeight} componentLoaded={componentLoaded} setComponentLoaded={setComponentLoaded} />
        <Contact contactRef={contactRef} heights={heights} addHeight={addHeight} componentLoaded={componentLoaded} setComponentLoaded={setComponentLoaded} />
      </main>
      { width <=1024 & width !== 0 ? <footer className='device' style={{backgroundColor: `rgb(${red},${green},${blue})`}}>© {new Date().getFullYear()}</footer> : null}
    </>
  )
}

export default App