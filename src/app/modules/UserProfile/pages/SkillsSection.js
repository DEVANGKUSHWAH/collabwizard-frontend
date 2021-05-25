import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row,Tag,Typography } from 'antd'
import React, { useState, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from 'react-router-dom';
import * as actions from "../_redux/skill/skillActions";

const { Title } = Typography;

export default function SkillsSection() {


    const match = useRouteMatch()
    const [form] = Form.useForm();
    const [visible,setVisible] = useState(false);
    
    const dispatch = useDispatch();
    const { user,entities,listLoading } = useSelector(
      (state) => ({
        listLoading: state.skills.listLoading,
        entities : state.skills.entities,
        user : state.auth.user
      }),
      shallowEqual
    );

    useEffect(() => {
      // server call for getting Customer by id
      dispatch(actions.fetchSkills(match.params));
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
            dispatch(actions.createSkill(values)).then(() => handleCancel())
            console.log(values.skill);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
        <Row justify="space-between" align="middle">
            <Col>
                <Title level={4}>Skills</Title>
            </Col>
            {
              !listLoading ? entities != null && match.params.teacherId === user.id ?
              <Col>
                  <PlusOutlined onClick={showModal} style={{fontSize:"1.4rem"}} />
              </Col>
              : null : null 
            }
        </Row>
        <Row style={{flexDirection:"row",marginTop:".5rem"}}>
          {
            !listLoading ?  entities != null ?
                entities.map((skill,index) => (
                  <Tag key={index} color="blue">{skill.skill}</Tag>
                ))
            : <span>No Skills</span> : <span>Loading...</span>
          }
        </Row>
        <Modal
          title="Add Skill"
          visible={visible}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Reset
            </Button>,
            <Button key="submit" type="primary" htmlType="submit" onClick={onFinish}>
              Add
            </Button>,
          ]}
        >
           <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Skill"
                name="skill"
                rules={[{ required: true, message: 'Please input your skill!' }]}
            >
                <Input />
            </Form.Item>
            </Form>
        </Modal>
    </div>
    )
}
