import setBallsAndStrikesToZero from "./setBallsAndStrikesToZero";

const updateWithBall = (gameStatus) => {

    let {balls, strikes, fouls, hits} = gameStatus;

    balls += 1;

    if (balls === 4)
        { [balls, strikes] = setBallsAndStrikesToZero(); }

    return {...gameStatus, balls: balls, strikes: strikes};

}

export default updateWithBall;