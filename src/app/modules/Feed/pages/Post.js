import { Button, Form, Card, Col, Row, Typography, Upload } from 'antd'
import React, { useState,useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../_redux/postsActions";
import { Input, message} from 'antd';
import { FileImageOutlined } from '@ant-design/icons';

const { Text,Title } = Typography;
const { TextArea } = Input;

export default function Post({history}) {

  const [form] = Form.useForm();
  const [fileURL,setFileURL] = useState("");
  const dispatch = useDispatch();
  const { actionsLoading, postForEdit,entities,listLoading } = useSelector(
    (state) => ({
      actionsLoading: state.posts.actionsLoading,
      listLoading: state.posts.listLoading,
      postForEdit: state.posts.postForEdit,
      entities : state.posts.entities
    }),
    shallowEqual
  );


  useEffect(() => {
    // server call for getting Customer by id
    dispatch(actions.fetchPost());
  }, [dispatch]);

  const props = {
      name: 'file',
      action: 'https://collabwizard.herokuapp.com/api/upload/file',
      headers: {
        
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          console.log(info.file.response);
          setFileURL(info.file.response.fileURL);
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    const onFinish =(values) => {
      form.validateFields()
      .then(values => {
        form.resetFields();
        values.postContentUrl = fileURL;
        dispatch(actions.createPost(values));
        history.push("/");
        console.log(values);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
    });
    }

    return (
      <div style={{ width:"25%", position:"fixed" }}>
        <Card className="box-shadow" style={{ marginTop:"2rem",borderRadius:".3rem" }}>
            <Title level={3}>New Post</Title>
            <Form
              form={form}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
            <Row style={{flexDirection:"column"}} gutter={[24,24]}>
                <Col>
                <Form.Item
                  name="postContent"
                  rules={[{ required: true, message: 'Please input your post!' }]}
                >
                  <TextArea rows={10} placeholder="Write something you want to share" />
                </Form.Item>
                </Col>
                <Col>
                    <Upload {...props}>
                        <Button icon={<FileImageOutlined size={32}/>}>Photo/Video</Button>
                    </Upload>
                </Col>
                <Col>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Create new post</Button>
                </Form.Item>
                </Col>
            </Row>
          </Form>
        </Card>
      </div>
    )
}
