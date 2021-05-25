import React, { useState } from 'react';
import styles from "./Signup.module.scss";
import { Form, Input, Button, Checkbox,Alert,Spin } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as auth from "../_redux/authRedux";
import { register } from "../_redux/authCrud";


const Signup = ({history,props}) => {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage ] = useState("");
  const [status,setStatus] = useState(false);

  const onFinish = (values) =>{
    setLoading(true);
    delete values.remember;
    register(values.fullname,values.email,values.password).then(res => {
      setLoading(false);
      history.push("/auth/login");
      // props.login(res.data.data);
    }).catch(err =>{
      setLoading(false);
      setStatus(true);
      setErrorMessage("Enter correct required fields");
    });
  }
      return (
        <div className={styles.signupForm}>
          <div>
            <h1 className={styles.title}>CollabWizard</h1>
            <p className={styles.center}><b>"Teach better, together"</b></p>
            <h2 className={styles.center}>Register</h2>
            {status ?   
            <Alert
              style={{margin :"1rem"}}
              message={errorMessage}
              type="error"
              showIcon /> : null}
          </div>
        <Form  
          layout="vertical"
          name="normal_login"
          initialValues={{
            termsandcondition: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="fullname"
            // label="Email :"
            rules={[
              {
                required: true,
                message: 'Please input your fullname!',
              },
            ]}
          >
            {/* <label htmlFor="email">Email :</label> */}
            <Input type="text"  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Fullname" />
          </Form.Item>
          <Form.Item
            name="email"
            // label="Email :"
            rules={[
              {
                type : 'email',
                message : "Enter valid email!"
              },
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            {/* <label htmlFor="email">Email :</label> */}
            <Input type="email"  prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            // label="Password :"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            {/* <label htmlFor="password">Password :</label> */}
            <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="termsandcondition" 
            rules={[
              {
                required: true,
                message: 'Please accept term and conditions',
              },
            ]} valuePropName="checked" noStyle>
              <Checkbox>I accept Terms and Conditions</Checkbox>
            </Form.Item>
          </Form.Item>
          {
            loading ?
            <div className={styles.spinner} >
              <Spin />
            </div> :
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.signupFormButton}>
                Register
              </Button>
            </Form.Item>
          }
          <div className={styles.center}>              
            <Link to="/auth/login">Login now!</Link>
          </div>
        </Form>
        </div>
      );
};


export default connect(null,auth.actions)(Signup);
