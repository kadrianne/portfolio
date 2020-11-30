import React from 'react'
import resume from '../assets/kristine-du-resume.pdf'

const Info = ({ red, green, blue, aboutRef, projectsRef, blogsRef, contactRef, handleClick }) => {
  return (
      <aside className='info'>
        <header style={{color: `rgb(${red},${green},${blue})`}}>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <li><a onClick={() => handleClick(aboutRef.current)}>about</a></li>
            <li><a onClick={() => handleClick(projectsRef.current)}>projects</a></li>
            <li><a onClick={() => handleClick(blogsRef.current)}>blogs</a></li>
            <li><a onClick={() => handleClick(contactRef.current)}>contact</a></li>
            <li><a href={resume} target='_blank'>resume</a></li>
          </nav>
          <h1>kristine codes</h1>
        </header>
        <footer>
            © {new Date().getFullYear()}
        </footer>
      </aside>
  )
}

export default Info