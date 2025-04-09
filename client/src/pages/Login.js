import React from 'react'
import "../styles/RegisterStyles.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const Login = () => {

   // Form handler
   const onFinishHandler = (values) => {
    console.log(values);
  };
  //Login Form
  return (
    <div className="form-container">
    <Form
      layout="vertical"
      onFinish={onFinishHandler}
      className="register-form"
    >
      <h3 className="text-center">Login Form</h3>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input type="password" />
      </Form.Item>

      <div style={{ marginBottom: "1rem" }}>
        <Link to="/register">Not a User? Register here</Link>
      </div>

      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </Form>
  </div>
  )
}

export default Login
