import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="GetStarted">
      <div className="register-message">
        <h1>Tell Us About Your Favorite Games</h1>
        <p className="get-started-p">Join the online community of Gamers by sharing your play-history!</p>
      </div>
      <div className="register-button">
        <a class="waves-effect waves-light btn" href="/register">Get Started</a>
      </div>
    </div>
  )
}