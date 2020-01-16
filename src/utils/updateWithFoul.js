

const updateWithBall = (gameStatus) => {

    let {balls, strikes, fouls, hits} = gameStatus;

    if (strikes < 2)
        { strikes += 1; }
    
    fouls += 1;

    return {...gameStatus, strikes: strikes, fouls: fouls};
    
}

export default updateWithBall;