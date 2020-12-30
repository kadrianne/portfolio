import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import useFormField from '../hooks/useFormField'

const functionURL = 'https://lava-indri-1072.twil.io/send-email'

const Contact = ({ heights, addHeight, contactRef, componentLoaded, setComponentLoaded }) => {
  const links = [
    {type: 'email', icon: faEnvelope, href: 'mailto:kristine.a.du@gmail.com', info: 'kristine.a.du@gmail.com'},
    {type: 'linkedIn', icon: faLinkedin, href: 'https://linkedin.com/in/kristine-du', info: 'kristine du'},
    {type: 'google voice', icon: faPhone, href: 'tel: 720-441-3150', info: '(720) 441-3150'}
  ]

  const [name, handleName, setName] = useFormField()
  const [email, handleEmail, setEmail] = useFormField()
  const [subject, handleSubject, setSubject] = useFormField()
  const [message, handleMessage, setMessage] = useFormField()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fieldIsBlank, setFieldIsBlank] = useState(false)
  const [response, setResponse] = useState('')

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
    if (name && email && subject && message){
      setIsSubmitted(true)
      fetch(functionURL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message })
      })
        .then(response => response.json())
        .then(response => {
          setResponse(response.message)
        })
    } else {
      setFieldIsBlank(true)
    }
  }

  const handleReset = (event) => {
    event.preventDefault()
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setIsSubmitted(false)
    setFieldIsBlank(false)
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
              <h4 className='form-submitted'>Thanks for reaching out, {name.split(' ')[0]}.</h4>
              <p>{response}</p>
              <button onClick={handleReset} className="button is-link is-light">Back to Form</button>
            </>
          : <>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  onChange={(event) => {
                    handleName(event)
                    setFieldIsBlank(false)
                  }}
                  value={name}
                  className="input"
                  type="text"
                  placeholder="e.g Jane Li"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input 
                  onChange={(event) => {
                    handleEmail(event)
                    setFieldIsBlank(false)
                  }}
                  value={email}
                  className="input"
                  type="email"
                  placeholder="e.g. jane.li@gmail.com"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input
                  onChange={(event) => {
                    handleSubject(event)
                    setFieldIsBlank(false)
                  }}
                  value={subject}
                  className="input"
                  type="text"
                  placeholder="e.g. Let's Connect!"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  onChange={(event) => {
                    handleMessage(event)
                    setFieldIsBlank(false)
                  }}
                  value={message}
                  className="textarea"
                  placeholder="e.g. Great project idea..."
                />
              </div>
            </div>
            <div className="control">
              <button onClick={handleSubmit} className="button is-link">Submit</button>
              <button onClick={handleReset} class="button is-link is-light">Reset</button>
            </div>
            {fieldIsBlank && <p className='error'>All fields are required.</p>}
            </>
          }
        </form>
    </section>
    </>
  )
}

export default Contact