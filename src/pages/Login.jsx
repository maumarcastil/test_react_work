import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FormLogin from "src/components/Login/FormLogin";

const Login = (props) => {
  const { history } = props;
  const user = useSelector((state) => state?.user?.data);
  useEffect(() => {
    if (user) history.push("Dashboard");
  }, [user, history]);

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-md-6 col-lg-4">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <FormLogin />
            </div>
          </div>
          <div
            className="col-md-6 col-lg-8 d-none d-md-block"
            style={{ backgroundColor: "#EAF3FE" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Login;
