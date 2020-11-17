import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://cdn02.nintendo-europe.com/media/images/10_share_images/portals_3/SI_Hub_Zelda_Portal.jpg" />
                </div>
                <div>
                    <img src="https://media.comicbook.com/2020/05/the-legend-of-zelda-breath-of-the-wild-2-1219330-1280x0.jpeg" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81MSTWBZr6L.jpg" />
                </div>
            </Carousel>
        );
    }
};
 