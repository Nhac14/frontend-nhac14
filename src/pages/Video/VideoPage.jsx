import React, { useState, useEffect } from 'react';
import {Row, Col, Pagination } from 'antd';
import ListVideo from './ListVideo';

const VideoPage = () => {
    return (<div className="content-side">
        <Row gutter={24}>
            <Col xs={2} sm={4} md={4} lg={4} xl={4} />
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <ListVideo />
            </Col>
        </Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} />
    </div>);
}

export default VideoPage;