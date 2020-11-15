import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __GetPost, __UpdatePost } from '../services/PostServices'
export default class UpdatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
        title: '',
        game_id: '',
        game_name: '',
        description: '',
        rating: null,
        image_url: '',
        developer: '',
        username: '',
        user_id: ''
    }
  }

  componentDidMount() {
    this.getPost()
  }

  getPost = async () => {
    try {
      const post = await __GetPost(this.props.match.params.post_id)
      this.setState({
        title: post.title,
        game_id: post.game_id,
        game_name: post.game_name,
        description: post.description,
        rating: post.rating,
        image_url: post.image_url,
        developer: post.developer,
        username: post.username,
        user_id: post.user_id
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async () => {
    try {
      await __UpdatePost(this.state, this.props.match.params.post_id)
      console.log('updated')
      this.props.history.push(`/posts/${this.props.match.params.post_id}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { title, rating, description } = this.state
    return (
        <div className="row">
        <form className="col s12">
            <div className="row">
                <TextInput
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                />
            </div>
            <div className="row">
                <TextInput
                    placeholder="Rating out of 10"
                    name="rating"
                    value={rating}
                    onChange={this.handleChange}
                />
            </div>
            <div className="row input-field">
                <TextInput
                    fieldType="textfield"
                    placeholder="Post Content"
                    name="description"
                    value={description}
                    onChange={this.handleChange}
                />
            </div>
            <a class="waves-effect waves-light btn" onClick={() => {this.handleSubmit()}}><i class="material-icons left">add</i>Update Post</a>
        </form>
    </div>
    )
  }
}