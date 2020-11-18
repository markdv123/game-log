import React from 'react'
import { Link } from 'react-router-dom'

export default ({ authenticated, currentUser, className }) => {
  return authenticated && currentUser ? (
    <nav>
    <div className="nav-wrapper teal lighten-1">
        <Link to="/" className="brand-logo"><i className="material-icons" style={{"marginLeft": "10px"}}>videogame_asset</i>GameLog</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        {/* <li><Link to="/admin">Admin</Link></li> */}
        <li><Link to="/" onClick={() => localStorage.clear()}>Signout</Link></li>
      </ul>
    </div>
  </nav>
  ) : (
    <nav>
    <div className="nav-wrapper teal lighten-1">
      <Link to="/" className="brand-logo" style={{"marginLeft": "10px"}}><i className="material-icons">videogame_asset</i>GameLog</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/discover">Discover</Link></li>
        {/* <li><Link to="/admin">Admin</Link></li> */}
        <li><Link to="/register">SignUp</Link></li>
        <li><Link to="/login">SignIn</Link></li>
      </ul>
    </div>
  </nav>
  )
}
