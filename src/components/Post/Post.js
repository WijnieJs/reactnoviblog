import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

import classes from './Post.module.css'

const Post = (props) => {
  let navigate = useNavigate()

  function navme() {
    navigate(`/blog/${props.id}`)
  }

  return (
    <article className={classes.post}>
      <header className={classes.post__header}>
        <h3 className={classes.post__meta}>
          {props.title} on {props.date}
        </h3>
        <h1 className={classes.post__title}>{props.title}</h1>
      </header>
      <div className={classes.post__actions}>
        <Button mode="raised" onClick={navme}>
          View Post
        </Button>
      </div>
    </article>
  )
}
export default Post
