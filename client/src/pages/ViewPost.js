import React, { Component } from 'react'
import { __CreateComment, __GetCommentsByPost } from '../services/CommentServices'
import { __GetPost, __DeletePost } from '../services/PostServices'
import Comment from '../components/Comment'
import { withRouter } from 'react-router-dom'
import TextInput from '../components/TextInput'

class ViewPost extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)
    this.state = {
      post: {},
      currentUser: this.props.currentUser,
      comments: [],
      comment: ''
    }
  }

  componentDidMount() {
    this.getPost()
    this.getComments()
    console.log('comments', this.state.comments)
  }

  getPost = async () => {
    try {
      const thePost = await __GetPost(this.props.match.params.post_id)
      // console.log(thePost.title)
      this.setState({ post: thePost })
    } catch (error) {
      console.log(error)
    }
  }

  getComments = async () => {
    try {
      const theComments = await __GetCommentsByPost(this.props.match.params.post_id)
      this.setState({ comments: theComments })
    } catch (error) {
      throw error
    }
  }

  deletePost = () => {
    __DeletePost(this.state.post._id)
    this.props.history.push('/profile')
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  addComment = async () => {
    try {
      await __CreateComment(this.state.comment, this.state.post._id, this.state.currentUser)
    } catch (error) {
      throw error
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
    const { post, comments, comment } = this.state
    console.log('post', this.state.post)
    return (
      <div className="viewPost">
        <h3>{post.title}</h3>
        <h5>Rating: {post.rating}/10</h5>
        <p>{post.description}</p>
        <a className="waves-effect waves-light btn" style={{ 'marginLeft': '10px' }} onClick={() => { this.props.history.push(`/edit/${this.props.match.params.post_id}`) }}><i class="material-icons left">edit</i>Edit Post</a>
        <a className="waves-effect waves-light btn" style={{ 'marginLeft': '10px' }} onClick={() => { this.deletePost() }}><i class="material-icons left">delete</i>Delete Post</a>
        <div className="row input-field">
          <TextInput
            fieldType="textfield"
            placeholder="Comment"
            name="comment"
            value={comment}
            onChange={this.handleChange}
          />
          <a className="waves-effect waves-light btn" onClick={() => { this.addComment() }}><i class="material-icons left">add</i>Comment</a>
        </div>
        <h5>Comments:</h5>
        <ul>
          {comments.map((comment) => (
            <li><Comment key={comment._id} comment={comment.comment} user={comment.username} /></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(ViewPost)