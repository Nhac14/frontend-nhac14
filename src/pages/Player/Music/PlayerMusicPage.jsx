import React, { useState, useEffect } from 'react';
import { Carousel, Col, Row } from 'antd';

import '../../../resources/common.css';
import './style.scss';
import MusicPlayer from './MusicPlayer';


const PlayerMusicPage = ({ }) => {

    return (
        <div className="content-side">

            <Row>
                <Col xs={2} sm={4} md={6} lg={4} xl={4}>
                </Col>

                <Col xs={20} sm={16} md={12} lg={16} xl={16}>
                    <div className='main-content'>
                        <Row gutter={24}>
                            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                                <div className='left-side'>


                                    <div className="infor-music">
                                        <h1 className="hd-white">Đời là thế thôi</h1>
                                        <p>Thể loại: <span className="hd-white"> Nhạc trẻ</span></p>
                                        <h4 className="hd-white">Đôi khi bạn sống quá phức tạp thì mọi thứ dường như rất khó
                                        khăn nhưng bạn nên nghĩ thoáng hơn vì sống đơn giản cũng có thể
                                        cực chất cực ngầu. Hãy để Nhac.vn tạo thêm màu sắc cho bạn qua
                                        Playlist Sống Đơn Giản Nhưng Cực Chất này nhé</h4>
                                    </div>

                                    <MusicPlayer/>
                                </div>
                            </Col>

                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                <div className='right-side'>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={2} sm={4} md={6} lg={4} xl={4}>
                </Col>
            </Row>
        </div>);
}

export default PlayerMusicPage;