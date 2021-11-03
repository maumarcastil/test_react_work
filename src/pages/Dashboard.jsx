import React from "react";
import { useEffect } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

/* Redux */
import { useSelector, useDispatch } from "react-redux";

import Welcome from "src/components/Dashboard/Welcome";
import { menuOption } from "src/actions/dashboardAction";
import ListUsers from "src/components/Dashboard/Crud";
import { logout } from "src/actions/userAction";

const { Header, Content, Sider } = Layout;

const Dashboard = (props) => {
  const { history } = props;

  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.data);
  const dashboard = useSelector((state) => state?.dashboard?.menuOption);
  useEffect(() => {
    if (user === undefined || !user) history.push("/");
  }, [user, history]);

  const componentsSwtich = (key) => {
    switch (key) {
      case "Welcome":
        return <Welcome user={user.user} />;
      case "Crud":
        return <ListUsers />;
      case "item3":
        return <h3>item3</h3>;
      default:
        break;
    }
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => broken}
          onCollapse={(collapsed, type) => collapsed}
          style={{ backgroundColor: "#fff" }}
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[dashboard]}
            style={{ minHeight: "100vh" }}
            onClick={(e) => {
              if (e.key === "Logout") {
                dispatch(logout());
              } else {
                dispatch(menuOption(e.key));
              }
            }}
          >
            <Menu.Item key="Welcome" icon={<UserOutlined />}>
              Welcome
            </Menu.Item>
            <Menu.Item key="Crud" icon={<VideoCameraOutlined />}>
              Crud
            </Menu.Item>
            <Menu.Item key="Logout" icon={<VideoCameraOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ backgroundColor: "#ffff" }}>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
            s
          ></Header>
          <Content style={{ margin: "1rem" }}>
            {componentsSwtich(dashboard)}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
