import React from 'react'

const BlogPost = ({ post }) => {
  const displayContent = () => {
    const content = post.content.replace(/<[^>]*>?/gm, '')
    const preview = content.split(" ").splice(0,50).join(" ")
    return <p className='post-preview'>{preview}...</p>
  }

  return (
    <article>
      <h4>
        <a href={post.link} target="_blank" rel="noreferrer">
        {post.title}
        </a>
      </h4>
      <p>{post.pubDate.split(' ')[0]}</p>
      {displayContent()}
    </article>
  )
}

export default BlogPost