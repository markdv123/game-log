import Axios from 'axios'
import React, { Component } from 'react'
import GameCard from '../components/GameCard'


export default class Discover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    const res = await Axios.get(`https://api.rawg.io/api/games`)
    this.setState({games: res.data.results})
  }

  render() {
    return (
      <div>
        <div className="discover">
          <h4>Popular Games:</h4>
        </div>
        <div className="discover-games">
        {this.state.games.map((game) => (<GameCard onClick={()=> this.props.history.push(`/GamePage/${game.id}`)} key={game.id} image={game.background_image} name={game.name} rating={game.rating}/>))}
        </div>
        
      </div>
    )
  }
}