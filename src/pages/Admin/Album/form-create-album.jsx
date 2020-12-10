import { Form, Input, Button, Checkbox } from 'antd';
import SelectWithHiddenSelectedOptions from '../../Helper/Selected-input-component.jsx';
import Avatar from '../../Helper/Upload-image-preview.jsx';
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const { TextArea } = Input;

const Demo = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

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
        rules={[{ required: true, message: 'Please input album\'s name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: 'you must be choose a category!' }]}
      >
        <SelectWithHiddenSelectedOptions/>
      </Form.Item>

      <Form.Item
        label="Single"
        name="single"
        rules={[{ required: true, message: 'you must be choose a single' }]}
      >
        <SelectWithHiddenSelectedOptions/>
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
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

