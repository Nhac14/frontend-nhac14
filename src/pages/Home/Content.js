import React from 'react';
import { Carousel, Col, Row } from 'antd';
import './Content.scss';
import Slider from "react-slick";
import { PlayCircleOutlined } from '@ant-design/icons';
import TopContent from './TopContent';
import AlbumSlide from './AlbumSlide';
import PartnerSlide from './PartnerSlide';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

    }

    onChange(a, b, c) {
        console.log(a, b, c);
        //this.slider.slickPlay();
    }


    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };

        return (
            <div>
                <div class='content-side'>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={4} xl={4}>

                        </Col>
                        <Col xs={20} sm={16} md={12} lg={16} xl={16}>
                            <div class='wrapper'>
                                <TopContent />
                                <div>
                                    <h1>Playlist cho hôm nay</h1>
                                    <AlbumSlide />
                                </div>
                                <div class='main-content'>
                                    <Row gutter={24}>
                                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                                            <div class='left-side'>
                                                <div class='albums'>
                                                    <ul>
                                                        <li><h1>Album</h1></li>
                                                        <li><h2>Nghe nhiều</h2></li>
                                                        <li><h2>Mới nhất</h2></li>
                                                    </ul>
                                                </div>
                                                <div class='list-album'>
                                                    <Row gutter={16}>
                                                        <Col span={6}>
                                                            <div>
                                                                <a><img src='/images/26573415.jpg'></img></a>
                                                                <p>Rap Việt 2020</p>
                                                            </div>
                                                        </Col>
                                                        <Col span={6}>
                                                            <div>
                                                                <a><img src='/images/26573448.jpg'></img></a>
                                                                <p>King Of Rap 2020</p>
                                                            </div>
                                                        </Col>
                                                        <Col span={6}>
                                                            <div>
                                                                <a><img src='/images/222.jpg'></img></a>
                                                                <p>Tuyệt phẩm 30 bài hát nhạc Bolero trữ tình hay nhất mọi thời đại</p>
                                                            </div>
                                                        </Col>
                                                        <Col span={6}>
                                                            <div>
                                                                <a><img src='/images/19939321.jpg'></img></a>
                                                                <p>Những Bài Hát Dành Cho Người Thứ Ba</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row gutter={16}>
                                                        <Col span={6}>
                                                            <div>
                                                                <a><img src='/images/124.jpg'></img></a>
                                                                <p>Những Bài Hát Hay Nhất Của Sơn Tùng M-TP</p>
                                                            </div>
                                                        </Col>
                                                        <Col span={6}>
                                                            <div>
                                                                <a><img src='/images/217782.jpg'></img></a>
                                                                <p>Top 50 Bài Hát Trữ Tình Được Nghe Nhiều Nhất 2020</p>
                                                            </div>
                                                        </Col>
                                                        <Col span={6}>
                                                            <div>
                                                                <a><img src='/images/19852120.jpg'></img></a>
                                                                <p>Những Bài Hát Hay Nhất Của Hương Lan</p>
                                                            </div>
                                                        </Col>
                                                        <Col span={6}>
                                                            <div>
                                                                <a><img src='/images/371.jpg'></img></a>
                                                                <p>Những Bài Hát Song Ca Bolero Hay Nhất (Vol.1)</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div class='list-music-video'>
                                                    <div class='title-music-video'>
                                                        <ul>
                                                            <li><h1>Music Video</h1></li>
                                                            <li><h2>Nghe nhiều</h2></li>
                                                            <li><h2>Mới nhất</h2></li>
                                                        </ul>
                                                    </div>
                                                    <div class='music-video-content'>
                                                        <Row gutter={16}>
                                                            <Col span={12}>
                                                                <div class='relative'>
                                                                    <a><img src='/images/53885.jpg'></img></a>
                                                                    <div class='duration-video'>
                                                                        04:10
                                                                </div>

                                                                </div>
                                                                <p>Em Mới Là Người Yêu Anh</p>
                                                                <p>MIN</p>
                                                            </Col>
                                                            <Col span={12}>
                                                                <div class='relative'>
                                                                    <a><img src='/images/68331.jpg'>
                                                                    </img></a>
                                                                    <div class='duration-video'>
                                                                        04:35
                                                                </div>

                                                                </div>
                                                                <p>Chờ Người Một Đời</p>
                                                                <p>Thanh Lan (Phạm)</p>
                                                            </Col>
                                                        </Row>
                                                        <br></br>
                                                        <Row gutter={16}>
                                                            <Col span={6}>
                                                                <div class='relative'>
                                                                    <a><img src='/images/46604.jpg'>
                                                                    </img></a>
                                                                    <div class='duration-video'>
                                                                        07:15
                                                                </div>

                                                                </div>
                                                                <p>Cả Một Trời Thương Nhớ</p>
                                                                <p>Hồ Ngọc Hà</p>
                                                            </Col>
                                                            <Col span={6}>
                                                                <div class='relative'>
                                                                    <a><img src='/images/69486.jpg'>
                                                                    </img></a>
                                                                    <div class='duration-video'>
                                                                        03:55
                                                                </div>


                                                                </div>
                                                                <p>Hãy Cười (Funk Version)</p>
                                                                <p>Y Thanh</p>
                                                            </Col>
                                                            <Col span={6}>
                                                                <div class='relative'>
                                                                    <a><img src='/images/69525.jpg'>
                                                                    </img></a>
                                                                    <div class='duration-video'>
                                                                        04:35
                                                                </div>

                                                                </div>
                                                                <p>Điệu Ru Mòn Mỏi</p>
                                                                <p>Hồ Hán Dân</p>
                                                            </Col>
                                                            <Col span={6}>
                                                                <div class='relative'>
                                                                    <a><img src='/images/62038.jpg'>
                                                                    </img></a>
                                                                    <div class='duration-video'>
                                                                        04:14
                                                                </div>

                                                                </div>
                                                                <p>Người Tình Mùa Đông</p>
                                                                <p>Hà Anh Tuấn</p>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div class='new-release-music'>
                                                    <h1>Bài hát mới phát hành</h1>
                                                    <hr></hr>
                                                    <Row gutter={16}>
                                                        <Col span={12}>
                                                            <ul>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/637.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Một Là Cưới Hai Là Chia Tay</h3>
                                                                        <p>Mr.A, Dương Edward</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/253867.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Trăng Mờ (Duyên Trời Lấy 3)</h3>
                                                                        <p>Chung Thanh Duy, Masew</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/32899.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Người Ơi Người Ở Đừng Về</h3>
                                                                        <p>Đức Phúc</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/9145.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Cá Cắn Câu</h3>
                                                                        <p>MLee</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/4824.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Bao Giờ Đủ Lớn</h3>
                                                                        <p>Khắc Hưng, ERIK</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                        <Col span={12}>
                                                            <ul>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/1322.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Thế Thái</h3>
                                                                        <p>Hương Ly</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/40696.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Boy Mỹ Con</h3>
                                                                        <p>BRay</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/240979.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Lost</h3>
                                                                        <p>Obito</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/102467.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>Sugar Baby</h3>
                                                                        <p>Osad</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                                <li>
                                                                    <div class='col1'>
                                                                        <a><img src='/images/637.jpg'></img></a>
                                                                    </div>
                                                                    <div class='col2'>
                                                                        <h3>I'LL NEVER FALL IN LUV AGAIN</h3>
                                                                        <p>Mr.A, Dương Edward</p>
                                                                    </div>
                                                                    <hr></hr>
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                        <Col span={12}>
                                                        </Col>

                                                    </Row>
                                                </div>
                                                <br></br>
                                                <div class='top-artist'>
                                                    <div>
                                                        <h1>Nghệ Sĩ Nổi Bật</h1>
                                                    </div>
                                                    <div>
                                                        <Row gutter={[16, 16]}>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/5542.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/19291.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/27685.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/28.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/37204.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/215.jpg'></img></a>
                                                            </Col>
                                                        </Row>
                                                        <Row gutter={[16, 16]}>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/166.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/1034.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/129.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/37.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/27685.jpg'></img></a>
                                                            </Col>
                                                            <Col span={4}>
                                                                <a href='#'><img src='/images/28.jpg'></img></a>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <div class='right-side'>
                                                <div class='title-music-rank'>
                                                    <h1>BXH Bài Hát</h1>
                                                    <a>Việt Nam</a>
                                                    <span> / </span>
                                                    <a>Âu Mỹ</a>
                                                    <span> / </span>
                                                    <a>Hàn Quốc </a>
                                                    <a href='#'><PlayCircleOutlined /></a>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div class='music-rank'>
                                                <ul>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>1</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Thể Thái</h3>
                                                            <p>Hương Ly</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>2</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Hành Tịnh Ánh Sáng</h3>
                                                            <p>Vũ Cát Tường</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>3</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Một mình có buồn không</h3>
                                                            <p>Thiều Bảo Trâm, Lou Hoàng</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>4</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Nói chia tay thật khó</h3>
                                                            <p>Thùy Chi, Trấn Thành</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>5</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Thiên Đàng</h3>
                                                            <p>Woywy</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>6</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Đúng cũn thành sai</h3>
                                                            <p>Mỹ Tâm</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>7</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>021</h3>
                                                            <p>Binz, Touliver</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>8</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Hoa Hải Đường</h3>
                                                            <p>Jack (J97)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>9</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Vợ Ơi</h3>
                                                            <p>Lê Bảo Bình</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class='rank'>
                                                            <span>10</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Stream đến bao giờ</h3>
                                                            <p>Độ Mixi</p>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div class='title-MV-rank'>
                                                <div>
                                                    <h1>BXH MV</h1>
                                                    <a>Việt Nam</a>
                                                    <span> / </span>
                                                    <a>Âu Mỹ</a>
                                                    <span> / </span>
                                                    <a>Hàn Quốc </a>
                                                    <a href='#'><PlayCircleOutlined /></a>
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>1</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Thể Thái</h3>
                                                                <p>Hương Ly</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>2</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Hành Tịnh Ánh Sáng</h3>
                                                                <p>Vũ Cát Tường</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>3</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Một mình có buồn không</h3>
                                                                <p>Thiều Bảo Trâm, Lou Hoàng</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>4</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Nói chia tay thật khó</h3>
                                                                <p>Thùy Chi, Trấn Thành</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>5</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Thiên Đàng</h3>
                                                                <p>Woywy</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>6</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Đúng cũn thành sai</h3>
                                                                <p>Mỹ Tâm</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>7</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>021</h3>
                                                                <p>Binz, Touliver</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>8</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Hoa Hải Đường</h3>
                                                                <p>Jack (J97)</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>9</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Vợ Ơi</h3>
                                                                <p>Lê Bảo Bình</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div class='rank'>
                                                                <span>10</span>
                                                            </div>
                                                            <a href='#'>
                                                                <h3>Stream đến bao giờ</h3>
                                                                <p>Độ Mixi</p>
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    <PartnerSlide/>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={4} xl={4}>

                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}
export default Content;