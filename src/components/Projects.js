import React, { useState, useEffect } from 'react'
import projectData from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = ({ heights, addHeight, projectsRef, componentLoaded, setComponentLoaded }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0)

  const handleLoad = () => {
    setImagesLoaded(imagesLoaded + 1)
  }

  const displayProjects = (key) => {
    return projectData()[key].map(project => <ProjectCard key={project.id} project={project} handleLoad={handleLoad} />)
  }

  useEffect(() => {
    if (componentLoaded.about && imagesLoaded === Object.values(projectData()).flat().length) {
      addHeight((prevState) => ({ ...prevState, 
        projects: {
          startY: prevState.about.endY, 
          height: projectsRef.current.offsetHeight + 40,
          endY: prevState.about.endY + projectsRef.current.offsetHeight + 40
        }
      }))
    }
  }, [componentLoaded.about, imagesLoaded])

  useEffect(() => {
    if (heights.projects) {
      setComponentLoaded({...componentLoaded, projects: true})
    }
  }, [heights.projects])

  return (
    <>
    <section ref={projectsRef} className='projects top-level'>
        <h2>projects</h2>
        <section className='card-container'>
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