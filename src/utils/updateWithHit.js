import setBallsAndStrikesToZero from "./setBallsAndStrikesToZero";

const updateWithBall = (gameStatus) => {

    let {balls, strikes, fouls, hits} = gameStatus;

    [balls, strikes] = setBallsAndStrikesToZero();

    return {...gameStatus, balls: balls, strikes: strikes};
}

export default updateWithBall;