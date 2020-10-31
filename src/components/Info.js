import React from 'react'

const Info = ({ setPage, red, green, blue, aboutRef, projectsRef, blogsRef, contactRef }) => {

  const handleClick = (element) => setTimeout(() => {
    setPage(element.className)
    window.scrollTo({
      behavior: element ? 'smooth' : 'auto',
      top: element ? element.offsetTop : 0
    })
  }, 100)

  return (
      <div className='info'>
        <header>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <a onClick={() => handleClick(aboutRef.current)}>about</a>
            <a onClick={() => handleClick(projectsRef.current)}>projects</a>
            <a onClick={() => handleClick(blogsRef.current)}>blogs</a>
            <a onClick={() => handleClick(contactRef.current)}>contact</a>
            <a href='' target='_blank'>resume</a>
          </nav>
          <h1 style={{color: `rgb(${red},${green},${blue})`}}>kristine <p>codes</p></h1>
        </header>
        <footer>
            © {new Date().getFullYear()}
        </footer>
      </div>
  )
}

export default Info