import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { graphql } from 'gatsby'
import ProjectImage from './ProjectImage'

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
    isMobile
  } = project


  const bullet = '\u2022'
  const displayTech = (techs) => {
    return <ul className='tech-list'>{bullet} {techs.map((tech,index) => <li key={index}>{tech} {bullet} </li>)}</ul>
  }

  return (
    <>
    <section className={`project-card ${isMobile ? 'mobile' : 'web'}`}>
      <div className='app-image'><ProjectImage isMobile={isMobile} image={image} handleLoad={handleLoad} /></div>
      <div className='project-info'>
        <h4 className='project-name'>
          { link 
            ? <a href={link} target='_blank' rel='noreferrer'>{title} <FontAwesomeIcon className='brown' icon={faLink} size='xs' /></a>
            : title
          }
        </h4>
        <ul className='links'>
          { demo &&
            <li>
              <a href={demo} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faVideo} /> demo
              </a>
            </li>
          }
          <li>
            <a href={frontend} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} /> front-end
            </a>
          </li>
          { backend &&
            <li>
              <a href={backend} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} /> back-end
              </a>
            </li>
          }
        </ul>
        <p className='description'>{description}</p>
        {displayTech(tech)}
      </div>
    </section>
    </>
  )
}

export const projectsQuery = graphql`
  query {
    pickyeats: file(relativePath: { eq: "pickyeats-cover.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectCard