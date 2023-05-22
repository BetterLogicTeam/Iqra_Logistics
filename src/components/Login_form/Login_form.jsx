import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import OtpForm from 'react-otp-ui'


function Login_form() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


      const handleOnChange = (data) => {
        console.log('data', data)
        
        /* data object like this {digit: '1', digit2: '2', digit3: '3', digit4: '4', otpValue: '1234'} */
      }

  return (
    <div>
      <div className="container overflow-hidden">
        <div className="row justify-content-center py-5">
            <div className="col-lg-6 border rounded-3 bg-light">
            <h2 className="text-danger py-4">Login form</h2>

            <div className="mail">
            <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    layout="vertical"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className='mt-3'
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <div className='d-flex justify-content-center'>
    <OtpForm onChange={handleOnChange} numberOfInputs={6} secureInput/>
    </div>

    <Form.Item name="remember" valuePropName="checked" className='mt-4'>
      <Checkbox>Forgot Password</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
            </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Login_form
