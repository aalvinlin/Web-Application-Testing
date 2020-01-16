import setBallsAndStrikesToZero from "./setBallsAndStrikesToZero";

const updateWithStrike = (gameStatArray) => {

    let [balls, strikes, fouls, hits] = gameStatArray;

    strikes += 1;

    if (strikes === 3)
        { [balls, strikes] = setBallsAndStrikesToZero(); }

    return [balls, strikes, fouls, hits];
    
}

export default updateWithStrike;