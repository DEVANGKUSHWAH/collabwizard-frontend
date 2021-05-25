import React from 'react'
import { Row,Col } from "antd";
import MyNetworkPage from './pages/MyNetworkPage/MyNetworkPage';
import SuggestionPage from './pages/Suggestion/SuggestionPage';

export default function NetworkPage() {
    return (
            <Row style={{marginTop:"1rem"}}>
                <Col style={{width:500}} xs={{span:24}} sm={{ span: 24 }} lg={{ span: 12 }}>
                    <MyNetworkPage />
                </Col>
                <Col xs={{span:24}} sm={{ span: 12}} lg={{ span: 12}}>
                   <SuggestionPage />
                </Col>
            </Row>
    )
}
