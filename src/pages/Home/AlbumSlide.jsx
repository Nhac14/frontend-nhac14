import React from 'react';
import { Carousel, Col, Row } from 'antd';
import './Content.scss';
import Slider from "react-slick";


function AlbumSlide() {

    const arrData = ["/images/371.jpg", "/images/371.jpg", "/images/371.jpg", "/images/371.jpg", "/images/371.jpg", "/images/371.jpg"];

    const settings_playlist = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
    };

    return (
        <div className='playlist'>
            <h1 className="hd-white">Playlist cho hôm nay</h1>
            <Slider {...settings_playlist}>
                {arrData.map((item, index) => {
                    return (
                        <div className="playlist-slider-item">
                            <a href='#'><img key={index} src={item}></img></a>
                        </div>
                    )

                })}

            </Slider>
        </div>
    )
}

export default AlbumSlide;