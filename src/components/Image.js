import React from 'react'

const Image = ({ src, title, handleLoad }) => {
  return (
    <span>
      <img 
        src={src} 
        alt={`${title} logo`} 
        className='logo' 
        title={title}
        onLoad={handleLoad}
      >
      </img>
    </span>
  )
}

export default Image