import React, { Component } from 'react'
import { __GetPost } from '../services/PostServices'

export default class ViewPost extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)
    this.state = {
      post: {},
      currentUser: this.props.currentUser
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

  // showButton(post) {
  //   console.log('post', post)
  //   if(post){
  //     if(this.state.currentUser._id === post.user_id){
  //       console.log('did it')
  //       console.log(post.user_id)
  //       //cant find post.user_id probably???
  //       return ('hello')
  //       // return (<a class="waves-effect waves-light btn" onClick={() => {this.props.history.push(`/edit/${this.props.match.params.post_id}`)}}><i class="material-icons left">edit</i>Edit Post</a>)
  //     }
  //   }else{
  //     return (<h1>hello</h1>)
  //   }
  // }

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
