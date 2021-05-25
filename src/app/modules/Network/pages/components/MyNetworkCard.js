import { Avatar, Col, Divider, Row } from 'antd'
import React from 'react'

export default function MyNetworkCard(props) {

    const { data, listLoading } = props;
    return (
        <> 
        {
            !listLoading ? 
            <>
                <Row align="middle" >
                    <Col span={2} >
                        <Avatar size={50} />
                    </Col>
                    <Col span={20} offset={2} style={{flexDirection:"column",marginLeft:"1rem"}}>
                        <Row style={{flexDirection:"column"}}>
                            <Col>
                                <span style={{fontSize:"1.1rem",fontWeight:"bold",flexWrap:"wrap"}}>{data.fullname}</span>
                            </Col>
                            <Col>
                                <span>Backend Developer</span>
                            </Col>
                            <Col>
                                <span>Indore, Madhya Pradesh, India</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider />
            </>
            : null
        }   
        </>
    )
}
