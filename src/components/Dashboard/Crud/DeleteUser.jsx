import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Modal, Button } from "antd";
import { env } from "../../../config/environment";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const DeleteUser = ({ setReload, data }) => {
  return (
    <>
      <Button onClick={() => showConfirm(setReload, data)}>Delete</Button>
    </>
  );
};

const showConfirm = (setReload, data) => {
  confirm({
    title: "Are you sure you want to delete it?",
    icon: <ExclamationCircleOutlined />,
    content: "This user will be removed",
    onOk() {
      axios
        .put(env.back + "/users/" + data._id, { state: 0 })
        .then(() => {
          setReload(true);
          Swal.fire("success", "User successfully saved!", "success");
        })
        .catch((err) => Swal.fire("Error", err.message, "error"));
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

export default DeleteUser;
