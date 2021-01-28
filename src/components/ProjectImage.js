import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectImage = ({ isMobile, image, handleLoad }) => {

  const data = useStaticQuery(graphql`
    query ProjectImageQuery {
      weddingWebsite: file(relativePath: {eq: "projects/wedding-website.png"}) {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pickyeats: file(relativePath: {eq: "projects/pickyeats-cover.png"}) {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      minesweeper: file(relativePath: {eq: "projects/minesweeper.png"}) {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      trashPanda: file(relativePath: {eq: "projects/trash-panda.png"}) {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      cfd: file(relativePath: {eq: "projects/cfd.png"}) {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  
  return (
    <Img
      className={isMobile ? 'mobile' : 'web'}
      fluid={data[image].childImageSharp.fluid}
      onLoad={handleLoad}
    />
  )
}

export default ProjectImage