import React, { useEffect } from 'react'
import projectData from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = ({ addHeight, projectsRef }) => {

  function displayProjects(key) {
    return projectData[key].map(project => <ProjectCard key={project.id} project={project} />)
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
    <section ref={projectsRef} className='projects top-level'>
        <h2>projects</h2>
        <section  className='card-container'>
          <h3>personal</h3>
          <div className='project-cards'>
            {displayProjects('personal')}
          </div>
        </section>
        <section className='card-container'>
          <h3>collaborative</h3>
          <div className='project-cards'>
            {displayProjects('group')}
          </div>
        </section>
    </section>
    </>
  )
}

export default Projects