import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ heights, addHeight, contactRef, componentLoaded, setComponentLoaded }) => {

  useEffect(() => {
    if (componentLoaded.blogs) {
      addHeight((prevState) => ({ ...prevState,
          contact: {
            startY: prevState.blogs.endY, 
            height: contactRef.current.clientHeight,
            endY: prevState.blogs.endY + contactRef.current.clientHeight
          }
        })
      )
    }
  }, [componentLoaded.blogs])

  useEffect(() => {
    if (heights.contact) {
      setComponentLoaded({...componentLoaded, contact: true})
    }
  }, [heights.contact])

  const links = [
    {type: 'email', icon: faEnvelope, href: 'mailto:kristine.a.du@gmail.com', info: 'kristine.a.du@gmail.com'},
    {type: 'linkedIn', icon: faLinkedin, href: 'https://linkedin.com/in/kristine-du', info: 'kristine du'},
    {type: 'google voice', icon: faPhone, href: 'tel: 720-441-3150', info: '(720) 441-3150'}
  ]

  const displayLinks = () => {
    return links.map(link => (
      <li>
        <a href={link.href} target='_blank'>
          <FontAwesomeIcon className='icon beige' icon={link.icon} size='6x' />
          {link.info}
        </a>
      </li>
    ))
  }

  return (
    <>
    <section ref={contactRef} className='contact top-level last'>
        <h2>contact</h2>
        <ul class='contact-links'>
          {displayLinks()}
        </ul>
    </section>
    </>
  )
}

export default Contact