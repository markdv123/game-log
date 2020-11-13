import React from 'react'
import GetStarted from '../components/GetStarted'
import Nav from '../components/Nav'

export default ({ children }) => {
  return (
    <div className="landing-page flex-row">
      <section className="nav">
        <Nav />
        {children}
      </section>
    </div>
  )
}