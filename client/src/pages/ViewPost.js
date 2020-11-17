import React, { Component } from 'react'
import { __CreateComment, __GetCommentsByPost } from '../services/CommentServices'
import { __GetPost, __DeletePost } from '../services/PostServices'
import Comment from '../components/Comment'
import { withRouter } from 'react-router-dom'
import TextInput from '../components/TextInput'
import ImgUploader from '../components/ImgUploader'

class ViewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {},
      currentUser: this.props.currentUser,
      comments: [],
      com: ''
    }
  }

  componentDidMount() {
    this.getPost()
    this.getComments()
  }

  getPost = async () => {
    try {
      const thePost = await __GetPost(this.props.match.params.post_id)
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
    this.setState({ com: target.value })
  }

  addComment = async () => {
    const comment = { comment: this.state.com }
    const postId = this.state.post._id
    const username = this.state.currentUser.username
    try {
      await __CreateComment(comment, postId, username)
    } catch (error) {
      console.log(error)
    }
  }

  showButton(post) {
    if(post.user_id && this.state.currentUser){
      return this.state.currentUser._id === post.user_id._id ? (
        <div>
          <a className="waves-effect waves-light btn" style={{ 'marginLeft': '10px' }} onClick={() => { this.props.history.push(`/edit/${this.props.match.params.post_id}`) }}><i class="material-icons left">edit</i>Edit Post</a>
          <a className="waves-effect waves-light btn" style={{ 'marginLeft': '10px' }} onClick={() => { this.deletePost() }}><i class="material-icons left">delete</i>Delete Post</a>
          <ImgUploader post_id={this.state.post._id}/>
        </div>
      ) : null
    }else{
      return null
    }
  }

  render() {
    const { post, comments, com } = this.state
    return (
      <div className="viewPost">
        <h3>{post.title}</h3>
        <h5>Rating: {post.rating}/10</h5>
        <p>{post.description}</p>
        {this.showButton(post)}
        <div className="row input-field">
          <TextInput
            fieldType="textfield"
            placeholder="Comment"
            name="comment"
            value={com}
            onChange={this.handleChange}
          />
          <a className="waves-effect waves-light btn" onClick={() => { this.addComment() }}><i class="material-icons left">add</i>Comment</a>
        </div>
        <h5>Comments:</h5>
        <ul>
          {comments.map((comm) => (
            <li><Comment key={comm._id} comment={comm.comment} user={comm.username} /></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(ViewPost)