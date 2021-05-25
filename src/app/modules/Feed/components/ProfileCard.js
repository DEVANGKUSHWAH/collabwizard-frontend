import { Avatar, Button, Card, Col, Divider, Row, Typography} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

const { Text, Title } = Typography;

export default function ProfileCard() {

    const { user } = useSelector(
        (state) => ({
          user : state.auth.user
        }),
        shallowEqual
      );

    return (
        <div>
            <Card className="box-shadow" size="small" style={{ margin:"2rem",borderRadius:".3rem"}}>
                <div style={{display:"flex",flexDirection : "column",justifyContent:"center",alignItems:"center"}}>
                    <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Text style={{fontSize:"1rem",fontWeight:"bold"}} >{user.fullname}</Text>
                </div>
                <div style={{textAlign:"center",margin:".5rem"}}>
                    <Text >{user.designation}</Text>
                </div>
                <Divider />
                <div>
                    <Row gutter={[16,16]} style={{justifyContent:"space-around"}}>
                        <Col span={12}>
                            <Text style={{textAlign:"center"}}>No of posts</Text>
                        </Col>
                        <Col>
                            <Text >235</Text> 
                        </Col>
                    </Row>
                    <Row gutter={[16,16]} style={{justifyContent:"space-around"}}>
                        <Col span={12}>
                            <Text style={{textAlign:"center"}}>No of posts</Text>
                        </Col>
                        <Col>
                            <Text >235</Text> 
                        </Col>
                    </Row>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Row style={{justifyContent:"center"}}>
                        <Col span={24}>
                        <Link to={`user-profile/${user.id}`} >
                           <Button type="primary" >View Profile</Button>
                        </Link>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    )
}
