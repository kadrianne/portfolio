import React from 'react'
import github from '../images/github.png'

const ProjectCard = (props) => {
  const {
    title,
    link,
    frontend,
    frontendTech,
    backend,
    // backendTech,
    // demo,
    // description,
    // bulletPoints
  } = props.project

  return (
    <article className='project-card'>
      <h3>{title}</h3>
      <ul>
        <li><a href={link}>live site</a></li>
        { backend
          ? <>
          <li><a href={frontend}><span><img class='github' src={github} /></span> front-end:</a> {frontendTech}</li>
          <li><a href={backend}>back-end</a></li>
          </>
          : <li><a href={frontend}>repo</a></li>
        }
      </ul>
    </article>
  )
}

export default ProjectCard