import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const ProfileImage = ({ handleLoad }) => {
  const data = useStaticQuery(graphql`
    query profileImage {
      file(relativePath: {eq: "kristine.jpg"}) {
        id
        base
        childImageSharp {
          fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} alt='kristine' onLoad={handleLoad} />
}

export default ProfileImage