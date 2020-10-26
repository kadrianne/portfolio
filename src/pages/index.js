import React, { useEffect, useState } from 'react'
import '../styles/mystyles.scss'
import SEO from '../components/seo'
import Info from '../components/Info'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import calculateColorValue from '../helpers/calculateColorValue'

const componentColors = {
  about: [85, 110, 139],
  projects: [123, 153, 163],
  blogs: [203, 179, 191],
  contact: [247, 208, 178]
}

const texts = {
  about: 'codes',
  projects: 'builds',
  blogs: 'writes',
  contact: 'connects'
}

const App = () => {

  const [page, setPage] = useState('about')
  const [heights, addHeight] = useState({})
  const [currentComponent, setCurrentComponent] = useState(page)
  // const [startingColor, setStartingColor] = useState(componentColors.about)
  // const [finalColor, setFinalColor] = useState(componentColors.projects)
  const [ startingRed, startingGreen, startingBlue ] = componentColors.about

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

  const handleScroll = () => {
    const { about, projects, blogs, contact } = heights

    if (window.scrollY < about.endY) {
      setCurrentComponent('about')
      setRGB('about', 'projects')
    } else if (window.scrollY >= about.endY && window.scrollY < projects.endY){
      console.log('projects')
      setCurrentComponent('projects')
      setRGB('projects', 'blogs')
    } else {
      setCurrentComponent('blogs')
      setRGB('blogs', 'contact')
    }
  }

  useEffect(() => {
    if (heights.about) {
      window.addEventListener('scroll', handleScroll)
    }

  }, [heights])

  // useEffect(() => {
  //   if (heights.about) {
  //     setRGB()
  //   }
  // }, [currentComponent])
  
  return (
    <>
      <SEO title="kristine codes - homepage" />
      <Info text={texts[page]} setPage={setPage} />
      <main style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
          <About addHeight={addHeight} />
          <Projects
            // startingColor={componentColors['projects']} 
            // finalColor={componentColors['blogs']}
            // setRed={setRed}
            // setGreen={setGreen}
            // setBlue={setBlue}
            addHeight={addHeight}
          />
          <Blogs
            // startingColor={componentColors['blogs']} 
            // finalColor={componentColors['contact']}
            // setRed={setRed}
            // setGreen={setGreen}
            // setBlue={setBlue}
            addHeight={addHeight}
          />
          <Contact />
      </main>
    </>
  )
}

export default App