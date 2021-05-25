import React from 'react'
import { Button, Col, Form, Input, Modal, Row,Typography } from 'antd'

const { Title,Paragraph } = Typography;
const { TextArea } = Input;

export default function AboutPage(props) {

    return (
        <div>
          <Form 

            name="basic"
            onFinish={props.onFinishFirst()}
            // onFinishFailed={onFinishFailed}
            >
                 <label htmlFor="fullname" >Full Name</label>
                <Form.Item
                    name="fullname"
                    rules={[{ required: true, message: 'Please input your fullname!' }]}
                >
                    <Input />
                </Form.Item>
                <label htmlFor="about" >Summary</label>
                <Form.Item
                    name="about"
                    rules={[{ required: true, message: 'Please input about yourself!' }]}
                >
                    <TextArea />
                </Form.Item>
            </Form>  
        </div>
    )
}
