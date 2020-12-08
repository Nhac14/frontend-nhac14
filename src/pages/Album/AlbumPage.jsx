import React, { useState, useEffect } from 'react';
import { Carousel, Col, Row, Pagination } from 'antd';
import ListAlbum from './ListAlbum';

import './style.scss';


const AlbumPage = () => {
    return (
        <div className="content-side">
            <Row gutter={24}>
                <Col xs={2} sm={4} md={2} lg={4} xl={4} />
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <ListAlbum />
                </Col>
            </Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} />

            <div className="pagination">
                <Pagination defaultCurrent={1} total={50} pageSize={1}/>

            </div>
        </div>

    );
}

export default AlbumPage;