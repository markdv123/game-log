import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UploadPost } from '../services/PostServices'
import Axios from 'axios'

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            game_id: props.match.params.game_id,
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
        this.getGameDetails()
        console.log(this.props.currentUser.username)
    }

    getGameDetails = async () => {
        const res = await Axios.get(`https://api.rawg.io/api/games/${this.state.game_id}`)
        this.setState({
            game_name: res.data.name,
            image_url: res.data.background_image,
            developer: res.data.developers[0].name,
            username: this.props.currentUser.username,
            user_id: this.props.currentUser._id
        })
        console.log(res)
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = async () => {
        try {
            await __UploadPost(this.state, this.props.currentUser.username)
            this.props.history.push('/profile')
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const { title, description, rating } = this.state
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
                    <a class="waves-effect waves-light btn" onClick={() => {this.handleSubmit()}}><i class="material-icons left">add</i>Submit Post</a>
                </form>
            </div>
        )
    }
}

export default CreatePost