import React from "react";
import Login from "src/pages/Login";
import Dashboard from "src/pages/Dashboard";
import { Route, Switch, useLocation } from "react-router-dom";

const RootRouter = () => {
  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" name="LoginPage" component={Login} />
      <Route exact name="Dashboard" path="/Dashboard" component={Dashboard} />
    </Switch>
  );
};

export default RootRouter;
