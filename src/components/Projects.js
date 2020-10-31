import React, { useEffect } from 'react'
import projectData from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = ({ addHeight, projectsRef }) => {

  function displayProjects() {
    return projectData.map(project => <ProjectCard project={project} />)
  }

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
        <div className='card-container'>
          {displayProjects()}
        </div>
    </section>
    </>
  )
}

export default Projects