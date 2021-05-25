import React, { useState } from 'react';
import  styles  from "./Login.module.scss";
import { Form, Input, Button, Checkbox, Spin, Space,Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";

const Login = props => {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage ] = useState("");
  const [status,setStatus] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    delete values.remember;
    login(values.email,values.password).then(res => {
      setLoading(false);
      props.login(res.data.data)
    }).catch(err =>{
      setLoading(false);
      setStatus(true);
      setErrorMessage("Invalid Credentials");
    });
  }
  return (
    <div className={styles.loginForm}>
         <div>
          <h1 className={styles.title}>CollabWizard</h1>
          <p className={styles.center}><b>"Teach better, together"</b></p>
          <h2 className={styles.center}>Login</h2>
         {status ?   
         <Alert
          style={{margin :"1rem"}}
          message={errorMessage}
          type="error"
          showIcon /> : null}
        </div>
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link to="/auth/forgot-password" className={styles.loginFormForgot} >
          Forgot password
        </Link>
      </Form.Item>
        {
          loading ? 
          <div className={styles.spinner}>
            <Spin />
          </div> :  
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              Log in
            </Button>
          </Form.Item>
        }
      <div className={styles.center}>              
          <Link to="/auth/signup">Register now!</Link>
        </div>
    </Form>
    </div>
  )

};

export default connect(null,auth.actions)(Login);
