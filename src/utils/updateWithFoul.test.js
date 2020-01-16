import * as rtl from "@testing-library/react";
import { render } from '@testing-library/react';

import updateWithFoul from "./updateWithFoul";

test("updateWithFoul returns an object", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithFoul(gameStatus);
    
    expect((result !== null && typeof result === "object" && !Array.isArray(result)).toBe(true));
  });
  
test("updateWithFoul returns an object with 4 keys set to 'strikes', 'balls', 'fouls', and 'hits'", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithFoul(gameStatus);
    
    expect(Object.keys(gameStatus).length.toBe(4));
    expect(gameStatus.strikes).toBe(true);
    expect(gameStatus.balls).toBe(true);
    expect(gameStatus.fouls).toBe(true);
    expect(gameStatus.hits).toBe(true);
  });

  test("updateWithFoul returns an object with 4 integer values", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithFoul(gameStatus);
    
    expect(Object.keys(gameStatus).length.toBe(4));
    expect(Number.isInteger(gameStatus.strikes)).toBe(true);
    expect(Number.isInteger(gameStatus.balls)).toBe(true);
    expect(Number.isInteger(gameStatus.fouls)).toBe(true);
    expect(Number.isInteger(gameStatus.hits)).toBe(true);
  });

test("Foul count is incremented by 1", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 2, hits: 0 }
    expect(gameStatus.hits.toBe(3));

    let gameStatus = { strikes: 1, balls: 0, fouls: 1, hits: 4 }
    expect(gameStatus.hits.toBe(2));

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 22 }
    expect(gameStatus.hits.toBe(1));

    let gameStatus = { strikes: 1, balls: 0, fouls: 33, hits: 17 }
    expect(gameStatus.hits.toBe(34));

    let gameStatus = { strikes: 0, balls: 0, fouls: 999, hits: 500 }
    expect(gameStatus.hits.toBe(1000));

  });
  
test("Strike count is incremented by 1 if strikes is below 2", () => {

    let gameStatus = { strikes: 1, balls: 4, fouls: 5, hits: 9 }
    expect(gameStatus.fouls.toBe(0));

    let gameStatus = { strikes: 2, balls: 1, fouls: 2, hits: 165 }
    expect(gameStatus.fouls.toBe(2));

    let gameStatus = { strikes: 18, balls: 19, fouls: 1, hits: 3 }
    expect(gameStatus.fouls.toBe(18));

    let gameStatus = { strikes: 0, balls: 8, fouls: 13, hits: 44 }
    expect(gameStatus.fouls.toBe(1));

    let gameStatus = { strikes: 45, balls: 3, fouls: 37, hits: 4 }
    expect(gameStatus.fouls.toBe(45));

    let gameStatus = { strikes: 61, balls: 91, fouls: 5, hits: 9 }
    expect(gameStatus.fouls.toBe(61));

  });
  