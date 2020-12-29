import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import useFormField from '../hooks/useFormField'

const Contact = ({ heights, addHeight, contactRef, componentLoaded, setComponentLoaded }) => {
  const links = [
    {type: 'email', icon: faEnvelope, href: 'mailto:kristine.a.du@gmail.com', info: 'kristine.a.du@gmail.com'},
    {type: 'linkedIn', icon: faLinkedin, href: 'https://linkedin.com/in/kristine-du', info: 'kristine du'},
    {type: 'google voice', icon: faPhone, href: 'tel: 720-441-3150', info: '(720) 441-3150'}
  ]

  const [name, handleName] = useFormField('')
  const [email, handleEmail] = useFormField()
  const [subject, handleSubject] = useFormField()
  const [message, handleMessage] = useFormField()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const displayLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        <a href={link.href} target='_blank'>
          <FontAwesomeIcon className='icon beige' icon={link.icon} />
          {link.info}
        </a>
      </li>
    ))
  }

  useEffect(() => {
    if (componentLoaded.blogs) {
      addHeight((prevState) => ({ ...prevState,
          contact: {
            startY: prevState.blogs.endY, 
            height: contactRef.current.offsetHeight + 40,
            endY: prevState.blogs.endY + contactRef.current.offsetHeight + 40
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

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    console.log(name, email, subject, message)

  }

  const handleReset = (event) => {
    event.preventDefault()
    setIsSubmitted(false)
  }

  return (
    <>
    <section ref={contactRef} className='contact top-level last'>
        <h2>contact</h2>
        <ul className='contact-links'>
          {displayLinks()}
        </ul>
        <form>
          {isSubmitted
          ? <>
              <h4 class='form-submitted'>Thanks for reaching out, {name.split(' ')[0]}.</h4>
              <p>I will be in touch with you soon!</p>
              <button onClick={handleReset} class="button">Back to Form</button>
            </>
          : <>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input onChange={handleName} value={name} required class="input" type="text" placeholder="e.g Jane Li" />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input onChange={handleEmail} value={email} required class="input" type="email" placeholder="e.g. jane.li@gmail.com" />
              </div>
            </div>
            <div class="field">
              <label class="label">Subject</label>
              <div class="control">
                <input onChange={handleSubject} value={subject}class="input" type="text" placeholder="e.g. Let's Connect!" />
              </div>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea onChange={handleMessage} value={message} required class="textarea" />
              </div>
            </div>
            <div class="control">
              <button onClick={handleSubmit} class="button is-link">Submit</button>
            </div>
            </>
          }
        </form>
    </section>
    </>
  )
}

export default Contact