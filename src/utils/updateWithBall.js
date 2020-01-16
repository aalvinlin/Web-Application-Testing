import setBallsAndStrikesToZero from "./setBallsAndStrikesToZero";

const updateWithBall = (gameStatArray) => {

    let [balls, strikes, fouls, hits] = gameStatArray;

    balls += 1;

    if (balls === 4)
        { [balls, strikes] = setBallsAndStrikesToZero(); }

    return [balls, strikes, fouls, hits];

}

export default updateWithBall;