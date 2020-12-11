import React, { useState, useEffect } from 'react';
import { Table, Tag, Space,Image, AutoComplete, Pagination } from 'antd';
import { Button } from 'antd';
import { Upload } from 'antd';
import singerAPI from '../../../api/singer';
import './style.css';


const initialPaging = {
    page: 1,
    limit: 20,
    prevPage: 1,
    totalPage: 1,
}

const ListSinger = () => {


    const [paging, setPaging] = useState(initialPaging);
    const columns = [
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
           
        },
        {
            title: 'Favorites',
            dataIndex: 'favorites',
            key: 'favorites',

        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render:(avatar) => ( <Image width={40} height={40} src={avatar.path}/> ),
            
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
    const [singer, setSinger] = useState([]);
    const getSinger = async () => {
        // console.log("getalll");
        const {data} = await singerAPI.getAllSinger(paging.page, paging.limit);
        console.log("data singers : ", data.data);
        setSinger(data.data);
        // console.log("data singers : ", dt);
    }
    
    useEffect(() => {
            console.log("aaaaaaa");
            getSinger();
            
        }, [paging]);


    const onChangePaging = (page, limit) => {
        setPaging({...paging, page: page});
    }

    const configPaging = {
        total: 50,
        defaultCurrent: 1,
        onChange: onChangePaging
    }
    return ( <div>
        <h1>ListSinger</h1>
        <div className='right-pos'> 
          <Button type="primary" href='/admin/singers/new'>Create Singer</Button>
        </div>
        
        <Table columns={columns} dataSource={singer}/>

       
    </div> );
}
 
export default ListSinger;