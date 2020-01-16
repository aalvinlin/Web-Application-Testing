import React, { useState } from "react";
import useForm from "./hooks/useForm";

const Dashboard = ({gameStatus, setGameStatus}) => {

    // const [strikes, setStrikes, handleStrikes] = useForm(0);
    // const [balls, setBalls, handleBalls] = useForm(0);
    // const [fouls, setFouls, handleFouls] = useForm(0);
    // const [hits, setHits, handleHits] = useForm(0);

    const handleStrikes = () => {

        const newStrikes = gameStatus.strikes + 1;

        if (newStrikes > 3)
        {
            newStrikes = 0;
        }

        setGameStatus({ ...gameStatus, strikes: newStrikes})
    }

const handleStrikes = () => {

        const newStrikes = gameStatus.strikes + 1;

        if (newStrikes > 3)
        {
            newStrikes = 0;
        }

        setGameStatus({ ...gameStatus, strikes: newStrikes})
    }


    return (

        <div className="dashboard">
            <h2>Dashboard</h2>
            
            <form name="dashboardForm">
                <button name="strike" onClick={handleStrikes}>Strike</button>
                <button name="ball" onClick={handleBalls}>Ball</button>
                <button name="foul" onClick={handleFouls}>Foul</button>
                <button name="hit" onClick={handleHits}>Hit</button>
            </form>
        </div>
    )

}

export default Dashboard;