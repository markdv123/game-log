import React from 'react'

const GameCard = (props) => (
  <div className="row">
    <div className="col s12">
      <div className="card">
        <div className="card-image">
          <img alt="game-image" src={props.image} />
          {/* <span className="card-title">{props.name}</span> */}
      </div>
          <div className="card-content">
            <h5>{props.name}</h5>
          </div>
          <div className="card-action">
            <a className="waves-effect waves-light btn" onClick={props.onClick}>View Game Page</a>
          </div>
        </div>
      </div>
    </div>
)

export default GameCard
