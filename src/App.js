import React from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import useForm from "./components/hooks/useForm";

import "./app.css";

const App = () => {



  return (
    <>
      <Display />
      <Dashboard />
    </>
  )
};

export default App;