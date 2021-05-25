import React, { useState } from 'react';
import { Layout, Menu} from 'antd';
import { TeamOutlined,FileOutlined, HomeOutlined, UserOutlined, EyeOutlined, SafetyOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = (props) =>{

  const [collapsed, setcollapsed] = useState(false);
  
  const onCollapse = collapsed => {
    console.log(collapsed);
    setcollapsed(collapsed);
  };

    return (
      <Layout style={{ height: '100%' }}>
        <Sider  style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }} theme="light" breakpoint="md"
      collapsedWidth="0" collapsible collapsed={collapsed} onCollapse={onCollapse}>
          {/* <div className="logo" /> */}
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined/>}>
              <Link to={`/dashboard`}>
                Home
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<TeamOutlined />} title="Community">
              <Menu.Item key="2">
                <a href="http://localhost:4567" target="blank">
                  Forum
                </a>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<FileOutlined />} title="Resources">
              <Menu.Item key="3" icon={<EyeOutlined />}>
              <Link to={`/resources/public`}>
                Public
              </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<SafetyOutlined />}>
              <Link to={`/resources/private`}>
                Private
              </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    );
  }

export default SideBar;