import React, { useState, useEffect } from 'react';
import { Table, Tag, Space,Image, AutoComplete, Pagination } from 'antd';
import { Button } from 'antd';
import singerAPI from '../../../api/singer';
import Confirmation from './ModalConfirmDelete';
import './style.css';



const ListSinger = () => {

    const [singer, setSinger] = useState([]);
    const [paging, setPaging] = useState({current: 1, pageSize: 5, total: 100, defaultCurrent: 1});
    const [filters, setFilters] = useState();
    const [sorter, setSorter] = useState();
    const [indexSelected, setIndexSelected] = useState(0);
    const [recordSelected, setRecordSelected] = useState({});
    const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

    useEffect(() => {
        getSinger();
        
}, [paging.current]);
 
    // const [age,setAge] = useState([]);
    // console.log("data: ", singer.data);
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
            render: (text, record, index) => {
                console.log("index", index);
                // console.log("record:", record);
                return (
                    <Space size="middle">
                        <Button >Edit</Button>
                        <Button onClick={() => handleDeleteClick(index, record)}>Delete</Button>
                    </Space>
                )
            },
        },
    ];

    


    const getSinger = async () => {
        console.log("data singers : ");
        const {data} = await singerAPI.getAllSinger(paging.current, paging.pageSize);
    
        
        setSinger(data.data);
        console.log("singer: ", singer.result)
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
    const handleDeleteClick = (index, record) => {
        setIsShowModalConfirm(true);
        setIndexSelected(index);
        setRecordSelected(record);
    }
    const onHandleShowModalConfirm = (value) => {
        setIsShowModalConfirm(value);
    }
    return ( <div>
        <h1>ListSinger</h1>
        <div className='right-pos'> 
          <Button type="primary" href='/admin/singers/new'>Create Singer</Button>
        </div>
        
        <Table columns={columns} dataSource={singer} pagination={configPagination} onChange={handleTableChange} />

        
        <Confirmation
            isShowModal={isShowModalConfirm}
            setIsShowModal={onHandleShowModalConfirm}
            indexOfRecord={indexSelected} data={singer}
        />
       
    </div> );
}

export default ListSinger;