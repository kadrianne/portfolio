import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectCard = ({ data, images, project, handleLoad }) => {
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
    {console.log(data,images)}
    <section className={`project-card ${isMobile ? 'mobile' : 'web'}`}>
      {/* <div className='app-image'><Img fluid={images.`${image}`} onLoad={handleLoad} /></div> */}
      <div className='project-info'>
        <h4 className='project-name'>
          { link 
            ? <a href={link} target='_blank'>{title} <FontAwesomeIcon className='brown' icon={faLink} size='xs' /></a>
            : title
          }
        </h4>
        <ul className='links'>
          { demo &&
            <li>
              <a href={demo} target='_blank'>
                <FontAwesomeIcon icon={faVideo} /> demo
              </a>
            </li>
          }
          <li>
            <a href={frontend} target='_blank'>
              <FontAwesomeIcon icon={faGithub} /> front-end
            </a>
          </li>
          { backend &&
            <li>
              <a href={backend} target='_blank'>
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
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectCard