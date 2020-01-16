import React, { useState } from "react";

const Dashboard = ({gameStatus, setGameStatus}) => {

    // const [strikes, setStrikes, handleStrikes] = useForm(0);
    // const [balls, setBalls, handleBalls] = useForm(0);
    // const [fouls, setFouls, handleFouls] = useForm(0);
    // const [hits, setHits, handleHits] = useForm(0);

    const updateGameState = (typeOfHit) => {

        setGameStatus(updateWithAction(gameStatus, typeOfHit));
    }

    return (

        <div className="dashboard">
            <h2>Dashboard</h2>
            
            <form name="dashboardForm">
                <button name="strike" onClick={() => updateGameState("strike")}>Strike</button>
                <button name="ball" onClick={() => updateGameState("ball")}>Ball</button>
                <button name="foul" onClick={() => updateGameState("foul")}>Foul</button>
                <button name="hit" onClick={() => updateGameState("hit")}>Hit</button>
            </form>
        </div>
    )

}

export default Dashboard;