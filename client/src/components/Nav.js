import React from 'react'
import { Link } from 'react-router-dom'

// export default ({ authenticated, currentUser, className }) => {
//   return authenticated && currentUser ? (
//     <header className={className}>
//       <div className="icon">Welcome Back {currentUser.name}</div>
//       <nav>
//         <NavLink activeClassName="nav-active" to="/profile">
//           Profile
//         </NavLink>
//         <NavLink activeClassName="nav-active" to="/discover">
//           Discover
//         </NavLink>
//         <NavLink activeClassName="nav-active" to="/admin">
//           Admin
//         </NavLink>
//         <NavLink
//           activeClassName="nav-active"
//           to="/"
//           onClick={() => localStorage.clear()}
//         >
//           Sign Out
//         </NavLink>
//       </nav>
//     </header>
//   ) : (
//     <header className={className}>
//       <div className="icon"></div>
//       <nav>
//         <NavLink activeClassName="nav-active" to="/discover">
//           Discover
//         </NavLink>
//         <NavLink activeClassName="nav-active" to="/admin">
//           Admin
//         </NavLink>
//         <NavLink activeClassName="nav-active" to="/register">
//           Sign Up
//         </NavLink>
//         <NavLink activeClassName="nav-active" to="/login">
//           Sign In
//         </NavLink>
//       </nav>
//     </header>
//   )
// }
export default ({ authenticated, currentUser, className }) => {
  return authenticated && currentUser ? (
    <nav>
    <div class="nav-wrapper teal lighten-1">
      <Link to="/" class="brand-logo"><i class="material-icons">videogame_asset</i>Logo </Link>
      {/* <p>Welcome Back {currentUser.name}</p> */}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/" onClick={() => localStorage.clear()}>Signout</Link></li>
      </ul>
    </div>
  </nav>
  ) : (
    <nav>
    <div class="nav-wrapper teal lighten-1">
      <Link to="/" class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/register">SignUp</Link></li>
        <li><Link to="/login">SignIn</Link></li>
      </ul>
    </div>
  </nav>
  )
}
