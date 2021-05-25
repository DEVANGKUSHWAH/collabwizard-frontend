import { EditFilled } from '@ant-design/icons'
import { Avatar, Col, Divider, Row } from 'antd'
import React from 'react'

export default function ExperienceCard(props) {
    const { data,listLoading } = props;

    return (
        <div>
            {
                !listLoading ? 
                <>
                <Row align="middle">
                    <Col >
                        <Avatar size={50} />
                    </Col>
                    <Row style={{flexDirection:"column",marginLeft:"1rem"}}>
                        <Col>
                            <span style={{fontSize:"1.1rem",fontWeight:"bold"}}>{data.title}</span>
                        </Col>
                        <Col>
                            <span>{data.company} - {data.employmentType}</span>
                        </Col>
                        <Col>
                            <span>{data.startYear} - {data.endYear}</span>
                        </Col>
                        <Col>
                            <span>{data.location}</span>
                        </Col>
                    </Row>
                </Row>
                <Divider />
                </>
                : null
            }
        </div>
    )
}
