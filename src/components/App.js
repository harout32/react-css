import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import AppRouter from "../routers/App.router";

const App = () => {
  return <AppRouter />;
};

export default hot(module)(App);
