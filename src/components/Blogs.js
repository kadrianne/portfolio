import React, { useEffect } from 'react'

const Blogs = ({ heights, addHeight, blogsRef, componentLoaded, setComponentLoaded }) => {

  useEffect(() => {
    if (componentLoaded.projects) {
      addHeight((prevState) => ({ ...prevState,
          blogs: {
            startY: prevState.projects.endY, 
            height: blogsRef.current.clientHeight,
            endY: prevState.projects.endY + blogsRef.current.clientHeight
          }
        })
      )
    }
  }, [componentLoaded.projects])

  useEffect(() => {
    if (heights.blogs) {
      setComponentLoaded({...componentLoaded, blogs: true})
    }
  }, [heights.blogs])

  return (
    <>
    <section ref={blogsRef} className='blogs top-level'>
        <h2>blogs</h2>
    </section>
    </>
  )
}

export default Blogs