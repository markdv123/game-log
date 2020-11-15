//needs to display user info and posts by this user

import React, { Component } from 'react'
import { __GetPostsByUsername } from '../services/PostServices'
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
            const response = await __GetPostsByUsername(this.props.currentUser._id)
            this.setState({posts: response.posts})
            console.log(this.state)
        } catch (err) {
            throw err
        }
    }

    render() {
        return (
            <div>
                <h1>Profile Page</h1>
                <section className="profile-posts">
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
                </section>
            </div>
        )
    }
}

export default withRouter(Profile)