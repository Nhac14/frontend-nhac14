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

    const { Column, ColumnGroup } = Table;
    const [dataTest, setDataTest] = useState([]);
    const [paging, setPaging] = useState(initialPaging);


  
    const data = [
        {
            key: '1',
            name: 'John',
            gender: 'Male',
            age: 41,
            avatar: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1606984213/v1/artists/s2/0/0/0/382.jpg?v=1606984213',
            description:'',
            favorites:'pop',
            createdDate:'9/10/2001',
            modifiedDate:'',
            createdBy:'',
            modifiedBy:'',
            // tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Mixi',
            gender: 'Male',
            age: 30,
            avatar: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1606984213/v1/artists/s2/0/0/3/3337.jpg?v=1606984213',
            description:'',
            favorites:'pop',
            createdDate:'20/11/2000',
            modifiedDate:'',
            createdBy:'',
            modifiedBy:'',
            // tags: ['loser'],
        },
        {
            key: '3',
            name: 'Pew',
            gender: 'Male',
            age: 31,
            avatar: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1606984213/v1/artists/s2/0/0/0/982.jpg?v=1606984213',
            description:'',
            favorites:'country',
            createdDate:'11/11/1999',
            modifiedDate:'',
            createdBy:'',
            modifiedBy:'',
            // tags: ['cool', 'teacher'],
        },
        {
            key: '4',
            name: 'Faker',
            gender: 'Male',
            age: 23,
            avatar: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1606984213/v1/artists/s2/0/0/19/19897.jpg?v=1606984213',
            description:'',
            favorites:'k-pop',
            createdDate:'10/8/2010',
            modifiedDate:'',
            createdBy:'',
            modifiedBy:'',
            // tags: ['cool', 'teacher'],
        },
        {
            key: '5',
            name: 'TestName',
            gender: 'Female',
            age: 32,
            avatar: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1606984213/v1/artists/s2/0/0/0/120.jpg?v=1606984213',
            description:'',
            favorites:'pop',
            createdDate:'20/11/2020',
            modifiedDate:'',
            createdBy:'',
            modifiedBy:'',
            // tags: ['cool', 'teacher'],
        },
        ];
    useEffect(() => {
        console.log("aaaaaaa");
        getAllSinger();
    }, [paging]);


    const getAllSinger = async () => {
        console.log("getalll")
        const {data} = await singerAPI.getAllSinger(paging.page, paging.limit);
        console.log("data singers : ", data);
    }


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
        
            <Table dataSource={data} pagination={configPaging}>
                
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Gender" dataIndex="gender" key="gender" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Favorites" dataIndex="favorites" key="favorites" />
                <Column title="Avatar" dataIndex="avatar" key="avatar" 
                    render={(image, avatarurl) => ( <Image width={40} src={avatarurl.avatar}/>) }
                />
               
                   
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                    <a>Edit {record.name}</a>
                    <a>Delete</a>
                    </Space>
                )}
                />
        </Table>
        
        <h1>this is ListSinger component</h1>
       
    </div> );
}
 
export default ListSinger;