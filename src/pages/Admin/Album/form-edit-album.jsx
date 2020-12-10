import { Space, Table, Button, Modal, Form, Input, Checkbox, Select } from 'antd';
import { useState } from 'react';
import Avatar from '../../Helper/Upload-image-preview.jsx';

const FormEdit = ({ isShowModal, setIsShowModal, indexOfRecord, data }) => {

    const { TextArea } = Input;



    console.log(data);

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

    const [selectedCategory, setSelectedCategory] = useState([]);

    const OPTIONS1 = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

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
                value={data?data[indexOfRecord].category:categoryValue}
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

    const OPTIONS2 = ['Apples', 'Nails', 'Bananas', 'Helicopters'];


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

    const OPTIONS3 = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

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
                <Input defaultValue={data?data[indexOfRecord].name:""} name="name"/>
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
                defaultValue={data?data[indexOfRecord].description:""}
            >
                <TextArea rows={6} />
            </Form.Item>

            <Form.Item
                label="Avatar"
                name="avatar"
                rules={[{ required: false }]}
            >
                <Avatar />
            </Form.Item>


            {/* <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item> */}
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