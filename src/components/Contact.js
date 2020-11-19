import React, { useEffect } from 'react'

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

  return (
    <>
    <section ref={contactRef} className='contact top-level last'>
        <h2>contact</h2>
        <img src='https://i.kym-cdn.com/photos/images/original/001/295/524/cda.jpg' ></img>
    </section>
    </>
  )
}

export default Contact