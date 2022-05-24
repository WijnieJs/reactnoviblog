import { NavLink } from 'react-router-dom'

import classes from './MainHeader.module.css'
import Button from '../Button/Button'

const MainHeader = (props) => {
  let authButton

  if (props.isAuth) {
    authButton = (
      <li>
        <Button design="danger" mode="raised" onClick={props.logout}>
          Logout
        </Button>
      </li>
    )
  } else if (!props.isAuth) {
    authButton = (
      <li>
        <Button design="success" mode="raised" onClick={props.setAuth}>
          Login
        </Button>
      </li>
    )
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {props.isAuth && (
            <>
              <li>
                <NavLink activeClassName={classes.active} to="/blog">
                  POSTS
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/">
                  HOME
                </NavLink>
              </li>
            </>
          )}

          {authButton}
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
