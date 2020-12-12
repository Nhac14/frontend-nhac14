import { Form, Input, Button, Checkbox, Select } from 'antd';
// import { Select } from 'antd';
import SelectGender from '../../Helper/SelectGender';
import Avatar from '../../Helper/Upload-image-preview';
import singerAPI from '../../../api/singer';
import {useEffect} from 'react';


const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 },
};

const { TextArea } = Input;

const Demo = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
const create = singerAPI.createSinger; 
// useEffect(() => {
    
//     return () => {
//         cleanup
//     }
// }, [])
  return (
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
        rules={[{ required: true, message: 'Please input singer\'s name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required:false}]}
      >
         <SelectGender/>
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[{ required:true , message:'Plese enter your age'}]}
      >
         <Input />
      </Form.Item>

      <Form.Item
        label="Favorites"
        name="favorites"
        rules={[{ required: false}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Avatar"
        name="avatar"
        rules={[{ required: false}]}
      >
      <Avatar/> 
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={this.create}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;