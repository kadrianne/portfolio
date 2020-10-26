import React, { useEffect } from 'react'

const Blogs = ({ addHeight }) => {

  useEffect(() => {
    const blogs = document.querySelector('.blogs')
    addHeight((prevState) => ({ ...prevState,
        blogs: {
          startY: prevState.projects.endY, 
          height: blogs.clientHeight,
          endY: prevState.projects.endY + blogs.clientHeight
        }
      })
    )
  }, [])

  return (
    <>
    <section className='blogs'>
        <h2>Blogs</h2>
    </section>
    </>
  )
}

export default Blogs