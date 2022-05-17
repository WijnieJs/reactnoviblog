import React from 'react'
import { useParams } from 'react-router-dom'

import Button from '../components/Button/Button'
import classes from './PostDetail.module.css'

import DUMMY_POSTS from '../data/posts.json'

const Postdetail = () => {
  const { id } = useParams()
  const post = DUMMY_POSTS.filter((item) => item.id == id)

  return (
    <article className={classes.post}>
      <header className={classes.post__header}>
        <h3 className={classes.post__meta}>
          Posted by {post[0].author} on {post[0].date}
        </h3>
        <h1 className={classes.post__title}>{post[0].title}</h1>
      </header>

      <div className={classes.post__content}>{post[0].content}</div>
      <div className={classes.post__actions}>
        <Button mode="flat" design="danger" link={'/blog'}>
          Back to Posts
        </Button>
      </div>
    </article>
  )
}
export default Postdetail
