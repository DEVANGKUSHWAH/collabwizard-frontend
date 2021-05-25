import { LikeOutlined } from '@ant-design/icons';
import { Modal, Button, Row, Divider } from 'antd';
import React, { useState } from 'react';
import FeedsCardTopHeader from '../../components/FeedsCardTopHeader';

const Feed = (props) => {

  return (
    <>
      <Modal 
        width="70vw"
        visible={props.visible}
        onCancel={props.handleCancel}
        footer={null}
      >
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:"65%"}}>
                <img style={{width:"100%",height:"70vh"}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </div>
            <div style={{width:"35%",marginLeft:"2rem"}}>
                <div >
                    <FeedsCardTopHeader />
                </div>
                <div style={{marginTop:"1rem"}} >
                    <span style={{paddingTop:"2rem"}}>FREE WEBINAR: Join our panel of experts on 3rd December at 16:00 GMT / 17:00 CET / 11am EST for an exclusive online panel discussion on YouGov’s Best Global Brands of 2020.</span>
                </div>
                <Divider />
                <div style={{marginTop:"1rem"}}>
                    <LikeOutlined /> 325
                </div>
            </div>
        </div>
      </Modal>
    </>
  );
};

export default Feed;