import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router';
import { Table, Tag, Space, Button } from 'antd';
import songAPI from '../../../api/song';

import './style.scss';
const inititalSong = {
    name: '',
    path: null,
    file: null,
    type: '',
    lyric: '',
    description: '',
    musican: '',
    categories: [],
    singers: [],
    shares: 0,
    views: 0,
    favorites: 0,
    createDate: '',
    modifiedDate: '',
    createBy: '',
    modifiedBy: '',
}



const ListSong = () => {

    const history = useHistory();
    const [songs, setSongs] = useState([inititalSong]);
    const [paging, setPaging] = useState({current: 1, pageSize: 10, total: 100, defaultCurrent: 1});
    const [filters, setFilters] = useState();
    const [sorter, setSorter] = useState();

    useEffect(() => {
        fetchSongs();
    }, [paging])


    const fetchSongs = async () => {
        let {data} = await songAPI.getSongs(paging.current, paging.pageSize);
        setSongs(data.results);
        console.log("data song: ", data.results);

    }

    const onChangePage = (p, l) => {
        setPaging({...paging, page: p});
    }

    const configPagination = {
        total: 50,
        defaultCurrent: 1,
        pageSize: paging.limit,
        page: paging.page,
        onChange: onChangePage
    }


    const columns = [
        {
          title: 'Ảnh bìa',
          dataIndex: 'cover_image',
          key: 'cover_image',
          render: cover_image => <div className="image-list-item">
              <img className="image-item" src={cover_image ? cover_image.path : "https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg"}/>
          </div>,
        },
        {
          title: 'Tên bài hát',
          dataIndex: 'name',
          key: 'name',
          render: name => <a >{name}</a>
        },
        {
          title: 'Type',
          key: 'type',
          dataIndex: 'type',
          filters: [
            { text: 'Video', value: 'MV' },
            { text: 'Audio', value: 'MA' },
          ],
          render: type => {
                    let color = (type == "MV" ? 'volcano' : 'green');
                return (
                  <Tag color={color} key={type}>
                    {type}
                  </Tag>
                );
          }
        },
        {
            title: 'Thể hiện',
            key: 'singers',
            dataIndex: 'singers',
            render: singers => singers ? singers.map((singer, index) => {
                return <a>{singer.name}</a>
            }) : ''
        },
        {
            title: 'Thể loại',
            dataIndex: 'categories',
            key: 'categories',
          },
        {
            title: 'Lượt xem',
            dataIndex: 'views',
            key: 'views',
        },
        {
            title: 'Lượt thích',
            dataIndex: 'favorites',
            key: 'favorites',
        },
        {
            title: 'Lượt chia sẻ',
            dataIndex: 'shares',
            key: 'shares',
        },
       
        {
          title: 'Action',
          key: 'action',
          render: (text, song) => (
            <Space size="middle">
              <a>Edit</a>
              <a>Delete</a>
            </Space>
            
          ),
        },
      ];

    const handleTableChange = (pagination, filters, sorter) => {
        console.log("pagi: ", pagination);
        setPaging({...pagination});
        setFilters({...filters});
        setSorter({...sorter});
    }

    const onNewSong = (e) => {
        e.preventDefault();
        history.push('/admin/songs/new');
    }

    return ( 
    <div>
        <h2>Danh sách các bài hát</h2>
        <Button type="primary" style={{float: "right"}} onClick={onNewSong}>Tạo mới</Button>
        <Table
            columns={columns} 
            dataSource={songs} 
            pagination={configPagination}
            onChange={handleTableChange}
            />
        
    </div> );
}
 
export default ListSong;