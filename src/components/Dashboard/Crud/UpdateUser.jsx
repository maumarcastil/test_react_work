import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { env } from "../../../config/environment";
import { Modal, Form, Input, Button, Select, Checkbox } from "antd";

const { Option } = Select;
const UpdateUser = ({ setReload, data }) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    if (
      values.names.trim() !== "" ||
      values.age.trim() !== "" ||
      values.gender.trim() !== "" ||
      values.skill.length > 0
    ) {
      values.state = 1;
      axios
        .put(env.back + "/users/" + data._id, values)
        .then(() => {
          setReload(true);
          setIsModalVisible(false);
          Swal.fire("success", "User successfully saved!", "success");
        })
        .catch((err) => Swal.fire("Error", err.message, "error"));
    } else {
    }
  };

  const onFinishFailed = () => {
    Swal.fire("warning", "All fields are required!", "warning");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update user
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            names: data.names,
            age: data.age,
            gender: data.gender,
            skill: data.skill,
            student: data.student,
          }}
        >
          <Form.Item
            label="Names"
            name="names"
            rules={[
              {
                required: true,
                message: "Please input your Names!",
              },
            ]}
          >
            <Input placeholder="Names" />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your Age!",
              },
            ]}
          >
            <Input placeholder="Age" type="number" />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "Please select your Gender!",
              },
            ]}
          >
            <Select>
              <Select.Option value="M">Male</Select.Option>
              <Select.Option value="F">Femenine</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="skill"
            label="Skills"
            rules={[
              {
                required: true,
                message: "Please input your Skills!",
              },
            ]}
          >
            <Select mode="tags" style={{ width: "100%" }} placeholder="Skills">
              <Option key={"Skill1"}>Skill1</Option>
              <Option key={"Skill2"}>Skill2</Option>
              <Option key={"Skill3"}>Skill3</Option>
              <Option key={"Skill4"}>Skill4</Option>
              <Option key={"Skill5"}>Skill5</Option>
            </Select>
          </Form.Item>
          <Form.Item name="student" valuePropName="checked">
            <Checkbox>Is student</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateUser;
