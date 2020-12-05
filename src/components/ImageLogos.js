import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ImageLogos = ({ handleLoad }) => {

  const logos = [
    {title: 'JavaScript ES5 / ES2015', image: 'javascript.png'},
    {title: 'React / React Native', image: 'react.png'},
    {title: 'Ruby', image: 'ruby.png'},
    {title: 'Rails', image: 'rails.png'},
    {title: 'HTML 5', image: 'html.png'},
    {title: 'CSS 3', image: 'css.png'},
    {title: 'Sass', image: 'sass.png'},
    {title: 'Python 3', image: 'python.png'},
    {title: 'Django', image: 'django.png'},
    {title: 'Django REST Framework', image: 'django-rest-framework.png'},
    {title: 'Node.js', image: 'node.png'},
    {title: 'Express.js', image: 'express.png'},
    {title: 'Redux', image: 'redux.png'},
    {title: 'PostgreSQL', image: 'postgres.png'}
  ]

  const data = useStaticQuery(graphql`
    query LogosQuery {
      allFile(filter: {relativeDirectory: {eq: "logos"}}) {
        edges {
          node {
            id
            base
            childImageSharp {
              fixed(height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    logos.map(logo => {
      let img = data.allFile.edges.find(edge => edge.node.base === logo.image)
      return (
        <div className='logo'>
          <Img 
            fixed={img.node.childImageSharp.fixed}
            alt={`${logo.title} logo`}
            title={logo.title}
            onLoad={handleLoad}
          />
        </div>
      )
    })
  )
}

export default ImageLogos