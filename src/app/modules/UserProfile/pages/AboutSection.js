import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row,Typography } from 'antd'
import React, { useState, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../_redux/profile/profileActions";
import { useRouteMatch } from 'react-router-dom';


const { Title,Paragraph } = Typography;
const { TextArea } = Input;

export default function AboutSection({history}) {

    const [form] = Form.useForm();
    const match = useRouteMatch()
    const [visible,setVisible] = useState(false);

    const dispatch = useDispatch();
    const { user,entities,listLoading } = useSelector(
      (state) => ({
        listLoading: state.profile.listLoading,
        entities : state.profile.entities,
        user : state.auth.user
      }),
      shallowEqual
    );

    useEffect(() => {
      // server call for getting Customer by id
      dispatch(actions.fetchProfiles(match.params));
    }, [dispatch]);


    const showModal = () => {
        setVisible(true);
    };
    
    const handleCancel = e => {
        form.resetFields();
        setVisible(false);
    };

    const onFinish = values =>{
        form.validateFields()
          .then(values => {
            form.resetFields();
            setVisible(false);
            const id = match.params.teacherId;
            console.log(id);
            dispatch(actions.updateProfile(id,values)).then(() => handleCancel());
            history.push(`/user-profile/${id}`)
          })
          .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={4}>About</Title>
                </Col>
                {
                    !listLoading ? entities != null && entities.id === user.id ?
                    <Col>
                        <EditOutlined style={{fontSize:"1.4rem"}} onClick={showModal}/>
                    </Col>
                    : null : null 
                }
            </Row>
            <Row>
                <Col>
                {
                    !listLoading ? entities != null ?
                    <Paragraph style={{color:"#000"}}>
                        {entities.bio}
                    </Paragraph>
                    : <span>No bio</span> : <span>Loading...</span>
                }
                </Col>
            </Row>
            <Modal
                title="Edit about"
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                    Reset
                    </Button>,
                    <Button key="submit" type="primary" htmlType="submit" onClick={onFinish}>
                    Submit
                    </Button>,
                ]}
            >
            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                <label htmlFor="bio" >Summary</label>
                <Form.Item
                    name="bio"
                    rules={[{ required: true, message: 'Please input about yourself!' }]}
                >
                   {
                    !listLoading ? entities != null ?
                        <TextArea value={entities.bio} />
                    :  <TextArea /> : <span>Loading...</span>
                    } 
                </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
