import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = ({ project, handleLoad }) => {
  const {
    title,
    image,
    link,
    frontend,
    tech,
    backend,
    demo,
    description,
    isFeature
  } = project


  const bullet = '\u2022'
  const displayTech = (techs) => {
    return <ul className='tech-list'>{bullet} {techs.map((tech,index) => <li key={index}>{tech} {bullet} </li>)}</ul>
  }

  return (
    <section className={`project-card ${isFeature ? 'feature' : 'vertical'}`}>
      <img src={image} onLoad={handleLoad}></img>
      <div className='project-info'>
        <h4 className='project-name'>
          { link 
            ? <a href={link} target='_blank'>{title} <FontAwesomeIcon className='brown' icon={faLink} size='xs' /></a>
            : title
          }
        </h4>
        <ul className='links'>
          <li>
            <a href={demo} target='_blank'>
              demo <FontAwesomeIcon icon={faVideo} />
            </a>
          </li>
          <li>
            <a href={frontend} target='_blank'>
              front-end <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          { backend &&
            <li>
              <a href={backend} target='_blank'>
                back-end <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          }
        </ul>
        <p className='description'>{description}</p>
        {displayTech(tech)}
      </div>
    </section>
  )
}

export default ProjectCard