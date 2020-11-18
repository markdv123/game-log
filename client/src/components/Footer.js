import React, { Component } from 'react';

class Footer extends Component {
   render() {
       return (
        <footer className="page-footer teal lighten-1">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">GameLog</h5>
              <p className="grey-text text-lighten-4">Let everyone know about your favorite games by logging them in your profile! This site makes it easy to share recommendations with all your friends!</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://github.com/markdv123/untitled-p2">Github Repo</a></li>
                <li><a className="grey-text text-lighten-3" href="https://github.com/markdv123">My Github</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/markdv123/">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright teal">
          <div className="container">
          Deployed Nov 2020
          </div>
        </div>
      </footer>
       )
   }
}

export default Footer