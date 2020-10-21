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
  contact: [247, 202, 207]
}

const texts = {
  about: 'codes',
  projects: 'builds',
  blogs: 'writes',
  contact: 'connects'
}

const startingHeights = {
  about: window.innerHeight,
  projects: window.innerHeight,
  blogs: window.innerHeight,
  contact: window.innerHeight
}

const App = () => {

  const [page, setPage] = useState('about')
  const [heights, addHeight] = useState(startingHeights)
  const [startingColor, setStartingColor] = useState(componentColors.about)
  const [finalColor, setFinalColor] = useState(componentColors.projects)
  
  const [ startingRed, startingGreen, startingBlue ] = startingColor
  const [ finalRed, finalGreen, finalBlue ] = finalColor

  const [red, setRed] = useState(startingRed)
  const [green, setGreen] = useState(startingGreen)
  const [blue, setBlue] = useState(startingBlue)

  useEffect(() => {
    console.log(window.scrollY)
    const handleScroll = () => {
      setRed(calculateColorValue(heights.about, startingRed, finalRed))
      setGreen(calculateColorValue(heights.about, startingGreen, finalGreen))
      setBlue(calculateColorValue(heights.about, startingBlue, finalBlue))
  }

    window.addEventListener('scroll', handleScroll)
  }, [])

  console.log(heights)
  return (
    <>
      <SEO title="kristine codes - homepage" />
      <Info text={texts[page]} setPage={setPage} />
      <main style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
          <About addHeight={addHeight} />
          <Projects
            startingColor={componentColors['projects']} 
            finalColor={componentColors['blogs']}
            setRed={setRed}
            setGreen={setGreen}
            setBlue={setBlue}
            addHeight={addHeight}
          />
          <Blogs
            startingColor={componentColors['blogs']} 
            finalColor={componentColors['contact']}
            setRed={setRed}
            setGreen={setGreen}
            setBlue={setBlue}
          />
          <Contact />
      </main>
    </>
  )
}

export default App