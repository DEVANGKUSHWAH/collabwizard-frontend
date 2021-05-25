import { Col, Row } from 'antd'
import React from 'react'
import Feeds from './pages/Feeds'
import Post from './pages/Post'
import Profile from './pages/Profile'

export default function FeedPage() {
    return (
        <>
            <Row gutter={[12,12]} justify="center" style={{margin:"2rem"}}>
                <Col xs={{ span: 5 }} md={{ span: 6 }} lg={{ span: 8 }} xl={{ span: 8 }}>
                    <Post />
                </Col>
                <Col xs={{ span: 5 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 8}} >
                    <Feeds />
                </Col>
                <Col xs={{ span: 11 }} md={{ span: 6 }} lg={{ span: 8 }} xl={{ span:8 }} >
                    <Profile />
                </Col>
            </Row>
        </>
    )
}
