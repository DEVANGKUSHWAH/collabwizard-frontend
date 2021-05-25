import React from 'react';
import Navbar from "../app/modules/shared/components/Navbar/Navbar";
import { Layout } from 'antd';

const { Content } = Layout;

function AppLayout({ children}) {

    return (
        <Layout >
            <Navbar />
            <div style={{backgroundColor:"#fff",marginTop:"4rem"}}>
                <Content>
                    {children}
                </Content>
            </div>
      </Layout>
    )
}

export default AppLayout