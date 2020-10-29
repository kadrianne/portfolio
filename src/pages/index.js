import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '../styles/mystyles.scss'

import SEO from '../components/seo'
import Info from '../components/Info'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'

import ScrollHandler from '../helpers/scrollHandler'
import calculateColorValue from '../helpers/calculateColorValue'

const componentColors = {
  about: [80, 124, 124],
  projects: [19, 113, 170],
  blogs: [149, 100, 160],
  contact: [177, 89, 105],
  pageEnd: [247, 214, 173]
}

const texts = {
  about: 'codes',
  projects: 'builds',
  blogs: 'writes',
  contact: 'connects'
}

const App = ({ location }) => {

  const [page, setPage] = useState(location.hash.substring(1) || 'about')
  const [heights, addHeight] = useState({})

  const [ startingRed, startingGreen, startingBlue ] = componentColors[page]
  
  const [red, setRed] = useState(startingRed)
  const [green, setGreen] = useState(startingGreen)
  const [blue, setBlue] = useState(startingBlue)

  const setRGB = (startingComponent, endingComponent) => {
    const [ startingRed, startingGreen, startingBlue ] = componentColors[startingComponent]
    const [ finalRed, finalGreen, finalBlue ] = componentColors[endingComponent]
    const { height, startY } = heights[startingComponent]

    setRed(calculateColorValue(height, startingRed, finalRed, startY))
    setGreen(calculateColorValue(height, startingGreen, finalGreen, startY))
    setBlue(calculateColorValue(height, startingBlue, finalBlue, startY))
  }

  const handleColors = () => {
    const { about, projects, blogs } = heights

    if (window.scrollY < about.endY) {
      setRGB('about', 'projects')
    } else if (window.scrollY >= about.endY && window.scrollY < projects.endY){
      setRGB('projects', 'blogs')
    } else if (window.scrollY >= projects.endY && window.scrollY < blogs.endY){
      setRGB('blogs', 'contact')
    } else {
      setRGB('contact', 'pageEnd')
    }
  }
  
  const handleText = () => {
    const { about, projects, blogs } = heights

    const halfHeight = (component) => component.endY - (component.height/2)

    if (window.scrollY < halfHeight(about)) {
      setPage('about')
    } else if (window.scrollY >= halfHeight(about) && window.scrollY < halfHeight(projects)){
      setPage('projects')
    } else if (window.scrollY >= halfHeight(projects) && window.scrollY < halfHeight(blogs)){
      setPage('blogs')
    } else {
      setPage('contact')
    }
  }
  
  const handleScroll = () => {
    handleColors()
    handleText()
  }

  useEffect(() => {
    if (heights.about) {
      window.addEventListener('scroll', handleScroll)
    }
  }, [heights])
  
  return (
    <>
    <Router>
      <SEO title="kristine codes - homepage" />
      <Info
        text={texts[page]}
        page={page}
        setPage={setPage}
        red={red}
        green={green}
        blue={blue}
        />
        <main style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
          <ScrollHandler />
          <About addHeight={addHeight} />
          <Projects addHeight={addHeight} />
          <Blogs addHeight={addHeight} />
          <Contact addHeight={addHeight} />
        </main>
    </Router>
    </>
  )
}

export default App