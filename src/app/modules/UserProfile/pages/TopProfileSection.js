import { Avatar, Col, Row,Form } from 'antd';
import React, { useState, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from 'react-router-dom';
import * as actions from "../_redux/profile/profileActions";

export default function TopProfileSection() {

    const match = useRouteMatch()
    const [form] = Form.useForm();
    
    const dispatch = useDispatch();
    const { actionsLoading, profileForEdit,entities,listLoading } = useSelector(
      (state) => ({
        actionsLoading: state.profile.actionsLoading,
        listLoading: state.profile.listLoading,
        profileForEdit: state.profile.profileForEdit,
        entities : state.profile.entities
      }),
      shallowEqual
    );

    useEffect(() => {
      // server call for getting Customer by id
      dispatch(actions.fetchProfiles(match.params));
    }, [dispatch]);

    return (
        <>
        {
        !listLoading ? entities != null ?
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row>
                <Col xs={{ span: 5 }}>
                    <Avatar shape="square" size={80}/>
                </Col>
            </Row>
            <Row style={{justifyContent:"space-between",marginTop:"1rem"}}>
                <Col>
                    <Row style={{flexDirection:"column"}}>
                        <Col xs={24} sm={24}>
                            <span style={{fontSize:"1.2rem",fontWeight:"bold"}} >{entities.fullname}</span>
                        </Col>
                        {
                            entities.experience.length > 0 ?
                            <Col>
                                <span style={{fontSize:"1rem",fontWeight:"bold"}}>{entities.experience[0].title}</span>
                            </Col> : null
                        }
                        <Col>
                            <span style={{fontSize:"1rem",fontWeight:"bold"}}>Indore, Madhya Pradesh, India </span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{flexDirection:"column"}}>
                        <Col>
                            {
                            entities.experience.length > 0 ?
                                <Row>
                                    <Col span={10}>
                                        <Avatar shape="square" size={36}/>
                                    </Col>
                                    <Col span={12} offset={1}>
                                            <h4>{entities.experience[0].company}</h4>
                                    </Col>
                                </Row>
                            : null
                            }
                        </Col>
                        <Col>
                            {
                            entities.education.length > 0 ?
                            <Row>
                                <Col span={10}>
                                    <Avatar shape="square" size={36}/>
                                </Col>
                                <Col span={12} offset={1}>
                                        <h4>{entities.education[0].school} </h4>
                                </Col>
                            </Row>
                            : null
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        : null : null
        }
    </>
    )
}
