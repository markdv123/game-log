import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetPost } from '../services/PostServices'

export default class ViewPost extends Component {
  constructor() {
    super()
    this.state = {
      post: null
    }
  }

  componentDidMount() {
    this.getPost()
  }

  getPost = async () => {
    try {
      const post = await __GetPost(this.props.match.params.post_id)
      this.setState({ post })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { post } = this.state
    if (post) {
      return (
        <div className="posts">
          
        </div>
      )
    }
    return <h3>Loading...</h3>
  }
}
