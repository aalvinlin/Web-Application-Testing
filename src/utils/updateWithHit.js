import setBallsAndStrikesToZero from "./setBallsAndStrikesToZero";

const updateWithBall = (gameStatus) => {

    let {balls, strikes, fouls, hits} = gameStatus;

    [balls, strikes] = setBallsAndStrikesToZero();

    fouls = 0;

    return {...gameStatus, balls: balls, strikes: strikes, fouls: fouls};
}

export default updateWithBall;