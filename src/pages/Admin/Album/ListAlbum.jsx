import React, { useEffect, useState } from 'react';
import { Space, Table, Button, Modal, notification} from 'antd';
import FormCreate from './form-create-album.jsx';
import getListAlbum from '../../../api/album';
import FormEdit from './form-edit-album';
import Confirmation from './ModalConfirmDelete';
import album from '../../../api/album';

const ListAlbum = ({moderatorToken}) => {
    const [isShowModal, setIsShowModal] = useState(false);

    const [isShowModalEdit, setIsShowModalEdit] = useState(false);

    const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

    const [filterAlbum, setFilterAlbum] = useState(
        {
            sort: 0,
            page: 0,
            limit: 0
        }
    );

    const [indexSelected, setIndexSelected] = useState(0);

    const [recordSelected, setRecordSelected] = useState({});

    const showModal = () => {
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

    const handleEditClick = (index, record) => {
        setIsShowModalEdit(true);
        setIndexSelected(index);
        setRecordSelected(record);
    }

    const handleDeleteClick = (index, record) => {
        setIsShowModalConfirm(true);
        setIndexSelected(index);
        setRecordSelected(record);
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
            title: 'Singer',
            dataIndex: 'singer',
            key: 'singer',

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
            render: (text, record, index) => {
                // console.log(index);
                console.log(record);
                return (
                    <Space size="middle">
                        <Button onClick={() => handleEditClick(index, record)}>Edit</Button>
                        <Button onClick={() => handleDeleteClick(index, record)}>Delete</Button>
                    </Space>
                )
            },
        },
    ];

    const [data, setData] = useState([]);



    const getAlbums = async () => {
        const rp = await getListAlbum.getListAlbum(filterAlbum);
        setData(rp);
    }

    useEffect(() => getAlbums(), []);

    const onHandleShowModal = (e) => {
        setIsShowModalEdit(e);
    }

    const onHandleShowModalConfirm = (value) => {
        setIsShowModalConfirm(value);
    }

    const deleteAlbum = async (id) => {
        let {data} = await album.deleteAlbumById(id, moderatorToken);
        if(data){
            if(data.status === 1){
                notification.success({message: "delete successfully"});
                setTimeout(() => window.location.reload(), 1000);
            }
        }
    }

    console.log(data.data);

    return (<div>
        <h1>List Album </h1>
        <Button type="primary" onClick={showModal}>Create new album</Button>
        <br></br>
        <Table columns={columns} dataSource={data.dataDisplay} />
        <Modal
            width={1000}
            title="Add Album"
            visible={isShowModal}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <FormCreate token={moderatorToken} />
        </Modal>
        <FormEdit
            isShowModal={isShowModalEdit}
            setIsShowModal={onHandleShowModal}
            indexOfRecord={indexSelected}
            data={data.data} 
            token={moderatorToken}/>

        {/* modal xoa */}
        <Confirmation
            isShowModal={isShowModalConfirm}
            setIsShowModal={onHandleShowModalConfirm}
            indexOfRecord={indexSelected} 
            data={data.data}
            deleteAlbum={deleteAlbum}
        />
        
    </div>);
}
export default ListAlbum;