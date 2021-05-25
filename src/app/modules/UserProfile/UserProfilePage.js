import { Col, Row } from 'antd'
import React from 'react'
import AboutSection from './pages/AboutSection'
import EducationSection from './pages/EducationSection'
import ExperienceSection from './pages/ExperienceSection'
import InterestSection from './pages/InterestSections'
import SkillsSection from './pages/SkillsSection'
import TopProfileSection from './pages/TopProfileSection'

export default function UserProfilePage() {
    return (
        <>
            <Row style={{justifyContent:"center",marginTop:"2rem"}}>
                <Col style={{width:500}} xs={{span:24}} sm={{ span: 24, offset: 1 }} lg={{ span: 12, offset: 1 }}>
                    <TopProfileSection />
                    <AboutSection />
                    <ExperienceSection />
                    <EducationSection />
                </Col>
                <Col xs={{span:0}} sm={{ span: 0, offset: 1 }} lg={{ span: 6}}>
                    <SkillsSection />
                    <InterestSection />
                </Col>
            </Row>
        </>
    )
}
