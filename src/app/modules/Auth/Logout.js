import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import * as auth from "./_redux/authRedux";
import { Spin } from 'antd';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    const { hasAuthToken } = this.props;
    return hasAuthToken ? <Spin size="large" /> : <Redirect to="/auth/login" />;
  }
}

export default connect(
  ({ auth }) => ({ hasAuthToken: Boolean(auth.authToken) }),
  auth.actions
)(Logout);
