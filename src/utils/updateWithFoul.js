

const updateWithBall = (gameStatus) => {

    let {balls, strikes, fouls, hits} = gameStatus;

    if (strikes < 2)
        { strikes += 1; }

    return {...gameStatus, strikes: strikes};
    
}

export default updateWithBall;