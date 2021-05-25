import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row,Select,Typography } from 'antd'
import React, { useState, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../_redux/education/educationActions";
import {START_YEAR} from "../pages/YearHelper";
import EducationCard from '../components/EducationCard';
import { useRouteMatch } from 'react-router-dom';

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function EducationSection() {

    const match = useRouteMatch()
    const [form] = Form.useForm();
    const [visible,setVisible] = useState(false);

    const dispatch = useDispatch();
    const { user,entities,listLoading } = useSelector(
      (state) => ({
        listLoading: state.educations.listLoading,
        entities : state.educations.entities,
        user : state.auth.user
      }),
      shallowEqual
    );


    useEffect(() => {
      // server call for getting Customer by id
      dispatch(actions.fetchEducations(match.params));
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
            dispatch(actions.createEducation(values)).then(() => handleCancel());
            console.log(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={4}>Education</Title>
                </Col>
                {
                    !listLoading ? entities != null && match.params.teacherId === user.id ?
                    <Col>
                        <PlusOutlined onClick={showModal} style={{fontSize:"1.4rem"}} />
                    </Col>
                    : null : null 
                }
            </Row>
            <Row style={{flexDirection:"column"}}>
            {
            !listLoading ?  entities != null ?
                entities.map((education,index) => (
                    <EducationCard key={index} listLoading={listLoading} data={education}/>
                ))
            : <span>No Education</span> : <span>Loading...</span>
            }
            </Row>
            <Modal
                title="Add Education"
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
                <label htmlFor="school" >School *</label>
                <Form.Item
                    name="school"
                    rules={[{ required: true, message: 'Please input your school!' }]}
                >
                    <Input />
                </Form.Item>
                <label htmlFor="degree" >Degree *</label>
                <Form.Item
                    name="degree"
                    rules={[{ required: true, message: 'Please input your degree!' }]}
                >
                    <Input />
                </Form.Item>
                <label htmlFor="fieldOfStudy" >Field of study *</label>
                <Form.Item
                    name="fieldOfStudy"
                    rules={[{ required: true, message: 'Please input your field of study!' }]}
                >
                    <Input />
                </Form.Item>
                <Row gutter={[24,0]}>
                <Col>
                <label htmlFor="startYear" >Start Year *</label>
                <Form.Item 
                    name="startYear"
                    hasFeedback
                    rules={[{ required: true, message: 'Please choose start date!' }]}
                    >
                    <Select style={{ width: 120 }}>
                        {
                            START_YEAR.map((year,index) => (
                                <Option key={index} value={year}>{year}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                </Col>
                <Col>
                <label htmlFor="endYear" >End Year *</label>
                <Form.Item 
                    name="endYear"
                    hasFeedback
                    rules={[{ required: true, message: 'Please choose end date!' }]}
                >
                    <Select style={{ width: 120 }}>
                        {
                            START_YEAR.map((year,index) => (
                                <Option key={index} value={year}>{year}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                </Col>
                </Row>
                </Form>
            </Modal>
        </div>
    )
}
