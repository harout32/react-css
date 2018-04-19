import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header/header";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Header} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
