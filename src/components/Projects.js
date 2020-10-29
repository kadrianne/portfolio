import React, { useEffect } from 'react'

const Projects = ({ addHeight, projectsRef }) => {

  useEffect(() => {
    addHeight((prevState) => ({ ...prevState, 
        projects: {
          startY: prevState.about.endY, 
          height: projectsRef.current.clientHeight,
          endY: prevState.about.endY + projectsRef.current.clientHeight
        }
      })
    )
  }, [])

  return (
    <>
    <section ref={projectsRef} className='projects'>
        <h2>projects</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default Projects