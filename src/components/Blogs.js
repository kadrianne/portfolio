import React, { useEffect } from 'react'

const Blogs = ({ addHeight, blogsRef }) => {

  useEffect(() => {
    addHeight((prevState) => ({ ...prevState,
        blogs: {
          startY: prevState.projects.endY, 
          height: blogsRef.current.clientHeight,
          endY: prevState.projects.endY + blogsRef.current.clientHeight
        }
      })
    )
  }, [])

  return (
    <>
    <section ref={blogsRef} className='blogs'>
        <h2>blogs</h2>
    </section>
    </>
  )
}

export default Blogs