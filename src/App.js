import React, {useState} from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import useForm from "./components/hooks/useForm";

import "./app.css";

const App = () => {

  const [gameStatus, setGameStatus] = useState({
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  })

  return (
    <>
      <Display gameStatus={gameStatus} setGameStatus={setGameStatus} />
      <Dashboard gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </>
  )
};

export default App;