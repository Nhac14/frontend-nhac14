import React from 'react';
import { Row, Col } from 'antd';
import { FacebookOutlined, AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import './style.css';

function Footer() {

    return (
        <div className='wrapper'>
            <Row>
                <Col xs={2} sm={4} md={6} lg={4} xl={4}>

                </Col>
                <Col xs={20} sm={16} md={12} lg={16} xl={16} className='footer-top'>
                    <div className='info'>
                        <ul>
                            <li><h3>Thông Tin</h3></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Điều khoản sử dụng</a></li>
                            <li><a href="#">Quyền riêng tư</a></li>
                        </ul>
                    </div>
                    <div className='musics'>
                        <ul>
                            <li><h3>Bài hát</h3></li>
                            <li><a href="#">Album</a></li>
                            <li><a href="#">Hotlist</a></li>
                        </ul>
                    </div>
                    <div className='rank'>
                        <ul>
                            <li><h3>BXH</h3></li>
                            <li><a href="#">MV</a></li>
                            <li><a href="#">Nghệ sỹ</a></li>
                        </ul>
                    </div>
                    <div className='connect-us'>
                        <ul>
                            <li><h3>Kết nối với chúng tôi</h3></li>
                            <li><a href="#"><FacebookOutlined /></a></li>
                        </ul>
                    </div>
                    <div className='download-app'>
                        <ul>
                            <li><h3>Tải ứng dụng</h3></li>
                            <li><a href="#">Dịch vụ nhac.vn đã có ứng dụng choMobile, Smart TV</a></li>
                            <li>
                                <img src='/images/icon-code-bottom.png'></img>
                                <div>
                                    <div className='ios'>
                                        <AppleOutlined />
                                        <a href='#'><span> | Tải cho iphone</span></a>
                                    </div>
                                    <div className='android'>
                                        <AndroidOutlined />
                                        <a href='#'><span> | Tải cho android</span></a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className='association'>
                        <ul>
                            <li><h3>Liên kết</h3></li>
                            <li><a href="#">Hopamchuan.com</a></li>
                            <li><a href="#">tudienwiki.com</a></li>
                            <li><a href="#">thuthuattienich.com</a></li>
                            <li><a href="#">blogradio.vn</a></li>
                            <li><a href="#">Lendbox.vn</a></li>
                        </ul>
                    </div>
                    <div className='footer-bottom'>
                        <hr></hr>
                        <div>
                            <Row>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <div className='icon-nhacvn-bot'>
                                        <a href='#'><img src='/icons/bottom-logo.png'></img></a>
                                    </div>
                                </Col>
                                <Col xs={15} sm={15} md={15} lg={15} xl={15}>
                                    <div className='note-message'>
                                        <p>Cơ quan chủ quản Công ty Cổ phần Bạch Minh - Địa chỉ: P804, Tòa nhà VET, 98 Hoàng Quốc Việt, Hà Nội
                                        Email: Nhac@vega.com.vn Tel: 024 37554190 - Người chịu trách nhiệm nội dung: Ông Lê Hữu Toàn
                                    Giấy phép MXH số 311/GP-BTTTT do Bộ Thông Tin và Truyền thông cấp ngày 04/07/2017 © 2015 Vega Corporation</p>
                                    </div>
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>

                                    <div className='notified'>
                                        <img src='/icons/dathongbao.png'></img>
                                    </div>
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>

                                    <div className='dmca'>
                                        <img src='/icons/dmca_protected_sml_120h.png'></img>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                    </div>

                </Col>

                <Col xs={2} sm={4} md={6} lg={4} xl={4}>

                </Col>
            </Row>
        </div>
    )
}

export default Footer;