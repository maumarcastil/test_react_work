import React from "react";
import Swal from "sweetalert2";
import { Form, Input, Button, Image, Row, Divider, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

/* redux */
import { useDispatch } from "react-redux";
import { login, loginRequest } from "../../actions/userAction";

const { Text, Link } = Typography;

const FormLogin = () => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    if (values.email.trim() !== "" || values.password.trim() !== "") {
      dispatch(login(values));
    } else {
      Swal.fire("Alert", "All fields are required!", "warning");
    }
  };

  const onFinishFailed = (values) => {
    if (!values.values.email || !values.values.password)
      Swal.fire("Alert", "All fields are required!", "warning");
  };

  const onPress = () => {
    dispatch(loginRequest());
  };

  return (
    <>
      <Form
        className="w-100 mx-xl-5"
        name="normal_login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row justify="center">
          <Image
            width={200}
            preview={false}
            src="https://crudcrud.com/pics/logo-black.png"
          />
        </Row>
        <br />
        <br />

        <Form.Item>
          <Button
            block
            type="text"
            size="large"
            className="login-form-button"
            icon={<GoogleOutlined />}
            onClick={onPress}
          >
            Log in with Google
          </Button>
        </Form.Item>
        <Form.Item>
          <Divider plain style={{ fontWeight: "bold", color: "#ccc" }}>
            OR LOGIN WITH EMAIL
          </Divider>
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input placeholder="Email" size={"large"} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input size={"large"} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            block
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ backgroundColor: "#323565", border: 0 }}
          >
            Log in
          </Button>
        </Form.Item>

        <Divider plain />

        <Text disabled>
          Don't have an account yet? <Link>sign up</Link>
        </Text>
      </Form>
    </>
  );
};

export default FormLogin;
