import Axios from 'axios'
import React, { Component } from 'react'
import GameCard from '../components/GameCard'


export default class ViewGames extends Component {
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
    const res = await Axios.get(`https://api.rawg.io/api/games?dates=2020-01-01,2020-10-31&ordering=-added`)
    this.setState({games: res.data.results})
  }

  render() {
    return (
      <div className="container-grid">
        {this.state.games.map((game) => (<GameCard onClick={()=> this.props.history.push(`/games/details/${game.id}`)} key={game.id} image={game.background_image} name={game.name} rating={game.rating}/>))}
        
      </div>
    )
  }
}