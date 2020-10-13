import React, { useState } from 'react'
import '../styles/mystyles.scss'
import SEO from '../components/seo'
import Info from '../components/Info'
import About from '../components/About'
import Projects from '../components/Projects'

const startingRed = 85
const startingGreen = 110
const startingBlue = 139

const App = () => {

  const [page, setPage] = useState('about')
  const startingColors = {
    about: [85, 110, 139],
    projects: [123, 153, 163],
    blogs: [206, 182, 194]
  }

  const [red, setRed] = useState(startingRed)
  const [green, setGreen] = useState(startingGreen)
  const [blue, setBlue] = useState(startingBlue)

  const texts = {
    about: 'codes',
    projects: 'builds',
    blogs: 'writes'
  }

  return (
    <>
      <SEO title="kristine codes - homepage" />
      <Info text={texts[page]} setPage={setPage} />
      <main style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
          <About 
            startingColor={startingColors['about']} 
            finalColor={startingColors['projects']}
            setRed={setRed}
            setGreen={setGreen}
            setBlue={setBlue}
          />
          <Projects />
      </main>
    </>
  )
}

export default App