import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="hero flex-col">
      <div className="hero-message">
        <h1>Tell Us About Your Favorite Games</h1>
        <p>Join the online community of Gamers by sharing your play-history!</p>
      </div>
      <div className="hero-action">
        <Link to="/register">Get Started</Link>
      </div>
    </div>
  )
}