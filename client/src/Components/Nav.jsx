import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <div className="user-nav-links">
          <Link to="/feed">Feed</Link>
          <Link to="/Comments">Comments</Link>
          <Link to="/Posts">Posts</Link>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
