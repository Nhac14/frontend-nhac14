import React, { useState } from 'react';
import { Table, Tag, Space,Image, AutoComplete } from 'antd';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const Demo = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

};
const ListSinger = () => {
    let { Column, ColumnGroup } = Table;

    let data = [
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
    return ( <div>
        <h1>ListSinger</h1>

            <Table dataSource={data}>
                
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
        return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
    </div> );
}
 
export default ListSinger;