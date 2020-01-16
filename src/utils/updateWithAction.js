import updateWithBall from "./updateWithBall";
import updateWithStrike from "./updateWithStrike";
import updateWithHit from "./updateWithHit";
import updateWithFoul from "./updateWithFoul";

const updateWithAction = (gameStatus, action) => {

    switch (action)
        {
            case ball:
                return updateWithBall(gameStatus);
            
            case strike:
                return updateWithStrike(gameStatus);

            case hit:
                return updateWithHit(gameStatus);

            case foul:
                return updateWithFoul(gameStatus);
        }
}

export default updateWithAction;