//needs to display user info and posts by this user

import React, { Component } from 'react'
import { __GetPostsByUserId } from '../services/PostServices'
import Post from '../components/Post'
import { withRouter } from 'react-router-dom'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = async () => {
        try {
            const response = await __GetPostsByUserId(this.props.currentUser._id)
            this.setState({ posts: response.posts })
        } catch (err) {
            throw err
        }
    }

    render() {
        return (
            <div className="profile">
                <h1>My Profile</h1>
                <h4>Username: {this.props.currentUser.username}</h4>
                <h4>My Posts:</h4>
                <section className="profile-posts">
                    {this.state.posts.map((post) => (
                        <Post
                            className="eachPost"
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
                </section>
            </div>
        )
    }
}

export default withRouter(Profile)