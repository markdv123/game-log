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
                <h1 style={{marginLeft: '10px'}}>{gameDetails.name}</h1>
                <a 
                    class="waves-effect waves-light btn"
                    style={{marginLeft: '20px'}} 
                    onClick={() => {
                        this.props.history.push(`/upload/${gameDetails.id}`)
                    }}><i class="material-icons left">add</i>Create Post</a>
                {this.state.posts.map((post) => (
                        <Post
                            onClick={() =>
                                this.props.history.push(`/posts/${post._id}`)
                            }
                            key={post._id}
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
