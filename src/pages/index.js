import React from "react"
import './mystyles.scss'
import SEO from "../components/seo"

const Homepage = () => (
  <>
    <SEO title="Kristine Codes - Homepage" />
    <h1 className='blue'>kristine codes</h1>
    <footer>
      © {new Date().getFullYear()}
    </footer>
  </>
)

export default Homepage
