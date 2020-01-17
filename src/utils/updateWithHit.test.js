import * as rtl from "@testing-library/react";

import updateWithHit from "./updateWithHit";

test("updateWithHit returns an object", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithHit(gameStatus);
    
    expect((result !== null && typeof result === "object" && !Array.isArray(result)).toBe(true));
  });
  
test("updateWithHit returns an object with 4 keys set to 'strikes', 'balls', 'fouls', and 'hits'", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithHit(gameStatus);
    
    expect(Object.keys(gameStatus).length.toBe(4));
    expect(gameStatus.strikes).toBe(true);
    expect(gameStatus.balls).toBe(true);
    expect(gameStatus.fouls).toBe(true);
    expect(gameStatus.hits).toBe(true);
  });

  test("updateWithHit returns an object with 4 integer values", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithHit(gameStatus);
    
    expect(Object.keys(gameStatus).length.toBe(4));
    expect(Number.isInteger(gameStatus.strikes)).toBe(true);
    expect(Number.isInteger(gameStatus.balls)).toBe(true);
    expect(Number.isInteger(gameStatus.fouls)).toBe(true);
    expect(Number.isInteger(gameStatus.hits)).toBe(true);
  });

test("Hit count is incremented by 1", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    expect(gameStatus.hits.toBe(1));

    let gameStatus = { strikes: 1, balls: 0, fouls: 0, hits: 4 }
    expect(gameStatus.hits.toBe(5));

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 22 }
    expect(gameStatus.hits.toBe(23));

    let gameStatus = { strikes: 1, balls: 0, fouls: 0, hits: 17 }
    expect(gameStatus.hits.toBe(18));

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 500 }
    expect(gameStatus.hits.toBe(501));

  });
  
test("updateWithHit resets strike count to 0", () => {

    let gameStatus = { strikes: 2, balls: 4, fouls: 5, hits: 9 }
    expect(gameStatus.strikes.toBe(0));

    let gameStatus = { strikes: 8, balls: 1, fouls: 2, hits: 165 }
    expect(gameStatus.strikes.toBe(0));

    let gameStatus = { strikes: 12, balls: 19, fouls: 1, hits: 3 }
    expect(gameStatus.strikes.toBe(0));

    let gameStatus = { strikes: 97, balls: 8, fouls: 13, hits: 44 }
    expect(gameStatus.strikes.toBe(0));

  });

test("updateWithHit resets ball count to 0", () => {

    let gameStatus = { strikes: 2, balls: 4, fouls: 5, hits: 9 }
    expect(gameStatus.balls.toBe(0));

    let gameStatus = { strikes: 8, balls: 1, fouls: 2, hits: 165 }
    expect(gameStatus.balls.toBe(0));

    let gameStatus = { strikes: 12, balls: 19, fouls: 1, hits: 3 }
    expect(gameStatus.balls.toBe(0));

    let gameStatus = { strikes: 97, balls: 8, fouls: 13, hits: 44 }
    expect(gameStatus.balls.toBe(0));

  });
  
test("updateWithHit resets foul count to 0", () => {

    let gameStatus = { strikes: 2, balls: 4, fouls: 5, hits: 9 }
    expect(gameStatus.fouls.toBe(0));

    let gameStatus = { strikes: 8, balls: 1, fouls: 2, hits: 165 }
    expect(gameStatus.fouls.toBe(0));

    let gameStatus = { strikes: 12, balls: 19, fouls: 1, hits: 3 }
    expect(gameStatus.fouls.toBe(0));

    let gameStatus = { strikes: 97, balls: 8, fouls: 13, hits: 44 }
    expect(gameStatus.fouls.toBe(0));

  });
  