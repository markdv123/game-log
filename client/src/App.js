import './styles/App.css';
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import LandingPage from './pages/LandingPage'
import Layout from './components/Layout'
import Home from './pages/Home'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import ViewPost from './pages/ViewPost'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'

class App extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
      currentUser: null,
      pageLoading: true
    }
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        this.setState(
          {
            currentUser: session,
            authenticated: true
          },
          () => this.props.history.push('/profile')
        )
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false })
        localStorage.clear()
      }
    }
  }

  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done())
  }

  componentDidMount() {
    this.verifyTokenValid()
    this.setState({ pageLoading: false })
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        console.log('session', session)
        this.setState(
          {
            currentUser: session.user,
            authenticated: true
          },
          () => this.props.history.push('/profile')
        )
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false })
        localStorage.clear()
      }
    }
  }

  render() {
    return (
      <main>
        {this.state.pageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <LandingPage>
                  <Home />
                </LandingPage>
              )}
            />
            <Route
              path="/register"
              component={(props) => (
                <LandingPage>
                  <Signup {...props} />
                </LandingPage>
              )}
            />
            <Route
              path="/login"
              component={(props) => (
                <LandingPage>
                  <SignIn
                    toggleAuthenticated={this.toggleAuthenticated}
                    {...props}
                  />
                </LandingPage>
              )}
            />
            <Route
              path="/discover"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <Discover {...props} />
                </Layout>
              )}
            />
            <Route
              path="/posts/:post_id"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <ViewPost {...props} />
                </Layout>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/profile"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <Profile {...props} currentUser={this.state.currentUser} />
                </Layout>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/upload"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <CreatePost {...props} currentUser={this.state.currentUser} />
                </Layout>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/edit/:post_id"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <UpdatePost {...props} currentUser={this.state.currentUser} />
                </Layout>
              )}
            />
          </Switch>
        )}
      </main>
    )
  }
}

export default withRouter(App)
