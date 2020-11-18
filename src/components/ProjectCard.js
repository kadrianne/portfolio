import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = (props) => {
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
  } = props.project

  const bullet = '\u2022'
  const displayTech = (techs) => {
    return <ul class='tech-list'>{bullet} {techs.map(tech => <li>{tech} {bullet} </li>)}</ul>
  }

  return (
    <section className={`project-card ${isFeature ? 'feature' : 'vertical'}`}>
      <img src={image}></img>
      <div className='project-info'>
        <h4 class='project-name'>
          { link 
            ? <a href={link} target='_blank'>{title} <FontAwesomeIcon className='brown' icon={faLink} size='xs' /></a>
            : title
          }
        </h4>
        <ul class='links'>
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
        <p class='description'>{description}</p>
        {displayTech(tech)}
      </div>
    </section>
  )
}

export default ProjectCard