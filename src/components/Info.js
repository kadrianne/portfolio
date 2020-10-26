import React from 'react'

const Info = ({ text, setPage }) => (
    <div className='info'>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a onClick={() => setPage('about')}>about</a>
            <a onClick={() => setPage('projects')}>projects</a>
            <a onClick={() => setPage('blogs')}>blogs</a>
            <a onClick={() => setPage('contact')}>contact</a>
            <a href='' target='_blank'>resume</a>
        </nav>
        <h1 className='blue'>kristine <span>{text}</span></h1>
      </header>
      <footer>
          © {new Date().getFullYear()}
      </footer>
    </div>
)

export default Info