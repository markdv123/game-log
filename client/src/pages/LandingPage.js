import React from 'react'
import GetStarted from '../components/GetStarted'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default ({ children }) => {
  return (
    <div className="landing-page flex-row">
      <section className="nav">
        <Nav />
        <main className="container2">
          {children}
        </main>
        <Footer />
      </section>
    </div>
  )
}