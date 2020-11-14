import React from 'react';
import {Menu, Dropdown, Row, Col} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
import '../resources/css/Header.css';

class HeaderX extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        const topic_menu = (
            <div class='topic-menu'>
                <br></br>
                <Row>
                    <Col span={8}>
                        <a href="#">NỔI BẬT</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">NGHE NHIỀU</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">CÓ THỂ BẠN THÍCH</a>
                    </Col>
                </Row>
                <hr></hr>
            
                <Row>
                    <Col span={8}>
                        <a href="#">50 sắc thái cảm xúc</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Nhạc vàng muôn thủơ</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Acoustic</a>
                    </Col>
                </Row>
                <hr></hr>
            
                <Row>
                    <Col span={8}>
                        <a href="#">Relax music</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Tuyệt phẩm bolero</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Cà phê</a>
                    </Col>
                </Row>
                <hr></hr>
            
                <Row>
                    <Col span={8}>
                        <a href="#">Nhạc vàng muôn thuở</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">The best of nhacvn</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Chill out</a>
                    </Col>
                </Row>
                <hr></hr>
            
                <Row>
                    <Col span={8}>
                        <a href="#">Rap</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Nhạc cách mạng</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Underground</a>
                    </Col>
                </Row>
           </div>        
        );
        const rank_menu = (
            <div class='rank-menu'>
                <br></br>
                <Row>
                    <Col span={8}>
                        <a href="#">VIỆT NAM</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">ÂU MỸ</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">HÀN QUỐC</a>
                    </Col>
                </Row>
                <hr></hr>
            
                <Row>
                    <Col span={8}>
                        <a href="#">Bài hát</a>
                    </Col>
                    <Col span={8}>
                        <a href="#"> Bài hát</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Bài hát</a>
                    </Col>
                </Row>
                <hr></hr>
            
                <Row>
                    <Col span={8}>
                        <a href="#">Album</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Album</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Album</a>
                    </Col>
                </Row>
                <hr></hr>
            
                <Row>
                    <Col span={8}>
                        <a href="#">Video</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Video</a>
                    </Col>
                    <Col span={8}>
                        <a href="#">Video</a>
                    </Col>
                </Row>
                
           </div>       
        );
        const album_menu=(
            <div class='album-menu'>
                <br></br>
                <Row gutter={8}>
                    <Col span={6}>
                        <a href="#">VIỆT NAM</a>
                    </Col>
                    <Col span={6}>
                        <a href="#">ÂU MỸ</a>
                    </Col>                 
                    <Col span={6}>
                        <a href="#">CHÂU Á</a>
                    </Col>
                    <Col span={6}>
                        <a href="#">THỂ LOẠI KHÁC</a>
                    </Col>
                    
                </Row>
                <hr></hr>
            
                <Row gutter={8}>
                    <Col span={6}>
                        <a href="#">Nhạc trẻ</a>
                    </Col>
                    <Col span={6}>
                        <a href="#">Pop</a>
                    </Col>                 
                    <Col span={6}>
                        <a href="#">Nhạc Hoa</a>
                    </Col>
                    <Col span={6}>
                        <a href="#">Nhạc không lời</a>
                    </Col>
                    
                </Row>
                <hr></hr>
            
                <Row gutter={8}>
                    <Col span={6}>
                        <a href="#">Trữ tình</a>
                    </Col>
                    <Col span={6}>
                        <a href="#">Rocks</a>
                    </Col>                 
                    <Col span={6}>
                        <a href="#">Nhạc Hàn</a>
                    </Col>
                    <Col span={6}>
                        <a href="#">Beat-Karaoke</a>
                    </Col>
                    
                </Row>
                <hr></hr>
            
                <Row gutter={8}>
                    <Col span={6}>
                        <a href="#">Việt remix</a>
                    </Col>
                    <Col span={6}>
                        <a href="#">Nhạc trịnh</a>
                    </Col>                 
                    <Col span={6}>
                        <a href="#">Country</a>
                    </Col>
                    <Col span={6}>
                        <a href="#">V-radio</a>
                    </Col>
                    
                </Row>
           </div>   
        );
        const music_video_menu=(
            <div class='music-video-menu'>
                <br></br>
                <Row gutter={8}>
                    <Col span={12}>
                        <a href="#">Nhạc Trẻ</a>
                    </Col>
                    <Col span={12}>
                        <a href="#">Trữ Tình</a>
                    </Col>                 
                </Row>
                <hr></hr> 
                <Row gutter={8}>
                    <Col span={12}>
                        <a href="#">Quê Hương</a>
                    </Col>
                    <Col span={12}>
                        <a href="#">Cách Mạng</a>
                    </Col>                 
                </Row>
                <hr></hr> 
                <Row gutter={8}>
                    <Col span={12}>
                        <a href="#">Âu Mỹ</a>
                    </Col>
                    <Col span={12}>
                        <a href="#">Nhạc Hoa</a>
                    </Col>                 
                </Row>
                <hr></hr> 
                <Row gutter={8}>
                    <Col span={12}>
                        <a href="#">Nhạc Hàn</a>
                    </Col>
                    <Col span={12}>
                        <a href="#">Thể  Loại Khác</a>
                    </Col>                 
                </Row>
           </div>   
        );
        const artist_menu = (
            <div class='artist-menu'>
                <br></br>
                <Row>
                    <Col span={24}>
                        <a href="#">Việt Nam</a>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col span={24}>
                        <a href="#">Châu Mỹ</a>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col span={24}>
                        <a href="#">Châu Á</a>
                    </Col>
                </Row>
                
            </div>
        );
        return(
           
            <div class='wrapper'>
                <div class='header-logo'>
                    <div class='logo inline'>
                        <div title='nghe nhac online'>
                            <a href='#'>
                                <img src='/icons/nhacvn.png' alt="nhacvn"></img>
                            </a>
                        </div>
                    </div>
                    <div class='search-side inline'>
                        <form class='search' action='#' method='get'>
                            <input id='keyword-search' type='text' placeholder='Enter search key word ...'></input>
                            <button type='submit'><SearchOutlined/></button>
                            
                        </form>
                    </div>
                    <div class='search-option inline'>
                        <ul>
                            <li><a onClick='#'>Video</a></li>
                            <li> | </li>
                            <li><a onClick='#'>Sách nói</a></li>
                        </ul>
                    </div>
                    <div class='sign-in-up inline'>
                        <ul>
                            <li><a onClick='#'>Đăng nhập</a></li>
                            <li> / </li>
                            <li><a onClick='#'>Đăng ký</a></li>
                        </ul>
                    </div>
                </div>
               
                <div class='header-top-menu'>
                    <div class='inline'>
                        <ul>
                            <li>
                                <Dropdown overlay={topic_menu}>
                                    <a class="item-dropdown" onClick={e => e.preventDefault()}>Chủ đề</a>
                                </Dropdown>
                            </li>                        
                            <li>
                                <Dropdown overlay={rank_menu}>
                                    <a class="item-dropdown" onClick={e => e.preventDefault()}>BXH</a>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={album_menu}>
                                    <a class="item-dropdown" onClick={e => e.preventDefault()}>Album</a>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={music_video_menu}>
                                    <a class="item-dropdown" onClick={e => e.preventDefault()}>Music video</a>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={artist_menu}>
                                    <a class="item-dropdown" onClick={e => e.preventDefault()}>Nghệ Sỹ</a>
                                </Dropdown>
                            </li>
                            <li>                                
                                <a class="item-dropdown" onClick={e => e.preventDefault()}>
                                    <span><img alt='VIP' src='/icons/icon-vip.png'></img></span>
                                    <span>VIP</span>
                                </a>                            
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        );
    };
}

export default HeaderX;