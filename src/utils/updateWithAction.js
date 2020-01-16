import updateWithBall from "./updateWithBall";
import updateWithStrike from "./updateWithStrike";
import updateWithHit from "./updateWithHit";
import updateWithFoul from "./updateWithFoul";

const updateWithAction = (gameStatArray, action) => {

    switch (action)
        {
            case ball:
                return updateWithBall(gameStatArray);
            
            case strike:
                return updateWithStrike(gameStatArray);

            case hit:
                return updateWithHit(gameStatArray);

            case foul:
                return updateWithFoul(gameStatArray);
        }
}

export default updateWithAction;