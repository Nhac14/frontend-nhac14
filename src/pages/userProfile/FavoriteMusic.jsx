import React, { useState } from 'react';
import { Col, Button, Checkbox } from 'antd';
import { DeleteOutlined, PlusCircleOutlined, YoutubeOutlined, HeartOutlined, SendOutlined, ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';

const FavoriteMusic = ({ }) => {
    return (
        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
            <div class='title'>
                <h1 class='color-white'>Bài hát yêu thích</h1>
                <a href='#'>
                    <SendOutlined />
                    <h3 class='color-white'>Nghe tất cả</h3>
                </a>
            </div>
            <hr></hr>
            <div class='list-likely-music'>
                <ul>
                    <li class='item'>
                        <a href='#'><img src='images/24238074.jpg'></img></a>
                        <div class='music-name'>
                            <h3 class='color-white'>Tình nhân ơi</h3>
                            <p class='color-wheat'>Superbrothers, Orange, Binz</p>
                        </div>

                        <ul>
                            <li><a href='#'><YoutubeOutlined class='a' /></a></li>
                            <li><a href='#'><HeartOutlined class='b' /></a></li>
                            <li><a href='#'><ShareAltOutlined class='c' /></a></li>
                            <li><a href='#'><PlusCircleOutlined class='d' /></a></li>
                            <li><a href='#'><DownloadOutlined class='e' /></a></li>
                        </ul>
                    </li>
                    <hr></hr>
                    <li class='item'>
                        <a href='#'><img src='images/24229140.jpg'></img></a>
                        <div class='music-name'>
                            <h3 class='color-white'>Đừng có mơ</h3>
                            <p class='color-wheat'>Erik</p>
                        </div>
                        <ul>
                            <li><a href='#'><YoutubeOutlined class='a' /></a></li>
                            <li><a href='#'><HeartOutlined class='b' /></a></li>
                            <li><a href='#'><ShareAltOutlined class='c' /></a></li>
                            <li><a href='#'><PlusCircleOutlined class='d' /></a></li>
                            <li><a href='#'><DownloadOutlined class='e' /></a></li>
                        </ul>
                    </li>
                    <hr></hr>
                    <li class='item'>
                        <a href='#'><img src='images/24114665.jpg'></img></a>
                        <div class='music-name'>
                            <h3 class='color-white'>Em có bao giờ</h3>
                            <p class='color-wheat'>XKey Band</p>
                        </div>
                        <ul>
                            <li><a href='#'><YoutubeOutlined class='a' /></a></li>
                            <li><a href='#'><HeartOutlined class='b' /></a></li>
                            <li><a href='#'><ShareAltOutlined class='c' /></a></li>
                            <li><a href='#'><PlusCircleOutlined class='d' /></a></li>
                            <li><a href='#'><DownloadOutlined class='e' /></a></li>
                        </ul>
                    </li>
                    <hr></hr>

                </ul>
                <br></br>

                <Button class='color-white'>Xem tất cả</Button>
            </div>
        </Col>
    );
}

export default FavoriteMusic;