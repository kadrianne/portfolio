import React, { useState } from 'react'
import '../styles/mystyles.scss'
import SEO from '../components/seo'
import Info from '../components/Info'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'

const startingColors = {
  about: [85, 110, 139],
  projects: [123, 153, 163],
  blogs: [203, 179, 191],
  contact: [247, 202, 207]
}

const [ startingRed, startingGreen, startingBlue ] = startingColors['about']

const texts = {
  about: 'codes',
  projects: 'builds',
  blogs: 'writes',
  contact: 'connects'
}

const App = () => {

  const [page, setPage] = useState('about')
  const [red, setRed] = useState(startingRed)
  const [green, setGreen] = useState(startingGreen)
  const [blue, setBlue] = useState(startingBlue)

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
          <Projects
            startingColor={startingColors['projects']} 
            finalColor={startingColors['blogs']}
            setRed={setRed}
            setGreen={setGreen}
            setBlue={setBlue}
          />
          <Blogs
            startingColor={startingColors['blogs']} 
            finalColor={startingColors['contact']}
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