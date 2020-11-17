import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ApiClient from '../services/ApiClient';
import { __GetImages } from '../services/ImageServices';
 
export default class MyCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post_id: this.props.post_id,
            game_image: this.props.img_url,
            imgs: []
        }
    }

    componentDidMount(){
        this.getImages()
    }

    getImages = async () => {
        const images = await __GetImages(this.state.post_id)
        this.setState({imgs: images})
    }

    render() {
        const {imgs} = this.state
        console.log('game image', this.state.game_image)
        console.log('props', this.props)
        return (
            <Carousel>
                <div>
                    <img src={this.state.game_image} />
                </div>
                {imgs.map((image) => {
                    console.log(image)
                    return(
                    <div>
                        <img src={image} />
                    </div>
                )})}
            </Carousel>
        );
    }
};
 