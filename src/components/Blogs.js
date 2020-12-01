import React, { useState, useEffect } from 'react'
import BlogPost from './BlogPost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

const Blogs = ({ heights, addHeight, blogsRef, componentLoaded, setComponentLoaded }) => {
  const [posts, setPosts] = useState([])

  const displayPosts = () => {
    return posts.map((post, index) => <BlogPost key={index} post={post} />)
  }

  useEffect(() => {
    if (componentLoaded.projects) {
      addHeight((prevState) => ({ ...prevState,
          blogs: {
            startY: prevState.projects.endY, 
            height: blogsRef.current.offsetHeight + 40,
            endY: prevState.projects.endY + blogsRef.current.offsetHeight + 40
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

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kristine-a-du')
      .then(response => response.json())
      .then(data => {setPosts(data.items)
      })
  }, [])

  return (
    <>
    <section ref={blogsRef} className='blogs top-level'>
        <h2>blogs</h2>
        <h3><a href='https://kristine-a-du.medium.com' target='_blank'><FontAwesomeIcon className='beige' icon={faMedium} size='lg' /> kristine-a-du</a></h3>
        {displayPosts()}
    </section>
    </>
  )
}

export default Blogs