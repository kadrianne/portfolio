import React, { useEffect, useState, useRef } from 'react'

import '../styles/mystyles.scss'

import SEO from '../components/seo'
import Info from '../components/Info'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'

import calculateColorValue from '../helpers/calculateColorValue'

const componentColors = {
  about: [80, 124, 124],
  projects: [19, 113, 170],
  blogs: [149, 100, 160],
  contact: [177, 89, 105],
  pageEnd: [247, 214, 173]
}

const App = ({ location }) => {

  const [page, setPage] = useState(location.hash.substring(1) || 'about')
  const [heights, addHeight] = useState({})

  const [ startingRed, startingGreen, startingBlue ] = componentColors[page]
  
  const [red, setRed] = useState(startingRed)
  const [green, setGreen] = useState(startingGreen)
  const [blue, setBlue] = useState(startingBlue)

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

  function handleColors() {
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

  function scrollIsWithinComponent(component) {
    return window.scrollY >= component.startY && window.scrollY < component.endY
  }

  useEffect(() => {
    // window.scrollTo(0, 0)
    if (heights.about) {
      window.addEventListener('scroll', handleColors)
    }
  }, [heights])
  
  return (
    <>
      <SEO title="kristine codes" />
      <Info
        setPage={setPage}
        red={red}
        green={green}
        blue={blue}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        blogsRef={blogsRef}
        contactRef={contactRef}
      />
      <main style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
        <About aboutRef={aboutRef} addHeight={addHeight} />
        <Projects projectsRef={projectsRef} addHeight={addHeight} />
        <Blogs blogsRef={blogsRef} addHeight={addHeight} />
        <Contact contactRef={contactRef} addHeight={addHeight} />
      </main>
    </>
  )
}

export default App