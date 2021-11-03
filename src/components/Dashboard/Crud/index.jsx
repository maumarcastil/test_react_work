import axios from "axios";
import CreateUser from "./CreateUser";
import { Table, Tag, Space, Divider } from "antd";
import React, { useState, useEffect } from "react";
import { env } from "../../../config/environment";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

const ListUsers = () => {
  const [dataUsers, setDataUsers] = useState(false);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      axios.get(env.back + "/users").then((res) => {
        const dataFiltered = res.data.filter((user) => user.state === 1);
        setDataUsers(dataFiltered);
      });
      setReload(false);
    }
  }, [reload]);

  const columns = [
    {
      title: "Names",
      dataIndex: "names",
      key: "names",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Skill",
      key: "skill",
      dataIndex: "skill",
      render: (skill) => (
        <>
          {skill.map((s) => {
            let color = s.length > 5 ? "geekblue" : "green";
            return (
              <Tag color={color} key={s}>
                {s.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Student",
      key: "student",
      dataIndex: "student",
      render: (student) => <>{student === true ? "Yes" : "No"}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (data) => {
        return (
          <Space size="middle">
            <UpdateUser setReload={setReload} data={data} />
            <DeleteUser setReload={setReload} data={data} />
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <CreateUser setReload={setReload} />
      <Divider />
      {dataUsers && <Table columns={columns} dataSource={dataUsers} />}
    </>
  );
};

export default ListUsers;
