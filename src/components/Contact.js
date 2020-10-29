import React, { useEffect } from 'react'

const Contact = ({ addHeight, contactRef }) => {

  useEffect(() => {
    addHeight((prevState) => ({ ...prevState,
        contact: {
          startY: prevState.blogs.endY, 
          height: contactRef.current.clientHeight,
          endY: prevState.blogs.endY + contactRef.current.clientHeight
        }
      })
    )
  }, [])

  return (
    <>
    <section ref={contactRef} className='contact'>
        <h2>contact</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default Contact