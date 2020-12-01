import React, { useState } from 'react';
import { Table, Tag, Space } from 'antd';

const ListSinger = () => {
    let { Column, ColumnGroup } = Table;

    let data = [
        {
            key: '1',
            name: 'John',
            gender: 'Male',
            age: 41,
            avatar: '',
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
            avatar: '',
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
            avatar: '',
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
            avatar: '',
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
            avatar: '',
            description:'',
            favorites:'pop',
            createdDate:'20/11/2020',
            modifiedDate:'',
            createdBy:'',
            modifiedBy:'',
            // tags: ['cool', 'teacher'],
        },
        ];
    return ( <div>
            <Table dataSource={data}>
                
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Gender" dataIndex="gender" key="gender" />
                
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Favorites" dataIndex="favorites" key="favorites" />
                <Column title="CreatedDate" dataIndex="createdDate" key="createdDate" />
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                    </Space>
                )}
                />
        </Table>
        <h1>this is ListSinger component</h1>
    </div> );
}
 
export default ListSinger;