import React from "react";

const Display = ({gameStatus, setGameStatus}) => {

    const {strikes, balls, fouls, hits} = gameStatus;

    return (
        <div className="display">
            <h2>Display</h2>

            <div className="stats">
                <p>Strikes: {strikes}</p>
                <p>Balls: {balls}</p>
                <p>Fouls: {fouls}</p>
                <p>Hits: {hits}</p>
            </div>
        </div>
    )
}

export default Display;