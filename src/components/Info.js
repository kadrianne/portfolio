import React from 'react'
import Nav from './Nav'

const Info = ({ width, red, green, blue, aboutRef, projectsRef, blogsRef, contactRef, handleClick }) => {
  return (
      <aside className='info'>
        { width <= 1024
          ? <>
            <header style={{color: `rgb(${red},${green},${blue})`}}>
              <h1>kristine codes</h1>
              <Nav
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                blogsRef={blogsRef}
                contactRef={contactRef}
                handleClick={handleClick}
              />
            </header>
          </>
          : <>
            <header style={{color: `rgb(${red},${green},${blue})`}}>
              <Nav
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                blogsRef={blogsRef}
                contactRef={contactRef}
                handleClick={handleClick}
              />
              <h1>kristine codes</h1>
            </header>
            <footer>© {new Date().getFullYear()}</footer>
          </>}
      </aside>
  )
}

export default Info