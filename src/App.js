import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainHeader from './components/Layout/MainHeader'
import Home from './pages/Home'
import BlogPosts from './pages/BlogPosts'
import PostDetail from './pages/PostDetail'

import './App.css'

function App() {
  const [isAuthenticated, toggleIsAuthenticated] = useState(false)

  const loginHandler = () => {
    toggleIsAuthenticated(true)
  }

  const logoutHandler = () => {
    toggleIsAuthenticated(false)
  }
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
  if (isAuthenticated) {
    routes = (
      <Routes>
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/blog/:id" element={<PostDetail />} />
      </Routes>
    )
  }
  return (
    <>
      <MainHeader
        isAuth={isAuthenticated}
        setAuth={loginHandler}
        logout={logoutHandler}
      />
      <main>{routes}</main>
    </>
  )
}

export default App


