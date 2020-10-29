import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Info = ({ text, page, red, green, blue }) => {
  
  const [textClass, setTextClass] = useState(classes.about)

  useEffect(() => {
    setTextClass(classes[page])
  }, [page])

  return (
      <div className='info'>
        <header>
          <nav className="navbar" role="navigation" aria-label="main navigation">
              <Link to='#about'>about</Link>
              <Link to='#projects'>projects</Link>
              <Link to='#blogs'>blogs</Link>
              <Link to='#contact'>contact</Link>
              <a href='' target='_blank'>resume</a>
          </nav>
          <h1 style={{color: `rgb(${red},${green},${blue})`}}>kristine {text}</h1>
        </header>
        <footer>
            © {new Date().getFullYear()}
        </footer>
      </div>
  )
}

export default Info