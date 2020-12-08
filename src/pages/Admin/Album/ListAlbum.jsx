import React, { useState } from 'react';
import { Space, Table, Button, Modal } from 'antd';
import Demo from './form-create-album.jsx';
import getListAlbum from '../../../api/album';

const ListAlbum = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const [filterAlbum, setFilterAlbum] = useState(
       {
           sort: 0,
           page: 0,
           limit: 0
       } 
    );

    const [response, setResponse] = useState({});
    const rp = getListAlbum.getListAlbum(filterAlbum);
    setResponse(rp);

    const showModal = () => {
        debugger
        setIsShowModal(true);
    }

    const handleOk = e => {
        console.log(e);
        setIsShowModal(false);
    };

    const handleCancel = e => {
        console.log(e);
        setIsShowModal(false);
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name > b.name,
                multiple: 6,
            }

        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            sorter: {
                compare: (a, b) => a.category > b.category,
                multiple: 5,
            }
        },
        {
            title: 'Single',
            dataIndex: 'single',
            key: 'single',

        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            key: 'createAt',
            sorter: {
                compare: (a, b) => a.createdAt > b.createdAt,
                multiple: 4,
            },
        },
        {
            title: 'ModifiedAt',
            dataIndex: 'modifiedAt',
            key: 'modifiedAt',
            sorter: {
                compare: (a, b) => a.modifiedAt > b.modifiedAt,
                multiple: 3,
            },
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

    const data = [
        {
            key: '1',
            name: 'John Brown',
            description: 'some description in there',
            category: "nhạc Rap",
            single: "Justatee, Karik",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        }, {
            key: '2',
            name: 'John Brown',
            description: 'some description in there',
            category: "nhạc Rap",
            single: "Justatee, Karik",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '3',
            name: 'John Brown',
            description: 'some description in there',
            category: "nhạc Rap",
            single: "Justatee, Karik",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '4',
            name: 'John Brown',
            description: 'some description in there',
            category: "nhạc Rap",
            single: "Justatee, Karik",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '5',
            name: 'John Brown',
            description: 'some description in there',
            category: "nhạc Rap",
            single: "Justatee, Karik",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '6',
            name: 'John Brown',
            description: 'some description in there',
            category: "nhạc Rap",
            single: "Justatee, Karik",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        }
    ];

    const albums = [];
    debugger
    response.data.forEach(element => {
        const abl = {
            key: albums.length - 1,
            name: element.name,
            description: element.description,
            category: element.category,
            single: element.singers,
            createAt: element.createdDate,
            modifiedAt: element.modifiedDate
        }
        albums.push(abl);
    });

    return (<div>
        <h1>this is ListAlbum component </h1>
        <Button type="primary" onClick={showModal}>Create new album</Button>
        <br></br>
        <Table columns={columns} dataSource={data} />
        <Modal
          title="Add Album"
          visible={isShowModal}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Demo/>
        </Modal>
    </div>);
}

export default ListAlbum;