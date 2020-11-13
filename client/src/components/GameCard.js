import React from 'react'
import '../styles/materialize.css'

const GameCard = (props) => (
  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img alt="game-image" src={props.image} />
          <span class="card-title">{props.name}</span>
      </div>
          <div class="card-content">
            <p>some sort of description will go here</p>
          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn" onClick={props.onClick}>View Game Page</a>
          </div>
        </div>
      </div>
    </div>
)

export default GameCard
