import React, { Component } from 'react';
import { __GetPostsByUsername } from '../services/PostServices'
import Post from '../components/Post'

class ViewUser extends Component {
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
            const response = await __GetPostsByUsername(this.props.match.params.username)
            console.log(response)
            this.setState({posts: response.posts})
        } catch (err) {
            throw err
        }
    }

   render() {
       return (
       <div className="viewUser">
           <h1>{this.props.match.params.username}</h1>
           <h4>Posts:</h4>
           <section className="user-posts">
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

export default ViewUser