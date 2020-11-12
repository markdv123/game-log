import React from 'react'

const GameCard = (props) => (
  <div className="card game-card" onclick={props.onClick}>
    <div className="img-wrapper">
      <img alt="game-image" src={props.image} />
    </div>
    <div className="info-wrapper flex-col">
      <h3>{props.name}</h3>
      <p>{props.rating}</p>
    </div>
  </div>
)

export default GameCard
