import { EditFilled } from '@ant-design/icons'
import { Avatar, Col, Divider, Row } from 'antd'
import React from 'react'

export default function EducationCard(props) {
    const { data,listLoading } = props;

    return (
        <>
            {
                !listLoading ? 
                <>
                <Row align="middle">
                    <Col span={2} >
                        <Avatar size={50} />
                    </Col>
                    <Col span={20} offset={2} style={{flexDirection:"column",marginLeft:"1rem"}}>
                        <Row style={{flexDirection:"column"}}>
                            <Col>
                                <span style={{fontSize:"1.1rem",fontWeight:"bold",flexWrap:"wrap"}}>{data.school}</span>
                            </Col>
                            <Col>
                                <span>{data.degree} - {data.fieldOfStudy}</span>
                            </Col>
                            <Col>
                                <span>{data.startYear} - {data.endYear}</span>
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
