import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'

import 'antd/dist/antd.css';

import {
    Form, Icon, Input, Button, Checkbox,Row, Col
  } from 'antd';

  
  const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

  class  Login extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Row style={{paddingTop: 250}}>
        <Col xs={{ span: 50, offset: 3 }} lg={{ span: 7, offset: 9 }} span={20}>
        <DemoBox value={200}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/signup">register now!</Link>
            
      
          </Form.Item>
        </Form>
        </DemoBox>
         </Col>
         </Row>
      );
    }
  }
  export default  Form.create({ name: 'normal_login' })(Login);
 // const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
  
  //ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('root'));
 


