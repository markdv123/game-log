import React from 'react'
import GetStarted from '../components/GetStarted'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default ({ children, authenticated, currentUser }) => {
  return (
    <div className="landing-page flex-row">
      <section className="nav">
        <Nav 
        authenticated={authenticated}
        currentUser={currentUser}/>
        <main className="container3">
          <div>
            <GetStarted />
          </div>
          <div>
            {children}
          </div>
        </main>
        <Footer />
      </section>
    </div>
  )
}