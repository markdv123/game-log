//componentdidmount queries the rawgapi for a specific game by id or name
//displays info about the game from the api
//
//import createpost router so they can create a new psot
//new post saves the rawg api id and the rawg api game name with post content
//
//import another component that displays all post about the game by querying the posts by game name from my api

import Axios from 'axios'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class GamePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            gameId: props.match.params.game_id,
            gameDetails: {},
        }
    }

    componentDidMount() {
        this.getGameDetails()
    }
    
    getGameDetails = async () => {
        const res = await Axios.get(`https://api.rawg.io/api/games/${this.state.gameId}`)
        this.setState({gameDetails: res.data})
    }

    render() {
        const {gameDetails} = this.state
        return (
            <div>
                <h1>{gameDetails.name}</h1>
                <a 
                    class="waves-effect waves-light btn" 
                    onClick={() => {
                        this.props.history.push(`/upload/${gameDetails.id}`)
                    }}><i class="material-icons left">add</i>Create Post</a>
            </div>

        )
    }
}

export default withRouter(GamePage)
