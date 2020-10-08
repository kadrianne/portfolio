import React, { useState } from 'react'
import '../styles/mystyles.scss'
import SEO from '../components/seo'
import Info from '../components/Info'
import Home from '../components/Home'
import Projects from '../components/Projects'

const App = () => {

  const [page, setPage] = useState('about')

  const texts = {
    about: 'codes',
    projects: 'builds'
  }

  return (
    <>
      <SEO title="Kristine Codes - Homepage" />
      <Info text={texts[page]} setPage={setPage} />
      <main>
          <Home />
          <Projects />
      </main>
    </>
  )
}

export default App