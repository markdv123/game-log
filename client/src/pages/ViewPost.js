import React, { Component } from 'react'
import { __GetPost } from '../services/PostServices'

export default class ViewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    this.getPost()
  }

  getPost = async () => {
    try {
      const thePost = await __GetPost(this.props.match.params.post_id)
      console.log(thePost.title)
      this.setState({ post: thePost })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { post } = this.state
    return (
      <div>
        <h3>{post.title}</h3>
        <a class="waves-effect waves-light btn" onClick={() => {this.props.history.push(`/edit/${this.props.match.params.post_id}`)}}><i class="material-icons left">edit</i>Edit Post</a>
      </div>
    )
  }
}
