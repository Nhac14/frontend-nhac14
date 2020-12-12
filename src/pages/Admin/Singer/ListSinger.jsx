import React, { useState, useEffect } from 'react';
import { Table, Tag, Space,Image, AutoComplete, Pagination } from 'antd';
import { Button } from 'antd';
import singerAPI from '../../../api/singer';
import './style.css';



const ListSinger = () => {

    const [singer, setSinger] = useState([]);
    const [paging, setPaging] = useState({current: 1, pageSize: 10, total: 100, defaultCurrent: 1});
    const [filters, setFilters] = useState();
    const [sorter, setSorter] = useState();

    useEffect(() => {
        getSinger();
        
}, [paging.current]);
    // const [age,setAge] = useState([]);
    const columns = [
        
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            
            render: avatar => ( 

            <Image width={40} height={40} src={avatar ? avatar.path : 'https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg'}/>),
            
        },
        
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        

        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        },
        {
          
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: age => <span>{age != null ? age : ''}</span>
           
        },
        {
            title: 'Favorites',
            dataIndex: 'favorites',
            key: 'favorites',

        },
        
        
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    


    const getSinger = async () => {
        console.log("data singers : ");
        const {data} = await singerAPI.getAllSinger(paging.current, paging.pageSize);
    
        console.log("data singers : ", data.data);
        setSinger(data.data);
    }

    const onChangePaging = (page, limit) => {
        setPaging({...paging, page: page});
    }
    const handleTableChange = (pagination, filters, sorter) => {
        console.log("pagi: ", pagination);
        setPaging({...pagination});
        setFilters({...filters});
        setSorter({...sorter});
    }
    const configPagination = {
        total: 50,
        defaultCurrent: 1,
        pageSize: paging.pageSize,
        page: paging.page,
        onChange: onChangePaging
    }
    return ( <div>
        <h1>ListSinger</h1>
        <div className='right-pos'> 
          <Button type="primary" href='/admin/singers/new'>Create Singer</Button>
        </div>
        
        <Table columns={columns} dataSource={singer} pagination={configPagination} onChange={handleTableChange} />

       
    </div> );
}

export default ListSinger;