import { CommentOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'

export default function FeedsCardBottom() {
    return (
        <div style={{marginTop:"1rem"}}>
            <Row>
                <Col span={4} style={{marginLeft:"0rem"}}>
                    <LikeOutlined />  2345
                </Col>
                <Col span={2} style={{justifyContent:"flex-end"}}>
                    <CommentOutlined /> 33 
                </Col>
            </Row>
            <Row style={{marginTop:".5rem"}}>
                <Col style={{padding:".5rem",paddingLeft:"0rem"}}>
                    <LikeOutlined size={24} /> Like
                </Col>
                <Col style={{padding:".5rem"}}>
                    <CommentOutlined /> Comments
                </Col>
                <Col style={{padding:".5rem"}}>
                    <ShareAltOutlined /> Share
                </Col>
            </Row>
        </div>
    )
}
