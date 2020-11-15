//componentdidmount queries the rawgapi for a specific game by id or name
//displays info about the game from the api
//
//import createpost router so they can create a new psot
//new post saves the rawg api id and the rawg api game name with post content
//
//import another component that displays all post about the game by querying the posts by game name from my api

import Axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { __GetPostsByGame } from '../services/PostServices'
import Post from '../components/Post'

class GamePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            gameId: props.match.params.game_id,
            gameDetails: {},
            posts: []
        }
    }

    componentDidMount() {
        this.getGameDetails()
        this.getPosts()
    }
    
    getGameDetails = async () => {
        const res = await Axios.get(`https://api.rawg.io/api/games/${this.state.gameId}`)
        this.setState({gameDetails: res.data})
    }

    getPosts = async () => {
        try {
            const response = await __GetPostsByGame(this.state.gameId)
            this.setState({posts: response.posts})
            console.log(this.state)
        } catch (err) {
            throw err
        }
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
                {this.state.posts.map((post) => (
                        <Post
                            onClick={() =>
                                this.props.history.push(`/posts/${post.id}`)
                            }
                            key={post.id}
                            title={post.title}
                            rating={post.rating}
                            image={post.image_url}
                            username={post.username}
                        />
                    ))}
            </div>

        )
    }
}

export default withRouter(GamePage)
