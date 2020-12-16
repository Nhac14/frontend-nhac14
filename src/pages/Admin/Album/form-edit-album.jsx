import { Space, Table, Button, Modal, Form, Input, Checkbox, Select } from 'antd';
import { useEffect, useState } from 'react';
import Avatar from '../../Helper/Upload-image-preview.jsx';
import categoryApi from '../../../api/category';
import songApi from '../../../api/song';
import singerApi from '../../../api/singer';

const FormEdit = ({ isShowModal, setIsShowModal, indexOfRecord, data }) => {

    const [listCategory, setListCategory] = useState({});
    const [listSinger, setListSinger] = useState({});
    const [listSong, setListSong] = useState({});

    console.log(data);

    const [inputDefaultValue, setInputDefaultValue] = useState({
        name: "name",
        category: ["category"],
        singer: ["singer"],
        song: ["song"],
        description: "description"
    });

    console.log(inputDefaultValue);

    useEffect(() => {
        if (!isEmpty(data)) {
            setInputDefaultValue({
                name: data[indexOfRecord].name,
                category: data[indexOfRecord].category,
                singer: data[indexOfRecord].singer,
                song: data[indexOfRecord].musiicList,
                description: data[indexOfRecord].description
            })
        }
    }, [indexOfRecord, data]);

    const { TextArea } = Input;

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const handleOk = () => {
        setIsShowModal(false);
    }

    const handleCancel = () => {
        setIsShowModal(false)
    }

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const isEmpty = (obj) => {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    const [selectedCategory, setSelectedCategory] = useState([]);

    console.log(listCategory);
    console.log(listSong);
    console.log(listSinger);

    const OPTIONS1 = !isEmpty(listCategory) ? listCategory.data.data.map(item => item.name) : [];

    console.log(data);

    const category = () => {
        const handleChange = () => {
            setSelectedCategory(categoryValue);
        }
        const categoryValue = selectedCategory;
        const filteredOptions = OPTIONS1.filter(o => !categoryValue.includes(o));
        return (
            <Select
                mode="tags"
                placeholder="Inserted are removed"
                //value={categoryValue}
                value={inputDefaultValue.category}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                        {item}
                    </Select.Option>
                ))}
            </Select>
        );
    }

    const [selectedSingers, setSelectedSingers] = useState([]);

    const OPTIONS2 = !isEmpty(listSinger) ? listSinger.data.data.map(item => item.name) : [];


    const singers = () => {
        const handleChange = () => {
            setSelectedSingers(singersValue);
        }
        const singersValue = selectedSingers;
        const filteredOptions = OPTIONS2.filter(o => !singersValue.includes(o));
        return (
            <Select
                mode="tags"
                placeholder="Inserted are removed"
                value={singersValue}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                        {item}
                    </Select.Option>
                ))}
            </Select>
        );
    }

    const [selectedSongs, setSelectedSongs] = useState([]);

    const OPTIONS3 = !isEmpty(listSong) ? listSong.data.results.map(item => item.name) : [];

    const songs = () => {
        const handleChange = () => {
            setSelectedSongs(songsValue);
        }
        const songsValue = selectedSongs;
        const filteredOptions = OPTIONS3.filter(o => !songsValue.includes(o));
        return (
            <Select
                mode="tags"
                placeholder="Inserted are removed"
                value={songsValue}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                        {item}
                    </Select.Option>
                ))}
            </Select>
        );
    }

    const handleAsync = async () => {
        let tmp1 = await categoryApi.getAllCategory();
        let tmp2 = await songApi.getAllSongAsync();
        let tmp3 = await singerApi.getAllSingerAsync();

        setListCategory(tmp1);
        setListSinger(tmp3);
        setListSong(tmp2);
    }

    useEffect(() => handleAsync(), []);

    const form = () => (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input album\'s name!' }]}
            >
                <Input defaultValue={inputDefaultValue.name} name="name" />
            </Form.Item>

            <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Please input category\'s name!' }]}
            >
                {category()}
            </Form.Item>

            <Form.Item
                label="Singers"
                name="singers"
                rules={[{ required: true, message: 'Please input singer\'s name!' }]}
            >
                {singers()}
            </Form.Item>

            <Form.Item
                label="Songs"
                name="songs"
                rules={[{ required: true, message: 'Please input song\'s name!' }]}
            >
                {songs()}
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: false }]}
                defaultValue={data ? data[indexOfRecord].description : ""}
            >
                <TextArea rows={6} />
            </Form.Item>
            {/* 
            <Form.Item
                label="Avatar"
                name="avatar"
                rules={[{ required: false }]}
            >
                <Avatar />
            </Form.Item> */}


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    )

    return (
        <div>
            <Modal
                title="Edit Album"
                visible={isShowModal}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {form()}
            </Modal>
        </div>
    )
}

export default FormEdit;