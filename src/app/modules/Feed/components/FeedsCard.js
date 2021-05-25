import { Card, Divider } from 'antd'
import React, { useState } from 'react'
import FeedCardTopHeader from './FeedsCardTopHeader';
import { EllipsisOutlined } from '@ant-design/icons';
import FeedCardBottom from './FeedsCardBottom';
import Feed from '../pages/Feed/Feed';

const { Meta } = Card;

export default function FeedsCard(props) {

    const { data, listLoading } = props;
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };
    
    return (
        <div >
           {
              !listLoading ? 
              <>
              <Card 
                  hoverable
                  title={<FeedCardTopHeader data={data} listLoading={listLoading} />}
                  extra={<EllipsisOutlined size={36} />}
                  // style={{ margin:"2rem"}}
                  cover={<img onClick={showModal} alt="example" src={data.postContentUrl} />}
              >
                  <div>
                      <span>{data.postContent}</span>
                  </div>
                  {/* <Divider /> */}
                  <div>
                      <FeedCardBottom />
                  </div>
              </Card>
              <Feed visible={visible} confirmLoading={confirmLoading} handleOk={handleOk} handleCancel={handleCancel} />
              </> : null
            }
        </div>
    )
}
