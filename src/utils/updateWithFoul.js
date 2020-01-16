

const updateWithBall = (gameStatArray) => {

    let [balls, strikes, fouls, hits] = gameStatArray;

    if (strikes < 2)
        { strikes += 1; }

    return [balls, strikes, fouls, hits];
    
}

export default updateWithBall;