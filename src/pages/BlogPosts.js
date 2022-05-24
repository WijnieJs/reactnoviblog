import React from 'react'
import Post from '../components/Post/Post'
import DUMMY_POSTS from '../data/posts.json'

const BlogPosts = () => {
  const postList = DUMMY_POSTS.map((post) => (
    <Post
      key={post.id}
      content={post.content}
      title={post.title}
      date={post.date}
      id={post.id}
    />
  ))

  return <section>{postList}</section>
}

export default BlogPosts
