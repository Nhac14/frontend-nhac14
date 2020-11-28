
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';

import CardAlbum from './CardAlbum';
const { TabPane } = Tabs;

const ListAlbum = () => {
    // Nếu inHome thì chỉ gen ra 1 số lượng nhất định cardAlbum
    const [listAlbum, setListAlbum] = useState([]);
    const testData = [
        {
            image: '/images/26573415.jpg',
            name: "RapViet"
        },
        {
            image: '/images/26573415.jpg',
            name: "Những bài hát hay nhất của Đức Phúc"
        },
        {
            image: '/images/26573415.jpg',
            name: "RapViet"
        },

    ]

    useEffect(() => {
        setListAlbum(testData);
    }, [])


    const NewestAlbums = () => {
        // Do sth to get newest
        return listAlbum.map((album, index) => {
            return <CardAlbum key={index} album={album} />
        })
    }

    const ViewestAlbums = () => {
        // Do sth to get viewest
        return listAlbum.map((album, index) => {
            return <CardAlbum key={index} album={album} />
        })
    }

    const callback = (key) => {
        console.log(key);
    }



    return (
        <div className="album-content">
            <h1>Album</h1>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane
                    tab={<h3>Mới nhất</h3>} key="1">
                   <div className="wrapper-list-album">
                        <div className="list-album">
                            {NewestAlbums()}
                        </div>
                    </div>
                </TabPane>
                <TabPane
                    tab={<h3>Nghe nhiều</h3>} key="2">
                    <div className="wrapper-list-album">
                        <div className="list-album">
                            {ViewestAlbums()}
                        </div>
                    </div>
                </TabPane>
            </Tabs>

        </div>

    );
}

export default ListAlbum;