import React from 'react';
import { Tabs, Row, Col, Button, Checkbox } from 'antd';
import HeaderX from '../../layout/HeaderX/HeaderX.js';
import FooterX from '../../layout/Footer/FooterX.js';
import './style.scss';
import { DeleteOutlined, PlusCircleOutlined, YoutubeOutlined, HeartOutlined, SendOutlined, ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';
class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state={
        checked:[false, false, false]
    }

    callback(key) {
        console.log(key);
    }

    onChange = e => {
        console.log('checked = ', e.target.checked);
        this.setState({
            checked: e.target.checked,
        });
    };

    render() {

        const { TabPane } = Tabs;

        return (
            <div>
                <HeaderX></HeaderX>
                <div class='content-side'>
                    <div class='brand-side'>
                        <img src='images/8732187.png' id='brand-img'></img>
                        <div class='profile-side'>
                            <a href='#'>
                                <img src="images/avatar-default.png" id='ava'></img>
                            </a>
                            <div class='profile-info'>
                                <strong>tel_0906213612</strong>
                                <p>Tài khoản miễn phí</p>
                                <div class='two-button'>
                                    <Button shape='round' type='primary'>Đăng ký Vip</Button>
                                    <Button shape='round' type='primary'>Thay ảnh nền</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='main-content-side'>
                        <Row>
                            <Col xs={2} sm={4} md={6} lg={4} xl={4}>
                            </Col>
                            <Col xs={20} sm={16} md={12} lg={16} xl={16} >
                                <div class='topic'>
                                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                                        <TabPane tab="NHẠC YÊU THÍCH" key="1">
                                            <Row gutter={24}>
                                                <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                                                    <div class='title'>
                                                        <h1>Bài hát yêu thích</h1>
                                                        <a href='#'>
                                                            <SendOutlined />
                                                            <h3>Nghe tất cả</h3>
                                                        </a>
                                                    </div>
                                                    <hr></hr>
                                                    <div class='list-likely-music'>
                                                        <ul>
                                                            <li class='item'>
                                                                <a href='#'><img src='images/24238074.jpg'></img></a>
                                                                <div class='music-name'>
                                                                    <h3>Tình nhân ơi</h3>
                                                                    <p>Superbrothers, Orange, Binz</p>
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
                                                                    <h3>Đừng có mơ</h3>
                                                                    <p>Erik</p>
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
                                                                    <h3>Em có bao giờ</h3>
                                                                    <p>XKey Band</p>
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

                                                        <Button>Xem tất cả</Button>
                                                    </div>
                                                </Col>

                                                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                    <div class='my-playlist'>
                                                        <div class='my-playlist-title'>
                                                            <h1 id='title'>Playlist Của Tôi</h1>
                                                            <a href='#'><PlusCircleOutlined /></a>
                                                        </div>
                                                        <hr>
                                                        </hr>
                                                        <div class='list-playlist'>
                                                            <ul>
                                                                <li class='flex'>
                                                                    <a href='#'><img src="images/26594790.png"></img></a>
                                                                    <p>Playlist1</p>
                                                                    <a href='#' class='auto' ><YoutubeOutlined /></a>
                                                                    <a href='#' class='auto' ><DeleteOutlined /></a>
                                                                </li>
                                                                <hr></hr>
                                                                <li class='flex'>
                                                                    <a href='#'><img src="images/26594790.png"></img></a>
                                                                    <p>Playlist2</p>
                                                                    <a href='#' class='auto' ><YoutubeOutlined /></a>
                                                                    <a href='#' class='auto' ><DeleteOutlined /></a>
                                                                </li>
                                                                <hr></hr>
                                                                <li class='flex'>
                                                                    <a href='#'><img src="images/26594790.png"></img></a>
                                                                    <p>Playlist3</p>
                                                                    <a href='#' class='auto' ><YoutubeOutlined /></a>
                                                                    <a href='#' class='auto' ><DeleteOutlined /></a>
                                                                </li>
                                                                <hr></hr>
                                                                <li class='flex'>
                                                                    <a href='#'><img src="images/26594790.png"></img></a>
                                                                    <p>Playlist4</p>
                                                                    <a href='#' class='auto' ><YoutubeOutlined /></a>
                                                                    <a href='#' class='auto' ><DeleteOutlined /></a>
                                                                </li>
                                                                <hr></hr>
                                                                <Button>Xem tất cả</Button>
                                                            </ul>

                                                        </div>

                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tab="NHẠC ĐÃ NGHE" key="3">

                                            <div class='title'>
                                                <h1>Bài hát yêu thích</h1>
                                                <a href='#'>
                                                    <SendOutlined />
                                                    <h3>Nghe tất cả</h3>
                                                </a>
                                            </div>
                                            <hr></hr>
                                            <div class='list-likely-music'>
                                                <ul>
                                                    <li class='item'>
                                                        <a href='#'><img src='images/24238074.jpg'></img></a>
                                                        <div class='music-name'>
                                                            <h3>Tình nhân ơi</h3>
                                                            <p>Superbrothers, Orange, Binz</p>
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
                                                            <h3>Đừng có mơ</h3>
                                                            <p>Erik</p>
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
                                                            <h3>Em có bao giờ</h3>
                                                            <p>XKey Band</p>
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

                                                <Button>Xem tất cả</Button>
                                            </div>





                                        </TabPane>
                                        <TabPane tab="TÙY CHỌN" key="4">
                                            <div class='liked-artist'>
                                                <div class='title'>
                                                    <h1>Nghệ Sỹ Yêu Thích</h1>
                                                    <a href='#'><PlusCircleOutlined class='d' />Thêm nghệ sỹ yêu thích</a>

                                                </div>
                                                <div class='list-liked-artist'>
                                                    <ul>
                                                        <li>
                                                            <a href='#'><img src='/images/default-avatar-artist.jpg'></img></a>
                                                            <h3>Hồ  Ngọc Hà</h3>
                                                            <p>3,401 người yêu thích</p>
                                                        </li>
                                                        <li>
                                                            <a href='#'><img src='/images/default-avatar-artist.jpg'></img></a>
                                                            <h3>Hồ  Ngọc Hà</h3>
                                                            <p>3,401 người yêu thích</p>
                                                        </li>
                                                        <li>
                                                            <a href='#'><img src='/images/default-avatar-artist.jpg'></img></a>
                                                            <h3>Hồ  Ngọc Hà</h3>
                                                            <p>3,401 người yêu thích</p>
                                                        </li>

                                                    </ul>
                                                </div>

                                            </div>
                                            <br></br>
                                            <div class='liked-music-type'>
                                                <h1>Thể Loại Nhạc Yêu Thích</h1>
                                                <div class='list-music-type'>
                                                    <ul>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Nhạc trẻ</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Trữ Tình</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Rock Việt</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Dân Ca/Nhạc Cổ</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}> Nhạc Trịnh</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Thiếu Nhi</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}> Việt Remix</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Âu Mỹ</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Nhạc Hoa</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}> Nhạc Nhật</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}> Nhạc Hàn</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Nhạc Không Lời</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Thể loại khác</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Cách Mạng</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}>Quê Hương</Checkbox>
                                                        </li>
                                                        <li>
                                                            <Checkbox onChange={this.onChange}> Rap/Hiphop Việt</Checkbox>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </TabPane>
                                    </Tabs>
                                </div>
                            </Col>
                            <Col xs={2} sm={4} md={6} lg={4} xl={4}>
                            </Col>
                        </Row>
                    </div>
                </div>
                <FooterX></FooterX>
            </div>
        )
    }
}


export default UserProfile;