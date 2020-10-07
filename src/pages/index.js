import React from 'react'
import '../styles/mystyles.scss'
import SEO from '../components/seo'
import Info from '../components/Info'
import Home from '../components/Home'
import Projects from '../components/Projects'

const App = () => {
  return (
    <>
      <SEO title="Kristine Codes - Homepage" />
      <Info />
      <main>
          <Home />
          <Projects />
      </main>
    </>
  )
}

export default App