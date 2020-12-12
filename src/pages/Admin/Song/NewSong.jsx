import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    notification,
     Row, Col
} from 'antd';
import singerAPI from '../../../api/singer';
import songAPI from '../../../api/song';
import categoryAPI from '../../../api/category';
import ImageUpload from './ImageUpload';
import FileUpload from './FileUpload';
import TextArea from 'antd/lib/input/TextArea';



const initialSong = {
    name: '',
    description: '',
    lyric: '',
    categories: [],
    singers: [],

}

const singerFake = [
    {
    id: '123',
    name: 'lytuan',
    },
    {
        id: '124',
        name: 'lytu',
    }
]

const categoryFake = [
    {
    id: '123',
    name: 'nhactre',
    },
    {
        id: '124',
        name: 'tru tinh',
    }
]

const NewSong = ({moderatorToken}) => {

    const [song, setSong] = useState(initialSong);
    const [fileMusic, setFileMusic] = useState();
    const [image, setImage] = useState();
    const [singerList, setSingerList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log(moderatorToken)
        fetchCategories();
        fetchSingers();
    })

    const fetchCategories = async () => {
        // let {data} = await 
        setCategories(categoryFake);
    }

    const fetchSingers = async () => {
        setSingerList(singerFake);

    }

    const onChangeImage = (image) => {
        setImage(image);
    }

    const onChangeFile = (file) => {
        setFileMusic(file);
    }

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setSong({...song, [name]: value});
    }

    const handleChangeSelectCategory = (value) => {
        setSong({...song, categories: [...value]});
    }

    const handleChangeSelectSinger = (value) => {
        setSong({...song, singers: [...value]});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("song submit: ", song);
        
        let dataF = new FormData();
        let fileAndImage = [fileMusic, image];
        dataF.append("fileAndImage", fileMusic);
        dataF.append("fileAndImage", image);

        dataF.append("name",song.name)
        dataF.append("description",song.description)
        dataF.append("lyric",song.lyric)
        // dataF.append("categories",song.categories)   chỗ này khi request về server nó đổi từ mảng thành chuỗi 123,123,123 => cần xử lý bên server
        // dataF.append("singers",song.singers)

        let {data} = await songAPI.createSong(dataF, moderatorToken);
        console.log("result song new: ", data);

    }



    return (

        <div>
            <h1 style={{ fontSize: '30px' }}>Tạo mới bài hát</h1>
            <Button type="primary" onClick={onSubmit}>Lưu</Button>
            <br/>
            <br/>
            <Row>
                <Col span={12}>

                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        // onValuesChange={onFormLayoutChange}
                        size={"middle"}
                    >


                        <Form.Item label="Tên bài hát"
                            rules={[
                                {
                                    message: 'chưa nhập tên bài hát',
                                }]}
                        >
                            <Input name="name" value={song.name} onChange={onChangeInput}/>

                        </Form.Item>

                        <Form.Item label="Thể loại">
                            <Select 
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Chọn thể loại cho bài hát"
                            onChange={handleChangeSelectCategory}
                            optionLabelProp="label">
                                {
                                    categories && categories.map((item, index) => {
                                        return (
                                        <Select.Option key={index} value={item.id} label={item.name}>{item.name}</Select.Option>
                                        )
                                    })
                                }
                                
                            </Select>
                        </Form.Item>
                        <Form.Item label="Ca sỹ">
                            <Select 
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Chọn ca sỹ thể hiện"
                            onChange={handleChangeSelectSinger}
                            optionLabelProp="label">
                                {
                                    singerList && singerList.map((item, index) => {
                                        return (
                                        <Select.Option key={index} value={item.id} label={item.name}>{item.name}</Select.Option>
                                        )
                                    })
                                }
                                
                            </Select>
                        </Form.Item>

                        <Form.Item label="Lời bài hát">
                            <TextArea name="lyric" value={song.lyric} onChange={onChangeInput}  autoSize={{ minRows: 3, maxRows: 5 }}/>
                        </Form.Item>
                        <Form.Item label="Thêm mô tả">
                            <TextArea name="description" value={song.description} onChange={onChangeInput}  autoSize={{ minRows: 3, maxRows: 5 }}/>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={12}>
                    <ImageUpload onChange={onChangeImage} />

                    <FileUpload onChange={onChangeFile} />
                </Col>
            </Row>



        </div>);
}

export default NewSong;