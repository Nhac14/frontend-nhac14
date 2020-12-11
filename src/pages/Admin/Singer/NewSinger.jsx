import { Form, Input, Button, Checkbox, Select } from 'antd';
// import { Select } from 'antd';
import SelectGender from '../../Helper/SelectGender';
import Avatar from '../../Helper/Upload-image-preview';


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
        rules={[{ required: true , message:'Plese select your gender'}]}
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
        <TextArea rows={6}/>
      </Form.Item>

      <Form.Item
        label="Avatar"
        name="avatar"
        rules={[{ required: false}]}
      >
      <Avatar/> 
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;