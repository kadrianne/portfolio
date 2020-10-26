import React, { useEffect } from 'react'

const Contact = ({ addHeight }) => {
  
  useEffect(() => {
    const contact = document.querySelector('.contact')
    addHeight((prevState) => ({ ...prevState,
        contact: {
          startY: prevState.blogs.endY, 
          height: contact.clientHeight,
          endY: prevState.blogs.endY + contact.clientHeight
        }
      })
    )
  }, [])

  return (
    <>
    <section className='contact'>
        <h2>Contact</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default Contact