import setBallsAndStrikesToZero from "./setBallsAndStrikesToZero";

const updateWithStrike = (gameStatus) => {

    let [balls, strikes, fouls, hits] = gameStatus;

    strikes += 1;

    if (strikes === 3)
        { [balls, strikes] = setBallsAndStrikesToZero(); }

    return {...gameStatus, balls: balls, strikes: strikes};
    
}

export default updateWithStrike;