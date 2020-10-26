import React, { useEffect } from 'react'

const Projects = ({ addHeight }) => {

  useEffect(() => {
    const project = document.querySelector('.projects')
    addHeight((prevState) => ({ ...prevState, 
        projects: {
          startY: prevState.about.endY, 
          height: project.clientHeight,
          endY: prevState.about.endY + project.clientHeight
        }
      })
    )
  }, [])

  return (
    <>
    <section className='projects'>
        <h2>Projects</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default Projects