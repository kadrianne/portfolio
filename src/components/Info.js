import React from 'react'

const Info = ({ red, green, blue, aboutRef, projectsRef, blogsRef, contactRef }) => {

  const handleClick = (element) => setTimeout(() => {
    window.scrollTo({
      behavior: element ? 'smooth' : 'auto',
      top: element ? element.offsetTop : 0
    })
  }, 100)

  return (
      <aside className='info'>
        <header style={{color: `rgb(${red},${green},${blue})`}}>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <li><a onClick={() => handleClick(aboutRef.current)}>about</a></li>
            <li><a onClick={() => handleClick(projectsRef.current)}>projects</a></li>
            <li><a onClick={() => handleClick(blogsRef.current)}>blogs</a></li>
            <li><a onClick={() => handleClick(contactRef.current)}>contact</a></li>
            <li><a href='' target='_blank'>resume</a></li>
          </nav>
          <h1>kristine <p>codes</p></h1>
        </header>
        <footer>
            © {new Date().getFullYear()}
        </footer>
      </aside>
  )
}

export default Info