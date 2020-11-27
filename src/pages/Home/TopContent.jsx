import React from 'react';
import { Col, Row } from 'antd';
import './Content.scss';
import Slider from "react-slick";

export default function TopContent(props) {

    const settings_top_content = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    const arrData = ["images/2909.jpg", "images/2909.jpg", "images/2909.jpg", "images/2909.jpg", "images/2909.jpg", "images/2909.jpg"]

    return (
        <div>
            <div class='top-content'>
                <Row gutter={24}>
                    <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                        <Slider {...settings_top_content}>
                           {
                               () => arrData.map((item, index) => {
                                   return (
                                    <div>
                                        <a href='#'><img alt='#' key={index} src={item}></img></a>
                                    </div>
                                   );
                               })
                           }
                        </Slider>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>

                    </Col>
                </Row>
            </div>
        </div>
    );
}

