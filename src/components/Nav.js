import React from 'react'
import resume from '../assets/kristine-du-resume.pdf'

const Nav = ({ aboutRef, projectsRef, blogsRef, contactRef, handleClick }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <li><a onClick={() => handleClick(aboutRef.current)}>about</a></li>
      <li><a onClick={() => handleClick(projectsRef.current)}>projects</a></li>
      <li><a onClick={() => handleClick(blogsRef.current)}>blogs</a></li>
      <li><a onClick={() => handleClick(contactRef.current)}>contact</a></li>
      <li><a href={resume} target='_blank'>resume</a></li>
    </nav>
  )
}

export default Nav