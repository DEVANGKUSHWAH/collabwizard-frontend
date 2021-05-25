import React, { Component, useState } from 'react'
import styles from "./ForgotPassword.module.scss";
import { Form, Input, Button,Alert,Spin} from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { requestPassword } from '../_redux/authCrud';
import { connect } from 'react-redux';
import * as auth from "../_redux/authRedux";


const ForgotPassword = props => {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage ] = useState("");
  const [status,setStatus] = useState(false);
  const [isRequested, setIsRequested] = useState(false);

  const onFinish = values => {
    requestPassword(values.email).then(res => {
      setLoading(false);
      setIsRequested(false);
    }).catch(err =>{
      setLoading(false);
      setStatus(true);
      setErrorMessage("Invalid email");
    });
  };

    return (
      <>
      {isRequested && <Redirect to="/auth" />}
      {!isRequested && (
      <div className={styles.forgotPasswordForm}>
      <div>
        <h1 className={styles.title}>School Tribe</h1>
        <p className={styles.center}><b>"Teach better, together"</b></p>
        <h2 className={styles.center}>ForgotPassword</h2>
        {status ?   
         <Alert
          style={{margin :"1rem"}}
          message={errorMessage}
          type="error"
          showIcon /> : null}
      </div>
    <Form
      name="normal_forgotPassword"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
            {
                type: "email",
                message : "Enter valid email!"
            },
            {
            required: true,
            message: 'Please input your email!',
            },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      {
          loading ? 
          <div className={styles.spinner}>
            <Spin />
          </div> :  
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.forgotPasswordFormButton}>
            Send me link
          </Button>
        </Form.Item>
      }
        <div className={styles.center}>              
          <Link to="/auth/login">Back to Login</Link>
        </div>
    </Form>
    </div>
    )}
    </>
  )
}

export default connect(null,auth.actions)(ForgotPassword);